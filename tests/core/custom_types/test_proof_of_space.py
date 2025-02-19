from __future__ import annotations

from secrets import token_bytes

from hddcoin.consensus.default_constants import DEFAULT_CONSTANTS
from hddcoin.types.blockchain_format.proof_of_space import passes_plot_filter
from hddcoin.types.blockchain_format.sized_bytes import bytes32


class TestProofOfSpace:
    def test_can_create_proof(self) -> None:
        """
        Tests that the change of getting a correct proof is exactly 1/target_filter.
        """
        num_trials = 100000
        success_count = 0
        target_filter = 2**DEFAULT_CONSTANTS.NUMBER_ZERO_BITS_PLOT_FILTER
        for _ in range(num_trials):
            challenge_hash = bytes32(token_bytes(32))
            plot_id = bytes32(token_bytes(32))
            sp_output = bytes32(token_bytes(32))

            if passes_plot_filter(DEFAULT_CONSTANTS, plot_id, challenge_hash, sp_output):
                success_count += 1

        assert abs((success_count * target_filter / num_trials) - 1) < 0.35
