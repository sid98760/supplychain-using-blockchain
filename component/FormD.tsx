import React from 'react'
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';
import Geteachshipment from './geteachshipment';
import { cn } from '../@/lib/utils';


const FormD = () => {

    const [addContact, setAddContact] = useState(false);
    const [index, setIndex] = useState("0");

    function resetForm() {
        setIndex("");
    }

  return (
    <>
        <div>
        {!addContact ? (
                <button
                    className={styles.createshipmentTriggerButton}
                    onClick={() => setAddContact(true)}
                >Get Shipment Details</button>
            ) : (
            <div className={styles.addContactContainer}>
                <div className={cn(
      "rounded-xl border border-slate-200 bg-slate-300 text-stone-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-neutral-200 fixed top-1/2 left-[175%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  p-4 w-2/5 h-3/5")}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setAddContact(false)}
                    >Close</button>
                    <h1 className='mt-4 mb-4'>Add Shipment Details</h1>
                        <ScrollArea className={styles.addContactForm}>
                            <input 
                                type="number"
                                min="0"
                                placeholder="Index"
                                value={index}
                                onChange={(e) => setIndex(e.target.value)}
                            />

                        <ScrollBar orientation="horizontal" />
                        </ScrollArea>

                        <Geteachshipment
                            index={parseInt(index)}
                        />

                        
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormD;