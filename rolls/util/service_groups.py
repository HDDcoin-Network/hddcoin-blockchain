from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "rolls_harvester rolls_timelord_launcher rolls_timelord rolls_farmer rolls_full_node rolls_wallet".split(),
    "node": "rolls_full_node".split(),
    "harvester": "rolls_harvester".split(),
    "farmer": "rolls_harvester rolls_farmer rolls_full_node rolls_wallet".split(),
    "farmer-no-wallet": "rolls_harvester rolls_farmer rolls_full_node".split(),
    "farmer-only": "rolls_farmer".split(),
    "timelord": "rolls_timelord_launcher rolls_timelord rolls_full_node".split(),
    "timelord-only": "rolls_timelord".split(),
    "timelord-launcher-only": "rolls_timelord_launcher".split(),
    "wallet": "rolls_wallet rolls_full_node".split(),
    "wallet-only": "rolls_wallet".split(),
    "introducer": "rolls_introducer".split(),
    "simulator": "rolls_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
