import { Button, CardHero, Link, useOpenDialog } from '@hddcoin-network/core';
import { Farming } from '@hddcoin-network/icons';
import { Trans } from '@lingui/macro';
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import PlotAddDirectoryDialog from '../plot/PlotAddDirectoryDialog';

export default function FarmHero() {
  const navigate = useNavigate();
  const openDialog = useOpenDialog();

  function handleAddPlot() {
    navigate('/dashboard/plot/add');
  }

  function handleAddPlotDirectory() {
    openDialog(<PlotAddDirectoryDialog />);
  }

  return (
    <Grid container>
      <Grid xs={12} md={6} lg={5} item>
        <CardHero>
          <Farming color="primary" fontSize="extraLarge" />
          <Typography variant="body1">
            <Trans>
              Farmers earn block rewards and transaction fees by committing spare space to the network to help secure
              transactions. This is where your farm will be once you add a plot.{' '}
              <Link target="_blank" href="https://github.com/HDDcoin-Network/hddcoin-blockchain/wiki/Network-Architecture">
                Learn more
              </Link>
            </Trans>
          </Typography>
          <Button onClick={handleAddPlot} variant="contained" color="primary">
            <Trans>Add a Plot</Trans>
          </Button>

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
