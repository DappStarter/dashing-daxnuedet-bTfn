require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note muscle congress hover private flip skull'; 
let testAccounts = [
"0xdea0410cf36443c00c98559f50e5f1acea6155bcd6e11eb1ec246cc209c5a63c",
"0x04756f2c0e1aa967dc60f6a5f8debcbc89a163a38db18b987df0e17a68dedec6",
"0x18724ee7fd3fc105683075520634031b794dbaa83f6b29d01a501a812949b822",
"0x20bfc64c3b3673cd2a407f179c0a7e04ac822446ddbeac7678e1eb9850ffe17c",
"0xd12398ced219845a789eb59e2c270a56dd5651d691e5dc75e6e4cabf8a50f41e",
"0x409df909f80a53ca06bc7c807934beb7a9f4b97f1aac4eda72ae9925bbe86b12",
"0x4c4d5c779c8ce95388b933e0d191011329e428040186a02cf4a0a792be80183c",
"0x24c735d28dc0800990625419b7f47d02b6e441d51dd1ebd1c8b5a2454729091b",
"0x117f7df9351b238e497c5865fdc1903ad7ed2d67cd35e20fe00f3e2872c097e1",
"0xee0f09b1a19bb595b301902ccabd2431e84f16d806806f1d41bc1d7596d0294d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


