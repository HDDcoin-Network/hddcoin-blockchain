import { HDDcoin } from '@hddcoin-network/icons';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledHDDcoin = styled(HDDcoin)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledHDDcoin />
    </Box>
  );
}
