from __future__ import annotations

from dataclasses import dataclass
from typing import Optional

from hddcoin.types.blockchain_format.slots import (
    ChallengeChainSubSlot,
    InfusedChallengeChainSubSlot,
    RewardChainSubSlot,
    SubSlotProofs,
)
from hddcoin.util.streamable import Streamable, streamable


@streamable
@dataclass(frozen=True)
class EndOfSubSlotBundle(Streamable):
    challenge_chain: ChallengeChainSubSlot
    infused_challenge_chain: Optional[InfusedChallengeChainSubSlot]
    reward_chain: RewardChainSubSlot
    proofs: SubSlotProofs
