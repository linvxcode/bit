  const Auth = Buffer.from(
    "7e42b10fe55a460da853ff0bc0e0c809" + ":" + "0f9daa8f3c284d6abf2bf9f3eda15deb"
  ).toString("base64");
  
  // The chain ID of the supported network
  const chainId = 1;

  export const getData = async () => {
    try {
      const res = await fetch(
        `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
        {
          headers: {
            Authorization: `Basic ${Auth}`,
          },
        }
      );
  
      const data = await res.json();
      return data as GasFeesApiResponse;
    } catch (error) {
      console.log("Server responded with:", error);
    }
    
  };