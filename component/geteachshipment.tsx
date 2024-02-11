import React from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../@/components/ui/drawer"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../@/components/ui/alert-dialog"
import { Button } from '../@/components/ui/button'


type Props = {
    index: number;
};

const Geteachshipment = ({ index }: Props) => {


    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: shipment,
        isLoading: islodingshipments
    } = useContractRead(
        contract,
        "getShipment",
        [index]
    );
    console.log("1", shipment);
    console.log(shipment);





    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className=" p-3 bg-orange-600 rounded-xl">Get Shipment</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            The index you have choosen will you the all details regarding
                            shipment. Do you want see the details of choosen index?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className='p-5 border-2 border-slate-800 '>Cancel</AlertDialogCancel>

                        <Drawer>
                            <DrawerTrigger className='p-2 border-2 border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'>Get Details</DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>SHIPMENT DETAILS</DrawerTitle>
                                    <DrawerDescription>Below are the detailed information of the selected shipment.</DrawerDescription>
                                </DrawerHeader>
                                <table>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Item No: {(shipment) ? shipment[4].toNumber() : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Role: {(shipment) ? shipment[9] : <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Sender Name: {(shipment) ? shipment[0] : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Receiver Name: {(shipment) ? shipment[1] : <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Sender Address: {(shipment) ? shipment[2] : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Receiver Address: {(shipment) ? shipment[3] : <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Product Name: {(shipment) ? shipment[5] : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Quantity: {(shipment) ? shipment[6].toNumber() : <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Status: {(shipment) ? shipment[7] : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Payment Status: {(shipment) ? shipment[8] : <p>Loading...</p>}</p></td>
                                    </tr>
                                </table>
                                <DrawerFooter>
                                    <DrawerClose>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>




        </div>
    )
}

export default Geteachshipment;
