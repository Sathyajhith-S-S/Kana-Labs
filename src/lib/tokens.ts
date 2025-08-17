import aptosLogo from '@/assets/apt.png';
import usdcLogo from '@/assets/usdc.png';
import arbLogo from '@/assets/arb.png';
import avaxLogo from '@/assets/avax.png';
import bnbLogo from '@/assets/bnb.png';
import ethLogo from '@/assets/eth.png';
import solLogo from '@/assets/sol.png';
import suiLogo from '@/assets/sui.png';
import xrpLogo from '@/assets/xrp.png';
import btcLogo from '@/assets/BTC.png'
// import usdtLogo from '@/assets/usdt.png';
import zkSyncLogo from '@/assets/zk.png';

export interface Token {
    symbol: string;
    name: string;
    logo: string;
}

export const APTOS: Token = { symbol: 'APT', name: 'Aptos', logo: aptosLogo };
export const USDC: Token = { symbol: 'USDC', name: 'USD Coin', logo: usdcLogo };
export const ARB: Token = { symbol: 'ARB', name: 'Arbitrum', logo: arbLogo };
export const AVAX: Token = { symbol: 'AVAX', name: 'Avalanche', logo: avaxLogo };
export const BNB: Token = { symbol: 'BNB', name: 'Binance Coin', logo: bnbLogo };
export const ETH: Token = { symbol: 'ETH', name: 'Ethereum', logo: ethLogo };
export const SOL: Token = { symbol: 'SOL', name: 'Solana', logo: solLogo };
export const SUI: Token = { symbol: 'SUI', name: 'Sui', logo: suiLogo };
export const XRP: Token = { symbol: 'XRP', name: 'Ripple', logo: xrpLogo };
export const BTC: Token = { symbol: 'BTC', name: 'Bitcoin', logo: btcLogo };
// export const USDT: Token = { symbol: 'USDT', name: 'Tether', logo: usdtLogo };
export const ZKSYNC: Token = { symbol: 'ZKSYNC', name: 'zkSync', logo: zkSyncLogo };

export const TOKENS: Token[] = [APTOS, ARB, AVAX, BNB, ETH, SOL, SUI, XRP, ZKSYNC];