import React,{useRef} from 'react'
import { useState,useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { ScrollArea,ScrollBar } from '../@/components/ui/scroll-area';
import { cn } from '../@/lib/utils';
import { useAddress } from '@thirdweb-dev/react';
import flatpickr from "flatpickr";
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';



const FormB = () => {

    const addr = useAddress();
    const [addContact, setAddContact] = useState(false);
    const [sendername, setName1] = useState("");
    const [receivername, setName2] = useState("");
    const [addresssender, setAddress1] = useState("");
    const [addressreceiver, setAddress2] = useState("");
    const [index,setindex] = useState("");
    const [value1, setValue] = useState("");
    const [pay,setpay] = useState("");
    const[disable,setable]=useState(false);
    const[date,setdate]=useState("");

 

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

    const [err1,seterr1]=useState("");

    if(sendername!=""){
        if(document.getElementById("SENDER")){
            document.getElementById("SENDER")!.style.borderColor = "white";
            document.getElementById("SENDER")!.style.borderWidth = "2px"  ;
            document.getElementById("sendererror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }    
    }
    if(receivername!=""){
        if(document.getElementById("RECEIVER")){
            document.getElementById("RECEIVER")!.style.borderColor = "white";
            document.getElementById("RECEIVER")!.style.borderWidth = "2px";
            document.getElementById("receivererror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
        
    }
    if(addressreceiver!=""){
        if(document.getElementById("RECEIVERADDRESS")){
            document.getElementById("RECEIVERADDRESS")!.style.borderColor = "white";
            document.getElementById("RECEIVERADDRESS")!.style.borderWidth = "2px";
            document.getElementById("receiveraddresserror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
    }
    if(index!=""){
        if(document.getElementById("INDEX")){
            document.getElementById("INDEX")!.style.borderColor = "white";
            document.getElementById("INDEX")!.style.borderWidth = "2px";
            document.getElementById("indexerror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
        
    }
    if(value1=="-1"){
        if(document.getElementById("ROLE"))
        {
            document.getElementById("ROLE")!.style.borderColor = "red";
            document.getElementById("ROLE")!.style.borderWidth = "4px";
            document.getElementById("roleerror")!.innerHTML = "Please choose your role!";
        }
    }
    else if(value1!=""){
        if(document.getElementById("ROLE"))
        {
            document.getElementById("ROLE")!.style.borderColor = "white";
            document.getElementById("ROLE")!.style.borderWidth = "2px";
            document.getElementById("roleerror")!.innerHTML = "";
            if(disable!=false){
                setable(false);
            }
        }
        
  
    }
    if(pay=="-1"){
        if(document.getElementById("PAY")){
            document.getElementById("PAY")!.style.borderColor = "red";
            document.getElementById("PAY")!.style.borderWidth = "4px";
            document.getElementById("payerror")!.innerHTML = "Please choose your payment status!";
        }
    }
    else if(pay!=""){
        if(document.getElementById("PAY")){
            document.getElementById("PAY")!.style.borderColor = "white";
            document.getElementById("PAY")!.style.borderWidth = "2px";
            document.getElementById("payerror")!.innerHTML = "";     
            if(disable!=false){
                setable(false);
            }
        }
        
    }

    


    function handlevalidation(){
        if(sendername==""){
            document.getElementById("SENDER")!.style.borderColor = "red";
            document.getElementById("SENDER")!.style.borderWidth = "2px";
            document.getElementById("sendererror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(receivername==""){
            document.getElementById("RECEIVER")!.style.borderColor = "red";
            document.getElementById("RECEIVER")!.style.borderWidth = "2px";
            document.getElementById("receivererror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(addressreceiver==""){
            document.getElementById("RECEIVERADDRESS")!.style.borderColor = "red";
            document.getElementById("RECEIVERADDRESS")!.style.borderWidth = "2px";
            document.getElementById("receiveraddresserror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(index==""){
            document.getElementById("INDEX")!.style.borderColor = "red";
            document.getElementById("INDEX")!.style.borderWidth = "2px";
            document.getElementById("indexerror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(value1==""){
            document.getElementById("ROLE")!.style.borderColor = "red";
            document.getElementById("ROLE")!.style.borderWidth = "2px";
            document.getElementById("roleerror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }
        
        if(pay==""){
            document.getElementById("PAY")!.style.borderColor = "red";
            document.getElementById("PAY")!.style.borderWidth = "2px";
            document.getElementById("payerror")!.innerHTML = "This Field cannot be empty!";
            setable(true)
        }       
    }

    const datePickerRef = useRef(null);

    useEffect(() => {
        // Ensure the ref current value is not null before initializing flatpickr
        if (datePickerRef.current) {
          const instance  = flatpickr(datePickerRef.current, {
            enableTime: true, // Enable time picker
            dateFormat: "U", // Set the date and time format
            altFormat:"U",
          });
          console.log(date);
        }
      }, []);

      function getTimestampString(date: string): Number {
        return moment(date).toDate().getTime();
    }

    

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
                            <p id="sendererror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="text"
                                placeholder="Sender Name"
                                value={sendername}
                                onChange={(e) => setName1(e.target.value)}
                                id='SENDER'
                            />

                            <p id="receivererror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="text"
                                placeholder="Receiver Name"
                                value={receivername}
                                onChange={(e) => setName2(e.target.value)}
                                id='RECEIVER'
                            />
                            
                            
                            <p id="receiveraddresserror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <input 
                                type="text" 
                                placeholder="Receiver Address"
                                value={addressreceiver}
                                onChange={(e) => setAddress2(e.target.value)}
                                id='RECEIVERADDRESS'
                            />
                            
                            <p id="indexerror" className='text-sm/[6px] mb-3 text-red-700 font-bold'></p>
                            <input 
                                type="number"
                                placeholder="Index"
                                min="0"
                                value={index}
                                onChange={(e) => setindex(e.target.value)}
                                id='INDEX'
                            />
                            
                            <p id="roleerror" className='text-sm/[6px] mb-3 text-red-700 font-bold'>{err1}</p>
                            <select
                                value={value1}
                                onChange={(e) => {
                                    setValue(e.target.value);        
                                }}
                                id='ROLE'
                            >
                            
                                <option value="-1">Select your Role</option>
                                <option value="0">Manufacturer</option>
                                <option value="1">WholeSaler</option>
                                <option value="2">Retailer</option>
                            </select>
                            
                            
                            <p id="payerror" className='text-sm/[6px] mb-2 text-red-700 font-bold'></p>
                            <select
                                value={pay}
                                onChange={(e) => {
                                    setpay(e.target.value);
                                }}
                                id='PAY'
                            >
                            
                                <option value="-1">Select your Payment Status</option>
                                <option value="0">Paid</option>
                                <option value="1">Unpaid</option>
                                <option value="2">Token Received</option>
                            </select>

                            <input type="datetime-local" 
                            ref={datePickerRef} 
                            placeholder="Select delivery Date and Time" 
                            value={date.toLocaleString()} 
                            onChange={(e)=> {setdate(e.target.value);}} />
                            
                        <ScrollBar orientation="horizontal" />
                        </ScrollArea>

                    <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) => contract.call(
                            "startShipment",
                            [
                                sendername,
                                receivername,
                                addr,
                                addressreceiver,
                                index,
                                value1,
                                pay,
                                getTimestampString(date)
                                
                            ]
                        )}
                        onSuccess={() => {
                            resetForm();
                            setAddContact(false);
                        }}
                        onSubmit={()=>{
                            handlevalidation()
                        }}
                        onError={(err)=>{
                            alert(err.message);
                        }}
                        isDisabled={disable}
                    >Start Shipment</Web3Button>
                </div>
            </div>
            )}
        </div>
    </>   
  );
}

export default FormB;