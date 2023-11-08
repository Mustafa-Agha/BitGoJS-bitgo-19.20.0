export const txForExplainTransfer =
  '0x80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b40000ab3fcf8d6d697d01c3da3a20b06cd8b36f016755cb7637c3eb6b228980d8857c7826a8ea498e52fd73ecd8e3869881c9aba49ae598dfbf1d5af69b1c02b4f2bd03020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e85468697320697320616e206578616d706c6500000000000000000000000000000000';

export const txExplainedTransfer = {
  id: '0ebb7aa84ec8023202517671d5781fa108405abcb73e76857520a8f163d4aae4',
  fee: '180',
  outputAmount: '1000',
  memo: 'This is an example',
  recipient: 'STDE7Y8HV3RX8VBM2TZVWJTS7ZA1XB0SSC3NEVH0',
};

export const txForExplainContract =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b4000037980c4fe5607724d9d6cbd320d38cea5931cc940ac23b6e36316cf5f077a0ec260e7c5d3916d0e375d4c68e94e4779ad8b7226c34c71fd453b818066a5a30ac030200000000021a000000000000000000000000000000000000000005706f782d3309737461636b2d737478000000040100000000000000000000000017d7840005163248e7aa6879968d241f3e5152d9f2796994d96c090a0c00000002096861736862797465730200000009736f6d652d686173680776657273696f6e020000000101';

export const txExplainedContract = {
  id: '686864ede927cc05a16a842951d96e6e4a201432f33ab01d58e952ef0e958832',
  fee: '180',
  contractAddress: 'ST000000000000000000002AMW42H',
  contractName: 'pox-3',
  functionName: 'stack-stx',
  functionArgs: [{ type: 1, value: '400000000' }],
};

export const unsignedTxForExplainTransfer =
  '0x80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e800000000000000000000000000000000000000000000000000000000000000000000';
export const unsignedTxExplainedTransfer = {
  fee: '180',
  outputAmount: '1000',
  memo: '',
  recipient: 'STDE7Y8HV3RX8VBM2TZVWJTS7ZA1XB0SSC3NEVH0',
  sender: 'STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6',
};