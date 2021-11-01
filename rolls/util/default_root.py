import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("ROLLS_ROOT", "~/.rolls/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("ROLLS_KEYS_ROOT", "~/.rolls_keys"))).resolve()
