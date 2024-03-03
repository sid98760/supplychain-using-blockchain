import * as React from "react"
import FormA from "./FormA"
import FormB from "./FormB"
import FormC from "./FormC"
import FormD from "./FormD"
import styles from "../styles/Home.module.css"
import { Avatar,AvatarFallback, AvatarImage  } from "../@/components/ui/avatar" 
import { useBalanceForAddress } from "@thirdweb-dev/react"
import { Card,CardContent } from "../@/components/ui/card"
import { useAddress,useDisconnect } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { useContract,useContractRead } from "@thirdweb-dev/react"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, } from "../@/components/ui/carousel"

const ComponentA = () => {

  const disconnect = useDisconnect();

  const {
    contract
  } = useContract(CONTRACT_ADDRESS);

  const
  {
      data: shipments,
      isLoading: islodingshipments
  } = useContractRead
  (
      contract,
      "getShipmentCount"
  );

  const addr = useAddress();
  var add = String(addr);
  const { data, isLoading } = useBalanceForAddress(add);

  return (
    <Carousel className="mt-20">
      <CarouselContent>
          <CarouselItem className="md:basis-1 lg:basis-1/2" id="createshipment">
            <div className="pl-10 pr-10">
              <Card>
                <CardContent className="items-center rounded-xl h-96 w-full">
                  <div className="p-2 h-80 w-full flex flex-col justify-center items-center">
                  <div className={styles.textanimation}>
                  
                    <p className="font-black mb-5 mt-5 text-center text-4xl align-middle">Create Your Shipment Here</p>
                    </div>
                    <div className={styles.formbutton} >
                      <FormA/>
                    </div>
                    {/* <p className="font-bold p-4 mb-5 text-center">This segment has designed to capture all the essential information required to process and deliver your swiftly and securely. After filling out all necessary fields, please review your information carefully and then submit form. If you have any questions or need assistance while filling out the form, please contact our support team.</p> */}
                  
                  
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2" id="startshipment">
          <div className="pl-10 pr-10">
            <Card>
                <CardContent className="flex items-center flex flex-col rounded-xl h-96 w-full">
                  <div className="p-2 h-80 w-full flex flex-col justify-center items-center">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center text-4xl align-middle">Start Your Shipment Here</p>
                    <div className={styles.formbutton} >
                      <FormB/>
                    </div>
                    {/* <p className="font-bold p-4 mb-5 text-center">This segment is designed to capture all the Shipment information which will eventually be stored in an Blockchain. After filling out all the necessary fields, please review your information carefully and then submit the form. Please make sure you fill in all the information correctly so that your shipment will be started.</p> */}
                  </div>
                  
                  </div>
                 
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2" id="completeshipment">
          <div className="pl-10 pr-10">
            <Card>
              <CardContent className="flex items-center flex flex-col rounded-xl h-96 w-full">
                <div className="p-2 h-80 w-full flex flex-col justify-center items-center">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center text-4xl align-middle">Complete Your Shipment Here</p>
                    <div className={styles.formbutton} >
                      <FormC/>
                    </div>
                    {/* <p className="font-bold p-4 mb-5 text-center">This segment is designed to complete your shipments which is already stored and started in Blockchain. After filling out all of the necessary fields, please review your information carefully and then submit the form. This will complete your shipment from one Stakeholder to another and Shipment will be ready for start again.</p> */}
                  </div>
                  
                </div>
                  
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2" id="getshipment">
          <div className="pl-10 pr-10">
            <Card>
                <CardContent className="flex items-center  flex flex-col rounded-xl h-96 w-full">
                  <div className="p-2 h-80 w-full flex flex-col justify-center items-center">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center text-4xl align-middle">Get your Shipment Here</p>
                    <div className={styles.formbutton} >
                      <FormD />
                    </div>
                    {/* <p className="font-bold p-4 mb-5 text-center">This Section can be used to get all the details related to your shipment which is stored in Blockchain. After filling out all the necessary fields, please review your information carefully and then submit the form. Along with all the details we can track the real-time status and payment status of the shipment with the help of Blockchain technology.</p> */}
                  </div>
                 
                  </div>
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
          <div className="p1-10 pr-10">
            <Card>
                <CardContent className="flex items-center justify-center h-96 w-full ">
                  <div className="p-2 h-80 w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                      <p className="font-black text-4xl mb-8">User Profile</p>
                      <div className="flex flex-col items-center">
                        <Avatar className="mb-1 w-16 h-16">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-bold text-xl mb-3">Welcome Trader!</p>
                      </div>
                      <div className="mt-3">
                        <p className="break-all mb2 font-medium">User Address: {addr}</p>
                        <p className="break-all mb2 font-medium">Total Balance: {data?.displayValue} {data?.name}</p>
                        <p className="break-all mb6 font-medium">Total Transactions on Ledger: {Number(shipments)}</p>
                      </div>
                      <div>
                        <button onClick={disconnect} className="mt-5 p-3 bg-[#e6852b] text-black text-base rounded-xl">Disconnect Wallet</button>
                      </div>
                    </div>
                  </div>                 
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default ComponentA;
