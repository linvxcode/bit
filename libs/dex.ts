interface daa {
    data: dats
}
interface dats {
    schemaVersion: string;
    pair: pairing
}

interface pairing {
        chainId: string;
        dexId: string;
        url: string;
        pairAddress: string;
        baseToken: {
            address: string;
            name: string;
            symbol: string;
        };
        quoteToken: {
            symbol: string;
        };
        priceNative: string;
        priceUsd?: string;
        txns: {
            m5: {
                buys: number;
                sells: number;
            };
            h1: {
                buys: number;
                sells: number;
            };
            h6: {
                buys: number;
                sells: number;
            };
            h24: {
                buys: number;
                sells: number;
            };
        };
        volume: {
            m5: number;
            h1: number;
            h6: number;
            h24: number;
        };
        priceChange: {
            m5: number;
            h1: number;
            h6: number;
            h24: number;
        };
        liquidity?: {
            usd?: number;
            base: number;
            quote: number;
        };
        fdv?: number;
        pairCreatedAt?: number;
    
}


export const dex = async () => {
    try {

        const resPrice = await fetch(
            `https://api.dexscreener.com/latest/dex/tokens/0x52cd6956F59fa78054388beF3bca467e241Be8A2`
        );

        const price = await resPrice.json();

        return price as daa;
    } catch (error) {

    }
}