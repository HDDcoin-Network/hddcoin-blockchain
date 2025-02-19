import type { NFTInfo } from '@hddcoin-network/api';
import { Button, Flex, TooltipIcon } from '@hddcoin-network/core';
import { Trans } from '@lingui/macro';
import { Typography } from '@mui/material';
import React from 'react';

import useViewNFTOnExplorer, { NFTExplorer } from '../../hooks/useViewNFTOnExplorer';

export type OfferBuilderNFTProvenanceProps = {
  nft?: NFTInfo;
};

export default function OfferBuilderNFTProvenance(props: OfferBuilderNFTProvenanceProps) {
  const { nft } = props;
  const viewOnExplorer = useViewNFTOnExplorer();

  return (
    <Flex flexDirection="column" flexGrow={1} gap={2}>
      <Flex flexDirection="row" alignItems="center">
        <Typography variant="h6">Provenance</Typography>
        &nbsp;
        <TooltipIcon>
          <Trans>
            An NFT's provenance is a complete record of its ownership history. It provides a direct lineage that
            connects everyone who has owned the NFT, all the way back to the original artist. This helps to verify that
            the NFT is authentic.
          </Trans>
        </TooltipIcon>
      </Flex>
	 {/*	 
      <Button
        variant="outlined"
        color="primary"
        onClick={() => viewOnExplorer(nft, NFTExplorer.MintGarden)}
        style={{ width: '100%' }}
      >
        <Typography variant="caption" color="secondary">
          <Trans>Check Provenance on MintGarden</Trans>
        </Typography>
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => viewOnExplorer(nft, NFTExplorer.Spacescan)}
        style={{ width: '100%' }}
      >
        <Typography variant="caption" color="secondary">
          <Trans>Check Provenance on Spacescan.io</Trans>
        </Typography>
      </Button>
	 */}	 
    </Flex>
  );
}
