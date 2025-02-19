import { WalletService } from '@hddcoin-network/api';

import useSubscribeToEvent from './useSubscribeToEvent';

export default function useNFTCoinAdded(callback: (coin: any) => void) {
  return useSubscribeToEvent('onNFTCoinAdded', WalletService, callback);
}
