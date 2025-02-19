import { useRefreshPlotsMutation } from '@hddcoin-network/api-react';
import { Button, CardHero, Flex, Link, useOpenDialog } from '@hddcoin-network/core';
import { Plots } from '@hddcoin-network/icons';
import { Trans } from '@lingui/macro';
import { Grid, Typography, Divider } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import PlotAddDirectoryDialog from '../PlotAddDirectoryDialog';

export default function PlotOverviewHero() {
  const navigate = useNavigate();
  const openDialog = useOpenDialog();
  const [refreshPlots] = useRefreshPlotsMutation();

  function handleAddPlot() {
    navigate('/dashboard/plot/add');
  }

  function handleAddPlotDirectory() {
    openDialog(<PlotAddDirectoryDialog />);
  }

  async function handleRefreshPlots() {
    await refreshPlots().unwrap();
  }

  return (
    <Grid container>
      <Grid xs={12} md={6} lg={5} item>
        <CardHero>
          <Plots color="primary" fontSize="extraLarge" />
          <Typography variant="body1">
            <Trans>
              Plots are allocated space on your hard drive used to farm and earn HDDcoin. &nbsp;
              <Link target="_blank" href="https://github.com/HDDcoin-Network/hddcoin-blockchain/wiki/Network-Architecture">
                Learn more
              </Link>
            </Trans>
          </Typography>
          <Flex gap={1}>
            <Button onClick={handleAddPlot} variant="contained" color="primary" fullWidth>
              <Trans>Add a Plot</Trans>
            </Button>
            <Button onClick={handleRefreshPlots} variant="outlined" color="secondary" fullWidth>
              <Trans>Refresh Plots</Trans>
            </Button>
          </Flex>

          <Divider />

          <Typography variant="body1">
            <Trans>
              {'Do you have existing plots on this machine? '}
              <Link onClick={handleAddPlotDirectory} variant="body1">
                Add Plot Directory
              </Link>
            </Trans>
          </Typography>
        </CardHero>
      </Grid>
    </Grid>
  );
}
