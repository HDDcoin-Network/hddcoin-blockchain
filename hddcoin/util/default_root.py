from __future__ import annotations

import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("HDDCOIN_ROOT", "~/.hddcoin/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("HDDCOIN_KEYS_ROOT", "~/.hddcoin_keys"))).resolve()

SIMULATOR_ROOT_PATH = Path(os.path.expanduser(os.getenv("HDDCOIN_SIMULATOR_ROOT", "~/.hddcoin/simulator"))).resolve()
