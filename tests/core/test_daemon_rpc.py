from __future__ import annotations

import pytest

from hddcoin import __version__
from hddcoin.daemon.client import connect_to_daemon


class TestDaemonRpc:
    @pytest.mark.asyncio
    async def test_get_version_rpc(self, get_daemon, bt):
        ws_server = get_daemon
        config = bt.config
        client = await connect_to_daemon(
            config["self_hostname"],
            config["daemon_port"],
            50 * 1000 * 1000,
            bt.get_daemon_ssl_context(),
            heartbeat=config["daemon_heartbeat"],
        )
        response = await client.get_version()

        assert response["data"]["success"]
        assert response["data"]["version"] == __version__
        ws_server.stop()
