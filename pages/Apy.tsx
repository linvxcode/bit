//apy button
import React from 'react';

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-1/4 text-center mx-1 py-2 rounded-md hover:transition duration-[0.8s] hover:duration-[0.3s]
    ${isActive ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 ' : 'ring-1 ring-blue-300'}`}
  >
    {label}
  </button>
);
 //const selection = formatEther((airdrop[0].result as bigint[])[0] as bigint).toString();        
    //    airDrop(air[i].address,formatEther((airdrop[0].result as bigint[])[0] as bigint).toString(), `${selection}` > "0"?'TRUE':'FALSE');

export default Button;