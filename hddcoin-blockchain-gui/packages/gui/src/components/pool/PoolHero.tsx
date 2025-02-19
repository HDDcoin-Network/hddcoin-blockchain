import { Button, CardHero } from '@hddcoin-network/core';
import { Pooling } from '@hddcoin-network/icons';
import { Trans } from '@lingui/macro';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PoolHero() {
  const navigate = useNavigate();

  function handleJoinPool() {
    navigate('/dashboard/pool/add');
  }

  return (
    <Grid container>
      <Grid xs={12} md={6} lg={5} item>
        <CardHero>
          <Pooling color="primary" fontSize="extraLarge" />
          <Typography variant="body1">
            <Trans>Smooth out your HDD farming rewards by joining a pool.</Trans>
          </Typography>
          <Button onClick={handleJoinPool} variant="contained" color="primary">
            <Trans>Join a Pool</Trans>
          </Button>
        </CardHero>
      </Grid>
    </Grid>
  );
}
