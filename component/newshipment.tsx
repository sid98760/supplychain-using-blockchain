import React, { useState } from "react";
import styles from '../styles/Home.module.css';
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

import { Button } from "../@/components/ui/button";


type Props = {
    indexx: BigNumber;
    sendername: string;
    receivername: string;
    sender:string;
    receiver:string;
    productname:string;
    quantity:BigNumber;
    role: number;
    status:number;
    payment:number;
    pickup:BigNumber;
    delivery:BigNumber;
};

const ShipmentData = ({ indexx, sendername, receivername,role,sender,receiver,productname,quantity,status,payment,pickup,delivery }: Props) => {

    
    
    var rolee = "";
    var stat = "";
    var payy= "";

    if(role==0){
        rolee = "Manufacturer";
    }
    else if(role==1){
        rolee = "Wholesaler";
    }
    else if(role==2){
        rolee = "Retailer";
    }

    if(status==0){
        stat = "PENDING";
    }
    else if(status==1){
        stat = "IN TRANSIT";
    }
    else if(status==2){
        stat = "DELIVERED";
    }

    if(payment==0){
        payy = "PAID";
    }
    else if(payment==1){
        payy = "UNPAID";
    }
    else if(payment==2){
        payy = "TOKEN RECEIVED";
    }

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
        if(stat == "IN TRANSIT"){

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
        else if(stat == "PENDING"){
            return "Shipment not Started";
        }
        else if(stat == "DELIVERED"){
            return "Shipment Delivered";
        }
        
    }
    

    return(
        <div className="rounded-xl border-0 hover:border-2 border-orange-500 bg-slate-300 text-stone-700 shadow-sm dark:border-orange-500 hover:dark:border-2 border-orange-500 dark:bg-slate-900 dark:text-slate-300 m-10">
            <div className="p-5 flex flex-row w-full">
                <h1 className="p-5">Index: {indexx.toString()}</h1>
                <p className="p-5">Sender Name: {sendername}</p> 
                <p className="p-5">Reciver Name: {receivername}</p> 
                <p className="p-5">Role: {rolee}</p>
                <div className="ml-auto mt-auto mb-auto bg-orange-500 p-2 rounded-xl">
                <Drawer>
                    <DrawerTrigger className="text-slate-950">Get Details</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                    <DrawerTitle>SHIPMENT DETAILS</DrawerTitle>
                                    <DrawerDescription>Below are the detailed information of the selected shipment.</DrawerDescription>
                            </DrawerHeader>
                            <ScrollArea>
                            <table>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Item No: {indexx.toString()}</p></td>
                                    <td><p className="p-5 mr-2 text-xl">Role: {rolee}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Sender Name: {sendername}</p></td>
                                    <td><p className="p-5 mr-2 text-xl">Receiver Name: {receivername}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Sender Address: {sender}</p></td>
                                    <td><p className="p-5 mr-2 text-xl">Receiver Address: {receiver}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Product Name: {productname}</p></td>
                                    <td><p className="p-5 mr-2 text-xl">Quantity: {quantity.toNumber()}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Status: {stat}</p></td>
                                    <td><p className="p-5 mr-2 text-xl">Payment Status: {payy}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Pickup Time: {convertpickup(pickup)} </p></td>
                                    <td><p className="p-5 mr-2 text-xl">Delivery Time: {convertdelivery(delivery)}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="p-5 mr-2 text-xl">Time Estimated to complete shipment: {caltime(delivery)}</p></td>
                                </tr>
                            </table>   
                            <ScrollBar orientation="horizontal" />
                            </ScrollArea>                        
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                         </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                </div>
            </div>
        </div>
    );

};

export default ShipmentData;
