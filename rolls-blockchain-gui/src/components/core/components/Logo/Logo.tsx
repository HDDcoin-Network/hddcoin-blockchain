import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Rolls } from '@rolls/icons';

const StyledPecanRolls styled(RoPecanRolls
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledPecanRolls>
    </Box>
  );
}
