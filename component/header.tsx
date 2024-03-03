import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import { useState } from 'react';
import { ThemeSwitcher } from "./mode-changer";
import { ThemeProvider } from "./theme-provider";

import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";

const Newnavi = () => {

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-300/50 backdrop-blur-sm dark:bg-neutral-700/50 dark:backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
        <div className="justify-between pl-0 ml-6 mr-4 md:flex md:px-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block md:mr-96 md:mt-2">
              {/* LOGO */}
              <div className="flex flex-row">
              <img src="https://thehub-io.imgix.net/files/s3/20191209185422-85cbfb3cb0932fd46b116f84b2d8977d.png?fit=crop&w=300&h=300&auto=format&q=60" alt="logo" className="w-25 h-12 ml-10"></img>
              <h2 className="text-2xl text-cyan-600 font-bold ml-5 mt-1">Secure SupplyHub</h2>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img src="/images/close.png" width={30} height={30} alt="logo" />
                  ) : (
                    <img
                      src="/images/hamburger.jpg"
                      width={30}
                      height={30}
                      alt="logo"
                      className=""
                    />
                  )}
                </button>
              </div>
              
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-end mt-16 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-24 items-center justify-center md:flex ">
                <li className="pb-3 text-xl font-bold text-gray-700 dark:text-gray-50 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#" onClick={() => setNavbar(!navbar)}>
                  <DropdownMenu>
                    <DropdownMenuTrigger>Products</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>All sevices</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><a href="#createshipment">Create Shipment</a></DropdownMenuItem>
                        <DropdownMenuItem><a href="#startshipment">Start Shipment</a></DropdownMenuItem>
                        <DropdownMenuItem><a href="#completeshipment">Complete Shipment</a></DropdownMenuItem>
                        <DropdownMenuItem><a href="#getshipment">Get Shipment</a></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </a>
                </li>
                <li className="pb-3 text-xl font-bold text-gray-700 dark:text-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#use" onClick={() => setNavbar(!navbar)}>
                    Solutions
                  </a>
                </li>
                <li className="pb-3 text-xl font-bold text-gray-700 dark:text-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#aboutus" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </a>
                </li>
                <li className="pb-3 text-xl font-bold text-gray-700 dark:text-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#footer" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </a>
                </li>
                <li>
                  <div className="flex flex-row md:flex md:mt-0 mt-5 justify-center">
                    <div className="mr-5">
                      <ConnectWallet 
                        btnTitle="Login"
                        className="hover:font-bold text-fuchsia-700 hover:bg-purple-700 p-1 rounded-full"
                        welcomeScreen=
                        {{
                          title: "SecureSupply Hub",
                          subtitle: "Simplified and Secured Supply Chain Systems based on Blockchain",
                          img: 
                          {
                            src: "https://cdn.dribbble.com/users/2421551/screenshots/6221780/iota_supplychains_v12.gif",
                            width: 300,
                            height: 200,
                          },
                        }}
                      />  
                    </div>
                    <div>
                      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <ThemeSwitcher />
                      </ThemeProvider> 
                    </div>
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Newnavi;