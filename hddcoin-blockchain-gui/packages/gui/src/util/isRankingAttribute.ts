import type { NFTAttribute } from '@hddcoin-network/api';

export default function isRankingAttribute(attribute: NFTAttribute) {
  if ('max_value' in attribute && typeof attribute.max_value === 'number') {
    return true;
  }

  return false;
}
