import React from 'react'
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';
import { useAddress } from '@thirdweb-dev/react';
import { cn } from '../@/lib/utils';





const FormC = () => {

    const [addContact, setAddContact] = useState(false);
    const [index, setIndex] = useState("");

    const add = useAddress();

    function resetForm() {
        setIndex("");
        
    }

    function showcompleted(){
        alert("Shipment Created!")
    }


  return (
    <>
        <div>
        {!addContact ? (
                <button
                    className={styles.createshipmentTriggerButton}
                    onClick={() => setAddContact(true)}
                >Complete Shipment</button>
            ) : (
            <div className={styles.addContactContainer}>
                <div className={cn(
      "rounded-xl border border-slate-200 bg-slate-300 text-stone-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-neutral-200 fixed top-1/2 left-[125%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  p-4 w-2/5 h-3/5")}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setAddContact(false)}
                    >Close</button>
                    <h1 className='mt-4 mb-4'>Add Shipment Details</h1>
                        <ScrollArea className={styles.addContactForm}>
                            <input 
                                type="number"
                                placeholder="Index"
                                min="0"
                                value={index}
                                onChange={(e) => setIndex(e.target.value)}
                            />

                        <ScrollBar orientation="horizontal" />
                        </ScrollArea>

                        <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) => contract.call(
                            "completeShipment",
                            [
                                index,
                                add,
                            ]
                        )}
                        onSuccess={() => {
                            resetForm();
                            setAddContact(false);
                            showcompleted();
                        }}
                        onError={(err)=>{
                            var msg = String(err.message.match(/Reason: (.+?)\n/)?.[1]);
                            if(err.message.match(/Reason: (.+?)\n/)?.[1]){
                                alert(msg);
                            }
                        }}
                    >Complete Shipment</Web3Button>


                    
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormC;