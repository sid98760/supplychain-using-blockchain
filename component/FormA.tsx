import React from 'react'
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';
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
    const[disable,setable]=useState(false);

    if(index!=""){
        if(document.getElementById("ind")){
            document.getElementById("ind")!.style.borderColor = "white";
            document.getElementById("ind")!.style.borderWidth = "2px"  ;
            document.getElementById("numbererror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }    
    }
    if(product!=""){
        if(document.getElementById("prod")){
            document.getElementById("prod")!.style.borderColor = "white";
            document.getElementById("prod")!.style.borderWidth = "2px";
            document.getElementById("producterror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
        
    }
    if(quantity!=""){
        if(document.getElementById("quan")){
            document.getElementById("quan")!.style.borderColor = "white";
            document.getElementById("quan")!.style.borderWidth = "2px";
            document.getElementById("quanerror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
    }

    function handlevalidation(){
        if(index==""){
            document.getElementById("ind")!.style.borderColor = "red";
            document.getElementById("ind")!.style.borderWidth = "2px";
            document.getElementById("numbererror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(product==""){
            document.getElementById("prod")!.style.borderColor = "red";
            document.getElementById("prod")!.style.borderWidth = "2px";
            document.getElementById("producterror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(quantity==""){
            document.getElementById("quan")!.style.borderColor = "red";
            document.getElementById("quan")!.style.borderWidth = "2px";
            document.getElementById("quanerror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
    }

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
                            <p id="numbererror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="number"
                                min="0"
                                placeholder="Index"
                                value={index}
                                id='ind'
                                onChange={(e) => setIndex(e.target.value)}
                            />
                            <p id="producterror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="text" 
                                placeholder="Name of Product"
                                value={product}
                                id='prod'
                                onChange={(e) => setProduct(e.target.value)}
                            />
                            <p id="quanerror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="number"
                                min="0"
                                placeholder="Qauntity"
                                value={quantity}
                                id='quan'
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        
                        <ScrollBar orientation="horizontal" />
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
                        onError={(err) => {
                            alert(err);
                        }}
                        onSubmit={()=>{
                            handlevalidation()
                        }}
                        isDisabled={disable}
                    >Create Shipment</Web3Button>
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormA;