from __future__ import annotations

from hddcoin.types.blockchain_format.serialized_program import SerializedProgram

from .load_clvm import load_serialized_clvm_maybe_recompile

GENERATOR_MOD: SerializedProgram = load_serialized_clvm_maybe_recompile("rom_bootstrap_generator.clsp")
GENERATOR2_MOD: SerializedProgram = load_serialized_clvm_maybe_recompile("rom_bootstrap_generator2.clsp")
