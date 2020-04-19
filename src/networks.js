'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// Updated for Kevacoin.
exports.bitcoin = {
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
exports.regtest = {
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
exports.testnet = {
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
