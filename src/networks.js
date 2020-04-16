'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// Updated for Kevacoin.
exports.bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x01ada464,
    private: 0x01ad9cff,
  },
  pubKeyHash: 0x2d,
  scriptHash: 0x46,
  wif: 0xb1,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x01ada466,
    private: 0x01ad9cfd,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x01ada467,
    private: 0x01ad9cf0,
  },
  pubKeyHash: 0x37,
  scriptHash: 0x41,
  wif: 0xef,
};
