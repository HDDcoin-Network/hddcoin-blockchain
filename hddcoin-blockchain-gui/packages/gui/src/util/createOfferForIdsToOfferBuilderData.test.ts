import * as hddcoinCore from '@hddcoin-network/core';
import BigNumber from 'bignumber.js';

import { AssetIdMapEntry } from '../hooks/useAssetIdName';
import createOfferForIdsToOfferBuilderData from './createOfferForIdsToOfferBuilderData';

jest.mock('@hddcoin-network/core', () => ({
  byteToHDDcoin: jest.fn(),
  byteToCAT: jest.fn(),
}));

describe('createOfferForIdsToOfferBuilderData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when offering HDD for CAT', () => {
    it('should return a valid offer builder data object', () => {
      const calledLookupByWalletIdWithIds: string[] = [];
      const assetIdMapEntriesByWalletId: Record<string, AssetIdMapEntry> = {
        1: {
          walletId: 1,
          walletType: 0, // STANDARD_WALLET
          isVerified: true,
          name: 'HDDcoin',
          symbol: 'HDD',
          displayName: 'HDD',
          assetId: 'hdd',
        },
        2: {
          walletId: 2,
          walletType: 6, // CAT
          isVerified: false,
          name: 'Duck Sauce',
          symbol: undefined,
          displayName: 'Duck Sauce',
          assetId: 'f17f88130c63522821f1a75466849354eee69c414c774bd9f3873ab643e9574d',
        },
      };

      const lookupByWalletId = (walletId: string) => {
        calledLookupByWalletIdWithIds.push(walletId);
        return assetIdMapEntriesByWalletId[walletId];
      };

      const walletIdsAndAmounts = {
        1: -111_555_000_000_000,
        2: 600_000,
      };

      jest.mock('@hddcoin-network/core', () => ({
        byteToHDDcoin: jest.fn(),
        byteToCAT: jest.fn(),
      }));

      hddcoinCore.byteToHDDcoin.mockReturnValue(new BigNumber(111.555));
      hddcoinCore.byteToCAT.mockReturnValue(new BigNumber(600));

      const result = createOfferForIdsToOfferBuilderData(walletIdsAndAmounts, lookupByWalletId);

      expect(calledLookupByWalletIdWithIds).toEqual(['1', '2']);

      expect(result).toEqual({
        offered: {
          hdd: [{ amount: '111.555' }],
          tokens: [],
          nfts: [],
          fee: [],
        },
        requested: {
          hdd: [],
          tokens: [{ amount: '600', assetId: 'f17f88130c63522821f1a75466849354eee69c414c774bd9f3873ab643e9574d' }],
          nfts: [],
          fee: [],
        },
      });
    });
  });

  describe('when offering a CAT for HDD', () => {
    it('should return a valid offer builder data object', () => {
      const calledLookupByWalletIdWithIds: string[] = [];
      const assetIdMapEntriesByWalletId: Record<string, AssetIdMapEntry> = {
        1: {
          walletId: 1,
          walletType: 0, // STANDARD_WALLET
          isVerified: true,
          name: 'HDDcoin',
          symbol: 'HDD',
          displayName: 'HDD',
          assetId: 'hdd',
        },
        2: {
          walletId: 2,
          walletType: 6, // CAT
          isVerified: false,
          name: 'Duck Sauce',
          symbol: undefined,
          displayName: 'Duck Sauce',
          assetId: 'f17f88130c63522821f1a75466849354eee69c414c774bd9f3873ab643e9574d',
        },
      };

      const lookupByWalletId = (walletId: string) => {
        calledLookupByWalletIdWithIds.push(walletId);
        return assetIdMapEntriesByWalletId[walletId];
      };

      const walletIdsAndAmounts = {
        1: 2_000_000_000_000,
        2: -1234,
      };

      hddcoinCore.byteToHDDcoin.mockReturnValue(new BigNumber(2));
      hddcoinCore.byteToCAT.mockReturnValue(new BigNumber(1.234));

      const result = createOfferForIdsToOfferBuilderData(walletIdsAndAmounts, lookupByWalletId);

      expect(calledLookupByWalletIdWithIds).toEqual(['1', '2']);

      expect(result).toEqual({
        offered: {
          hdd: [],
          tokens: [
            {
              amount: '1.234',
              assetId: 'f17f88130c63522821f1a75466849354eee69c414c774bd9f3873ab643e9574d',
            },
          ],
          nfts: [],
          fee: [],
        },
        requested: {
          hdd: [
            {
              amount: '2',
            },
          ],
          tokens: [],
          nfts: [],
          fee: [],
        },
      });
    });
  });
  describe('when offering HDD for an NFT', () => {
    it('should return a valid offer builder data object', () => {
      const calledLookupByWalletIdWithIds: string[] = [];
      const assetIdMapEntriesByWalletId: Record<string, AssetIdMapEntry> = {
        1: {
          walletId: 1,
          walletType: 0, // STANDARD_WALLET
          isVerified: true,
          name: 'HDDcoin',
          symbol: 'HDD',
          displayName: 'HDD',
          assetId: 'hdd',
        },
      };

      const lookupByWalletId = (walletId: string) => {
        calledLookupByWalletIdWithIds.push(walletId);
        return assetIdMapEntriesByWalletId[walletId];
      };

      const walletIdsAndAmounts = {
        1: -3_000_000_000_000,
        '8d3ed4c44a1ad053907044f12c8ba0f6a4fdad4eeff585ec76580b50a8de3d2d': 1,
      };

      hddcoinCore.byteToHDDcoin.mockReturnValue(new BigNumber(3));

      const result = createOfferForIdsToOfferBuilderData(walletIdsAndAmounts, lookupByWalletId);

      expect(calledLookupByWalletIdWithIds).toEqual([
        '1',
        '8d3ed4c44a1ad053907044f12c8ba0f6a4fdad4eeff585ec76580b50a8de3d2d',
      ]);

      expect(result).toEqual({
        offered: {
          hdd: [{ amount: '3' }],
          tokens: [],
          nfts: [],
          fee: [],
        },
        requested: {
          hdd: [],
          tokens: [],
          nfts: [
            {
              nftId: 'nft135ldf3z2rtg98yrsgncjezaq76j0mt2wal6ctmrktq94p2x785ksvd057d',
            },
          ],
          fee: [],
        },
      });
    });
  });
  describe('when the amount is NaN', () => {
    it('should throw an error', () => {
      const walletIdsAndAmounts = {
        1: {},
        2: -1234,
      };

      // call to createOfferForIdsToOfferBuilderData should throw an error
      expect(() => createOfferForIdsToOfferBuilderData(walletIdsAndAmounts as any, (() => {}) as any)).toThrow(
        /Invalid value for/
      );
    });
  });
  describe('when the offered asset is for an unknown wallet type', () => {
    it('should ignore the unknown wallet assets', () => {
      const calledLookupByWalletIdWithIds: string[] = [];
      const assetIdMapEntriesByWalletId: Record<string, AssetIdMapEntry> = {
        1: {
          walletId: 1,
          walletType: 0, // STANDARD_WALLET
          isVerified: true,
          name: 'HDDcoin',
          symbol: 'HDD',
          displayName: 'HDD',
          assetId: 'hdd',
        },
        2: {
          walletId: 2,
          walletType: 8, // DID
          isVerified: false,
          name: '',
          symbol: undefined,
          displayName: '',
          assetId: '',
        },
      };

      const lookupByWalletId = (walletId: string) => {
        calledLookupByWalletIdWithIds.push(walletId);
        return assetIdMapEntriesByWalletId[walletId];
      };

      const walletIdsAndAmounts = {
        1: 500_000_000,
        2: -1,
      };

      hddcoinCore.byteToHDDcoin.mockReturnValue(new BigNumber(0.5));

      const result = createOfferForIdsToOfferBuilderData(walletIdsAndAmounts, lookupByWalletId);

      expect(calledLookupByWalletIdWithIds).toEqual(['1', '2']);

      expect(result).toEqual({
        offered: {
          hdd: [],
          tokens: [],
          nfts: [],
          fee: [],
        },
        requested: {
          hdd: [
            {
              amount: '0.5',
            },
          ],
          tokens: [],
          nfts: [],
          fee: [],
        },
      });
    });
  });
  describe('when lookupByWalletId throws', () => {
    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    afterAll(() => {
      (console.error as jest.Mock).mockRestore();
    });
    it('should ignore the asset that caused the error', () => {
      const calledLookupByWalletIdWithIds: string[] = [];

      const lookupByWalletId = (walletId: string) => {
        calledLookupByWalletIdWithIds.push(walletId);
        throw new Error('lookupByWalletId fake error');
      };

      const walletIdsAndAmounts = {
        1: 5_000_000_000_000,
        2: -1_000_000,
      };

      hddcoinCore.byteToHDDcoin.mockReturnValue(new BigNumber(5));
      hddcoinCore.byteToCAT.mockReturnValue(new BigNumber(1000));

      const result = createOfferForIdsToOfferBuilderData(walletIdsAndAmounts, lookupByWalletId);

      expect(calledLookupByWalletIdWithIds).toEqual(['1', '2']);

      expect(result).toEqual({
        offered: {
          hdd: [],
          tokens: [],
          nfts: [],
          fee: [],
        },
        requested: {
          hdd: [],
          tokens: [],
          nfts: [],
          fee: [],
        },
      });
    });
  });
});
