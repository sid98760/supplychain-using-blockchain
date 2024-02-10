import React from 'react'
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { ScrollArea } from '../@/components/ui/scroll-area';

import { cn } from '../@/lib/utils';
import { ToastAction } from '../@/components/ui/toast';
import { useToast } from '../@/components/ui/use-toast';


const FormB = () => {

    const [addContact, setAddContact] = useState(false);
    const [sendername, setName1] = useState("");
    const [receivername, setName2] = useState("");
    const [addresssender, setAddress1] = useState("");
    const [addressreceiver, setAddress2] = useState("");
    const [index,setindex] = useState("");
    const [value1, setValue] = useState("");
    const [pay,setpay] = useState("");

    function resetForm() {
        setName1("");
        setName2("");
        setAddress1("");
        setAddress2("");
        setindex("");
        setValue("");
        console.log(value1);
        setpay("");
        console.log(pay);
    }

    const {toast} = useToast()

  return (
    <>
        <div>
        {!addContact ? (
                <button
                    className={styles.createshipmentTriggerButton}
                    onClick={() => setAddContact(true)}
                >Start Shipment</button>
            ) : (
            <div className={styles.addContactContainer}>
                <div className={cn(
      "rounded-xl border border-slate-200 bg-slate-300 text-stone-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-neutral-200 fixed top-1/2 left-[75%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-0 w-2/5 h-4/5")}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setAddContact(false)}
                    >Close</button>
                    <h1>Add Shipment Details</h1>
                        <ScrollArea className={styles.addContactForm}>
                            <input 
                                type="text"
                                placeholder="Sender Name"
                                value={sendername}
                                onChange={(e) => setName1(e.target.value)}
                            />
                            <input 
                                type="text"
                                placeholder="Receiver Name"
                                value={receivername}
                                onChange={(e) => setName2(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Sender Address"
                                value={addresssender}
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Receiver Address"
                                value={addressreceiver}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                            <input 
                                type="number"
                                placeholder="Index"
                                min="0"
                                value={index}
                                onChange={(e) => setindex(e.target.value)}
                            />
                        
                            <select
                                value={value1}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                            >
                                <option value="0">Manufacturer</option>
                                <option value="1">WholeSaler</option>
                                <option value="2">Retailer</option>
                            </select>
                            <select
                                value={pay}
                                onChange={(e) => {
                                    setpay(e.target.value);
                                }}
                            >
                                <option value="0">Paid</option>
                                <option value="1">Unpaid</option>
                                <option value="2">Token Received</option>
                            </select>
                        </ScrollArea>

                    <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) => contract.call(
                            "startShipment",
                            [
                                sendername,
                                receivername,
                                addresssender,
                                addressreceiver,
                                index,
                                value1,
                                pay
                            ]
                        )}
                        onSuccess={() => {
                            resetForm();
                            setAddContact(false);
                        }}
                        onError={(Error)=> alert(Error)}
                    >Start Shipment</Web3Button>
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormB;