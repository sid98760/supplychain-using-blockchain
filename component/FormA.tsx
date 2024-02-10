import React from 'react'
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { ScrollArea } from '../@/components/ui/scroll-area';
import { useAddress } from '@thirdweb-dev/react';

import { ToastAction } from "../@/components/ui/toast"
import { useToast } from '../@/components/ui/use-toast';

import { cn } from '../@/lib/utils';

const FormA = () => {

    const [addContact, setAddContact] = useState(false);
    const [index, setIndex] = useState("");
    const [product, setProduct] = useState("");
    const [quantity,setQuantity] = useState("");

    function resetForm() {
        setIndex("");
        setProduct("");
        setQuantity("");
    }

    const add = useAddress();
    const { toast } = useToast()

  return (
    <>
        <div>
        {!addContact ? (
                <button
                    className={styles.createshipmentTriggerButton}
                    onClick={() => setAddContact(true)}
                >Create Shipment</button>
            ) : (
            <div className={styles.addContactContainer}>
                <div className={cn(
      "rounded-xl border border-slate-200 bg-slate-300 text-stone-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-neutral-200 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  p-0 w-2/5 h-4/5")}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setAddContact(false)}
                    >Close</button>
                    <h1>Add Shipment Details</h1>
                    <ScrollArea className={styles.addContactForm}>
                            <input 
                                type="number"
                                min="0"
                                placeholder="Index"
                                value={index}
                                onChange={(e) => setIndex(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Name of Product"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                            />
                            <input 
                                type="number"
                                min="0"
                                placeholder="Qauntity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </ScrollArea>

                        <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={
                            (contract) => contract.call(
                            "createShipment",
                            [
                                index,
                                product,
                                quantity,
                                add
                            ]
                        )}
                        onSuccess={() => {
                            resetForm();
                            setAddContact(false);
                        }}
                        onError={() => {
                            toast({
                              title: "Something went Wrong",
                              description: "Something went wrong, please fill form correctly",
                              action: (
                                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                              ),
                            })
                          }}
                    >Create Shipment</Web3Button>
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormA;