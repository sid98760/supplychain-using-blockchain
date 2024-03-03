import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import ShipmentData from "./newshipment";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';
import React from 'react'
import { Skeleton } from "../@/components/ui/skeleton";


const ComponentB = () => {
    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: shipments,
        isLoading: islodingshipments
    } = useContractRead(
        contract,
        "getallShipments"
    );
  
    return (
        <div className="mt-24 mb-10 ml-10 mr-10 pt-5 pb-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl" id="shiplist">
            <p className="text-2xl text-center p-5">All shipment Details</p>
            <div>
            <ScrollArea className="h-dvh">
            {!islodingshipments ? (
                shipments?.length > 0 ? (
                    shipments.slice().reverse().map((shipment: any, index: number) => (
                        <ShipmentData
                            key={index}
                            indexx={shipment.index}
                            sendername={shipment.sender_name}
                            receivername={shipment.receiver_name}
                            sender={shipment.sender}
                            receiver={shipment.receiver}
                            productname={shipment.product_name}
                            quantity={shipment.quantity}
                            status={shipment.status}
                            role={shipment.role}
                            payment={shipment.pay}
                            pickup={shipment.pickuptime}
                            delivery={shipment.deliverytime}
                        />
                    ))
                ) : (
                    <p>No Shipments found.</p>
                )
            ) : (
                <div className="flex items-center space-x-4 ml-16 mt-10">
                    <Skeleton className="h-24 w-24 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-6 w-[300px]" />
                            <Skeleton className="h-6 w-[250px]" />
                        </div>
                </div>
                
            )}

            <ScrollBar orientation="horizontal" />
            </ScrollArea>
            </div>
        </div>
  )
}

export default ComponentB;


