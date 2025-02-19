from __future__ import annotations

from dataclasses import dataclass, field
from typing import List

from hddcoin.types.blockchain_format.serialized_program import SerializedProgram
from hddcoin.util.ints import uint32
from hddcoin.util.streamable import Streamable, streamable


class GeneratorBlockCacheInterface:
    def get_generator_for_block_height(self, height: uint32) -> SerializedProgram:
        # Requested block must be a transaction block
        # ignoring hinting error until we handle our interfaces more formally
        return  # type: ignore[return-value]


@dataclass(frozen=True)
class CompressorArg:
    """`CompressorArg` is used as input to the Block Compressor"""

    block_height: uint32
    generator: SerializedProgram = field(repr=False)
    start: int
    end: int


@streamable
@dataclass(frozen=True)
class BlockGenerator(Streamable):
    program: SerializedProgram
    generator_refs: List[SerializedProgram]

    # the heights are only used when creating new blocks, never when validating
    block_height_list: List[uint32]
