var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a1a0a2a3'),
  addressVersion: 0x57,
  privKeyVersion: 215,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e79e542410a078c0e67598b954843567583a96afedb92d3f6ec7efd7a30b0000'),
    merkle_root: hex('88ebedfcc241e892c607b4e3d262176060697f69556a6cd8cfd0c46eac7fc6b1'),
    height: 0,
    nonce: 1531910,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1439734139,
    bits: 504365055,
  },
  dnsSeeds: [
    'node1.clickcoin.click',
    'node2.clickcoin.click',
    'node3.clickcoin.click',
    'node4.clickcoin.click'
  ],
  defaultClientPort: 36353
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
