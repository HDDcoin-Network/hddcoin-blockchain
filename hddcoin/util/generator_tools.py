from __future__ import annotations

from typing import Any, Iterator, List, Optional, Tuple

from chiabip158 import PyBIP158

from hddcoin.consensus.cost_calculator import NPCResult
from hddcoin.types.blockchain_format.coin import Coin
from hddcoin.types.blockchain_format.sized_bytes import bytes32
from hddcoin.types.full_block import FullBlock
from hddcoin.types.header_block import HeaderBlock
from hddcoin.types.spend_bundle_conditions import SpendBundleConditions
from hddcoin.util.ints import uint64


def get_block_header(block: FullBlock, tx_addition_coins: List[Coin], removals_names: List[bytes32]) -> HeaderBlock:
    # Create filter
    byte_array_tx: List[bytearray] = []
    addition_coins = tx_addition_coins + list(block.get_included_reward_coins())
    if block.is_transaction_block():
        for coin in addition_coins:
            byte_array_tx.append(bytearray(coin.puzzle_hash))
        for name in removals_names:
            byte_array_tx.append(bytearray(name))

    bip158: PyBIP158 = PyBIP158(byte_array_tx)
    encoded_filter: bytes = bytes(bip158.GetEncoded())

    return HeaderBlock(
        block.finished_sub_slots,
        block.reward_chain_block,
        block.challenge_chain_sp_proof,
        block.challenge_chain_ip_proof,
        block.reward_chain_sp_proof,
        block.reward_chain_ip_proof,
        block.infused_challenge_chain_ip_proof,
        block.foliage,
        block.foliage_transaction_block,
        encoded_filter,
        block.transactions_info,
    )


def additions_for_npc(npc_result: NPCResult) -> List[Coin]:
    additions: List[Coin] = []

    if npc_result.conds is None:
        return []
    for spend in npc_result.conds.spends:
        for puzzle_hash, amount, _ in spend.create_coin:
            coin = Coin(spend.coin_id, puzzle_hash, amount)
            additions.append(coin)

    return additions


def tx_removals_and_additions(results: Optional[SpendBundleConditions]) -> Tuple[List[bytes32], List[Coin]]:
    """
    Doesn't return farmer and pool reward.
    """

    removals: List[bytes32] = []
    additions: List[Coin] = []

    # build removals list
    if results is None:
        return [], []
    for spend in results.spends:
        removals.append(bytes32(spend.coin_id))
        for puzzle_hash, amount, _ in spend.create_coin:
            additions.append(Coin(bytes32(spend.coin_id), bytes32(puzzle_hash), uint64(amount)))

    return removals, additions


def list_to_batches(list_to_split: List[Any], batch_size: int) -> Iterator[Tuple[int, List[Any]]]:
    if batch_size <= 0:
        raise ValueError("list_to_batches: batch_size must be greater than 0.")
    total_size = len(list_to_split)
    if total_size == 0:
        return iter(())
    for batch_start in range(0, total_size, batch_size):
        batch_end = min(batch_start + batch_size, total_size)
        yield total_size - batch_end, list_to_split[batch_start:batch_end]
