// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

// Updated for Kevacoin.

export const bitcoin: Network = {
  messagePrefix: '\x18Kevacoin Signed Message:\n',
  bech32: 'kva',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x2d,
  scriptHash: 0x46,
  wif: 0xb1,
};
export const regtest: Network = {
  messagePrefix: '\x18Kevacoin Signed Message:\n',
  bech32: 'rkva',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
export const testnet: Network = {
  messagePrefix: '\x18Kevacoin Signed Message:\n',
  bech32: 'tkva',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x37,
  scriptHash: 0x41,
  wif: 0xef,
};
