import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    return (
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-opacity-50 backdrop-filter backdrop-blur lg:px-12 lg:py-4">
        <div></div>
        <div className="flex">
          <ConnectButton />
        </div>
      </header>
    );
};

export default Navbar;
