export const GAS_MODE = {
  EIP1559: 'eip1559',
  LEGACY: 'legacy',
};

export const CHAIN_IDS = {
  POLYGON: 137,
  MUMBAI: 80001,
  ARBITRUM: 42161,
  SEPOLIA: 421614,
  BASE: 8453,
  APECHAIN: 33139,
};

export const COLLATERAL = {
  DAI: 'DAI',
  WETH: 'WETH',
  USDC: 'USDC',
  APE: 'APE',
  GNS: 'GNS',
};

export const COLLATERAL_CONFIG = {
  [COLLATERAL.DAI]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
  [COLLATERAL.WETH]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
  [COLLATERAL.USDC]: {
    decimals: 6,
    precision: 1e6,
    precisionDelta: 1e12,
  },
  [COLLATERAL.APE]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
  [COLLATERAL.GNS]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
};

export const NETWORKS = {
  [CHAIN_IDS.POLYGON]: {
    chainName: 'polygon',
    chainId: CHAIN_IDS.POLYGON,
    gasMode: GAS_MODE.EIP1559,
    gasStationUrl: 'https://gasstation.polygon.technology/v2',
    diamondAddress: '0x209A9A01980377916851af2cA075C2b170452018',
    collaterals: [
      {
        symbol: COLLATERAL.DAI,
        collateralIndex: 1,
      },
      {
        symbol: COLLATERAL.WETH,
        collateralIndex: 2,
      },
      {
        symbol: COLLATERAL.USDC,
        collateralIndex: 3,
      },
    ],
  },
  [CHAIN_IDS.ARBITRUM]: {
    chainName: 'arbitrum',
    chainId: CHAIN_IDS.ARBITRUM,
    gasMode: GAS_MODE.LEGACY,
    gasStationUrl: undefined,
    diamondAddress: '0xFF162c694eAA571f685030649814282eA457f169',
    collaterals: [
      {
        symbol: COLLATERAL.DAI,
        collateralIndex: 1,
      },
      {
        symbol: COLLATERAL.WETH,
        collateralIndex: 2,
      },
      {
        symbol: COLLATERAL.USDC,
        collateralIndex: 3,
      },
      {
        symbol: COLLATERAL.GNS,
        collateralIndex: 4,
      },
    ],
  },
  [CHAIN_IDS.SEPOLIA]: {
    chainName: 'sepolia',
    chainId: CHAIN_IDS.SEPOLIA,
    gasMode: GAS_MODE.LEGACY,
    gasStationUrl: undefined,
    diamondAddress: '0xd659a15812064C79E189fd950A189b15c75d3186',
    collaterals: [
      {
        symbol: COLLATERAL.DAI,
        collateralIndex: 1,
      },
      {
        symbol: COLLATERAL.WETH,
        collateralIndex: 2,
      },
      {
        symbol: COLLATERAL.USDC,
        collateralIndex: 3,
      },
      {
        symbol: COLLATERAL.GNS,
        collateralIndex: 4,
      },
    ],
  },
  [CHAIN_IDS.BASE]: {
    chainName: 'base',
    chainId: CHAIN_IDS.BASE,
    gasMode: GAS_MODE.EIP1559,
    gasStationUrl: undefined,
    diamondAddress: '0x6cD5aC19a07518A8092eEFfDA4f1174C72704eeb',
    collaterals: [
      {
        symbol: COLLATERAL.USDC,
        collateralIndex: 1,
      },
    ],
  },
  [CHAIN_IDS.APECHAIN]: {
    chainName: 'apechain',
    chainId: CHAIN_IDS.APECHAIN,
    gasMode: GAS_MODE.EIP1559,
    gasStationUrl: undefined,
    diamondAddress: '0x2BE5D7058AdBa14Bc38E4A83E94A81f7491b0163',
    apeDelegate: '0x9998357A0733814cC3D918e907Afa14B6D47648B',
    collaterals: [
      {
        symbol: COLLATERAL.APE,
        collateralIndex: 1,
      },
    ],
  },
};
