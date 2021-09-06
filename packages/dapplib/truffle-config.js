require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember modify grid enrich swift veteran'; 
let testAccounts = [
"0x8c519bdec763f6c98bd2284a99366373f1d1a162c15462ff88885f12a1e0b150",
"0x363b9798023c3f915809607bfe6f604d9479149934cc0957b42093e6ffc1814a",
"0x8d7800bd9ec98052d492afd3bacfcc912bd3e4312e1dd6c97adb0cb5dda2ca2e",
"0xaf7475f485873473253fdf9b81b6febcb57f3f3d7b8fb9edfdbf5cbd03785240",
"0x06def5c4c9486011e33c4c459207678186005f8df29089ece8f423d323879ab3",
"0x19fffedc4e7cc03ad949b7be595918ed37e6daecb4461916961e45882101f098",
"0xe50c8b180b1fb392649fb5b781e11c0759af8fcde8698ff1ce1b45629fe4de70",
"0x3218ecd668c07348b4f5f041313232b8ffddc82179c530acca7736608ea23066",
"0x7d2f666937af1dd13aa87e9f6a8418df18487c0a89498bef46ea448f5c61d02d",
"0x514900b876973eecd6315bb0454e9852abb93630e9e17840f5cf2df68b8e1445"
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


