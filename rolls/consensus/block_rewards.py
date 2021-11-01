from rolls.util.ints import uint32, uint64

# 1 PecanRolls token = 1,000,000,000,000 = 1 trillion pecans.
_pecans_per_roll = 1000000000000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns 7/8 of the reward in each block. If the farmer
    is solo farming, they act as the pool, and therefore earn the entire block reward.
    These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """

    if height == 0:
        return uint64(int((7 / 8) * 1000000 * _pecans_per_roll))
    else: 
        return uint64(int((7 / 8) * 6 * _pecans_per_roll))


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 1/8 of total block reward

    Returns the coinbase reward at a certain block height. These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """
    if height == 0:
        return uint64(int((7 / 8) * 1000000 * _pecans_per_roll))
    else: 
        return uint64(int((7 / 8) * 6 * _pecans_per_roll))
