import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import { useState } from 'react';
import { ThemeSwitcher } from "./mode-changer";
import { ThemeProvider } from "../pages/theme-provider";
import styles from "../styles/Home.module.css";

const Newnavi = () => {

    const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <header className="bg-gray-300/50 backdrop-blur-sm dark:bg-neutral-700/50 dark:backdrop-blur-sm p-2.5">
        <nav className="flex justify-between items-center w-[99%] mx-auto">
            <div>
                <img src="https://thehub-io.imgix.net/files/s3/20191209185422-85cbfb3cb0932fd46b116f84b2d8977d.png?fit=crop&w=300&h=300&auto=format&q=60" alt="logo" className="w-25 h-12 ml-10"></img>
            </div>
            <div
                className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-md flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-2">
                    <li className="font-bold text-gray-700 dark:text-gray-50">
                        <a className="hover:text-cyan-500 hover:bg-purple-700 p-3 rounded-full hover:text-xl" href="#">Products</a>
                    </li>
                    <li className="font-bold text-gray-700 dark:text-gray-50">
                        <a className="hover:text-cyan-500 hover:bg-purple-700 p-3 rounded-full hover:text-xl" href="#">Solution</a>
                    </li>
                    <li className="font-bold text-gray-700 dark:text-gray-50">
                        <a className="hover:text-cyan-500 hover:bg-purple-700 p-3 rounded-full hover:text-xl" href="#">Resource</a>
                    </li>
                    <li className="font-bold text-gray-700 dark:text-gray-50">
                        <a className="hover:text-cyan-500 hover:bg-purple-700 p-3 rounded-full hover:text-xl" href="#">Developers</a>
                    </li>
                    <li className="font-bold text-gray-700 dark:text-gray-50">
                        <a className="hover:text-cyan-500 hover:bg-purple-700 p-3 rounded-full hover:text-xl" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-start gap-3">
                <ConnectWallet 
             btnTitle="Login"
             className="hover:font-bold text-fuchsia-700 hover:bg-purple-700 p-1 rounded-full"
             welcomeScreen={{
              title: "SecureSupply Hub",
              subtitle: "Simplified and Secured Supply Chain Systems based on Blockchain",
              img: {
                src: "https://cdn.dribbble.com/users/2421551/screenshots/6221780/iota_supplychains_v12.gif",
                width: 300,
                height: 200,
              },
            }}
          />  
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ThemeSwitcher />
            </ThemeProvider> 
            </div>
          </nav>
      </header>
    </div>
  );
}

export default Newnavi;