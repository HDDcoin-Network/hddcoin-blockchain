import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("HDDCOIN_ROOT", "~/.rolls/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("HDDCOIN_KEYS_ROOT", "~/.rolls_keys"))).resolve()
