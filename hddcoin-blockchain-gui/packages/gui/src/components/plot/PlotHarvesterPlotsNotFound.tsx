import { type Plot } from '@hddcoin-network/api';
import { useGetHarvesterPlotsKeysMissingQuery, useGetHarvesterQuery } from '@hddcoin-network/api-react';
import { TableControlled } from '@hddcoin-network/core';
import { Trans } from '@lingui/macro';
import { Typography } from '@mui/material';
import React, { useState, useMemo } from 'react';

import PlotAction from './PlotAction';

const cols = [
  {
    field: 'filename',
    tooltip: 'filename',
    title: <Trans>Filename</Trans>,
  },
  {
    width: '150px',
    field: (plot: Plot) => <PlotAction plot={plot} />,
    title: <Trans>Action</Trans>,
  },
];

export type PlotHarvesterPlotsNotFoundProps = {
  nodeId: string;
};

export default function PlotHarvesterPlotsNotFound(props: PlotHarvesterPlotsNotFoundProps) {
  const { nodeId } = props;
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const {
    noKeyFilenames,
    initialized,
    isLoading: isLoadingHarvester,
  } = useGetHarvesterQuery({
    nodeId,
  });
  const { isLoading: isLoadingHarvesterPlots, data = [] } = useGetHarvesterPlotsKeysMissingQuery({
    nodeId,
    page,
    pageSize,
  });

  const isLoading = isLoadingHarvester || isLoadingHarvesterPlots;
  const count = noKeyFilenames ?? 0;

  function handlePageChange(rowsPerPage: number, pageLocal: number) {
    setPageSize(rowsPerPage);
    setPage(pageLocal);
  }

  const rows = useMemo(() => data?.map((filename) => ({ filename })), [data]);

  return (
    <TableControlled
      cols={cols}
      rows={rows}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      page={page}
      rowsPerPage={pageSize}
      count={count}
      onPageChange={handlePageChange}
      isLoading={isLoading || !initialized}
      expandedCellShift={1}
      uniqueField="filename"
      caption={
        !noKeyFilenames && (
          <Typography variant="body2" align="center">
            <Trans>Hooray, no files here!</Trans>
          </Typography>
        )
      }
      pages={!!noKeyFilenames}
    />
  );
}
