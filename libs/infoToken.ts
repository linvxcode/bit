interface tokenInfo {
  circulatingSupply: number;
  totalSupply: number;
  mcap: number;
  fdv: number;
  holders: number;
  transactions: number;
}

interface info {
  data: tokenInfo;
}

const addres =
  "0x52cd6956F59fa78054388beF3bca467e241Be8A2";

const options = {
  method: 'GET',
  headers: {
    'X-BLOBR-KEY': 'FGQ1yIDG3ri2IhDuy2vYXXVO4VsU7ExO'
  },
};


export const getInfo = async () => {
  try {
    const res = await fetch(
      `https://open-api.dextools.io/free/v2/token/ether/${addres}/info`, options
    );
    const data = await res.json();
    return data as info;
  } catch (error) {

  }
}