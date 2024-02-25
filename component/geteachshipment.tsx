import React from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import BigNumber from "bignumber.js";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';

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

    
    function convertpickup(picktime: BigNumber){
        var s = new Date(Number(picktime)*1000).toLocaleDateString();
        var ss = new Date(Number(picktime)*1000).toLocaleTimeString();
        return s+" "+ss;
    }

    function convertdelivery(deltime: BigNumber){
        var s = new Date(deltime.toNumber()).toLocaleDateString();
        var ss = new Date(deltime.toNumber()).toLocaleTimeString();
        return s+" "+ss;
    }

    function caltime(deltime2:BigNumber){
        var currentDate = new Date();
        var timestamp = currentDate.getTime();
        var delivery = deltime2.toNumber();
        var diff = delivery - timestamp;
        if(diff>0){
            var secondsRemaining = diff / 1000;
            var minutesRemaining = secondsRemaining / 60;
            var hoursRemaining = minutesRemaining / 60;

            var total_diff = Math.floor(hoursRemaining)+" hours and "+Math.abs(Math.floor(minutesRemaining)-Math.floor(hoursRemaining)*60)+" minutes";
            return total_diff;
        }
        else if(diff<0){
            var new_diff = timestamp-delivery;

            var secondsRemaining2 = new_diff / 1000;
            var minutesRemaining2 = secondsRemaining2 / 60;
            var hoursRemaining2 = minutesRemaining2 / 60;

            var total_diff2 = "Late by "+Math.floor(hoursRemaining2)+" hours and "+(Math.floor(minutesRemaining2)-Math.floor(hoursRemaining2)*60)+" minutes";
            return total_diff2;
        }
    }

    var rolee = "";
    var stat = "";
    var payy= "";

    function printrole(role: Number){
        if(role==0){
            rolee = "Manufacturer";
            return rolee;
        }
        else if(role==1){
            rolee = "Wholesaler";
            return rolee;
        }
        else if(role==2){
            rolee = "Retailer";
            return rolee;
        }
    }

    function printstatus(status:Number){
        if(status==0){
            stat = "PENDING";
            return stat;
        }
        else if(status==1){
            stat = "IN TRANSIT";
            return stat;
        }
        else if(status==2){
            stat = "DELIVERED";
            return stat;
        }
    }

    function printpayment(payment:Number){
        if(payment==0){
            payy = "PAID";
            return payy;
        }
        else if(payment==1){
            payy = "UNPAID";
            return payy;
        }
        else if(payment==2){
            payy = "TOKEN RECEIVED";
            return payy;
        }
    }

    function printest(deltime3:BigNumber){
        if(stat == "DELIVERED"){
            return "Shipment Delivered";
        }
        else if(stat == "PENDING"){
            return "Shipment not Started";
        }
        else{
            caltime(deltime3);
        }
    }
    

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
                                <ScrollArea>
                                <table>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Item No: {(shipment) ? shipment[4].toNumber() : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Role: {(shipment) ? printrole(shipment[9]) : <p>Loading...</p>}</p></td>
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
                                        <td><p className="p-5 mr-2 text-xl">Status: {(shipment) ? printstatus(shipment[7]) : <p>Loading...</p>}</p></td>
                                        <td><p className="p-5 mr-2 text-xl">Payment Status: {(shipment) ? printpayment(shipment[8]) : <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Pickup Time: {(shipment) ? convertpickup(shipment[10]): <p>Loading...</p>} </p></td>
                                        <td><p className="p-5 mr-2 text-xl">Delivery Time: {(shipment) ? convertdelivery(shipment[11]): <p>Loading...</p>}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="p-5 mr-2 text-xl">Time Estimated to complete shipment: {(shipment) ? printest(shipment[11]): <p>Loading...</p>}</p></td>
                                    </tr>
                                </table>
                                <ScrollBar orientation="horizontal" />
                                </ScrollArea>
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
