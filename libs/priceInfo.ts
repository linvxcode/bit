

interface pricing {
    price: 0;
    priceChain: 0;
    price5m: 0;
    priceChain5m: 0;
    variation5m: 0;
    price1h: 0;
    priceChain1h: 0;
    variation1h: 0;
    price6h: 0;
    priceChain6h: 0;
    variation6h: 0;
    price24h: 0;
    priceChain24h: 0;
    variation24h: 0;
  }

  interface inn {
    data: pricing
  }
const addres = 
    "0x52cd6956F59fa78054388beF3bca467e241Be8A2";

const options = {
    method: 'GET',
    headers: {
        'X-BLOBR-KEY': 'FGQ1yIDG3ri2IhDuy2vYXXVO4VsU7ExO'
    },
};


export const getPrice =async () => {
        try {
    
          const resPrice = await fetch(
            `https://open-api.dextools.io/free/v2/token/ether/${addres}/price`, options
          );
          
          const price = await resPrice.json();
       
          return price as inn;
        } catch (error) {
            
        }
    }