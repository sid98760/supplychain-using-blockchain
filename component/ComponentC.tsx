import React from 'react'

const ComponentC = () => {
  return (
    <div className='ml-10 mr-10 p-6 h-1/6 bg-zinc-200 dark:bg-zinc-800 rounded-xl'>
        <h2 className='text-4xl text-center p-5 font-black mb-2'>How to use Secure SupplyHub</h2>
        <div id='createship' className='flex flex-col md:flex-row p-5'>
            <img src='https://uit.stanford.edu/sites/default/files/Storage-Solution.gif' className='w-auto h-auto md:w-full md:h-80'></img>
            <div className='px-10'>
                <h4 className='text-2xl text-center p-2 font-semibold'>Create Shipment</h4>
                <div className='p-3'>
                
                    <p className='text-lg'>This feature allows manufacturers to initiate the supply chain process by creating a new shipment for goods ready for transport. Upon creating a shipment, it is marked as PENDING, indicating that it is prepared for the next step in the supply chain but has not yet started its journey.</p>
                    <p className='mt-[15px] text-lg'>Follow the steps given below to fill in the details of form under this section: </p>

                    <p className='mt-[10px] text-lg'>1. Index Creation: Assign a unique identifier to each shipment for easy tracking.</p>
                    <p className='text-lg'>2. Product Details: Input the name and quantity of the product being shipped. This ensures clarity and accountability for what is being transported.</p>
                
                </div>
            </div>
        </div>
        <div id='startship' className='flex flex-col md:flex-row p-5 mt-4'>
            <div className='pl-0 pr-3'>
                <h4 className='text-2xl text-center p-2 font-semibold'>Start Shipment</h4>
                <div className='p-1'>
                
                    <p className='text-lg'>For manufacturer: Once a shipment is created, the manufacturer can officially start its journey by providing detailed information necessary for a smooth transition to its next destination. This stage is crucial for setting the shipment in motion and updating its status to IN_TRANSIT.</p>
                    <p className='text-lg mt-[8px]'>For wholesaler: Once a shipment is deivered to the wholesaler, then the wholesaler with the address which completed the shipment can start the shipment again for delivering it to retailer. Again, this stage is crucial for setting the shipment in motion and updating its status to IN_TRANSIT.</p>

                    <p className='mt-[15px] text-lg'>Follow the steps given below to fill in the details of form under this section: </p>

                    <p className='mt-[10px] text-lg'>1. Receiver's Information: Include the public address of the shipment's receiver to ensure it reaches the correct destination.</p>
                    <p className='text-lg'>2. Shipment Index: Utilize the unique index assigned during creation for accurate tracking.</p>
                    <p className='text-lg'>3. Additional Details: Fill in essential information such as the delivery date, payment status, and names of the sender and receiver.</p>

                
                </div>
            </div>
            <img src='https://i.pinimg.com/originals/bc/85/0f/bc850fcedb45dce673057d546b0b2810.gif' className='w-auto h-auto md:w-full md:h-96 mt-8 ml-2'></img>
        </div>
        <div id='completeship' className='flex flex-col md:flex-row p-5 mt-6'>
            <img src='https://i.pinimg.com/originals/cf/83/db/cf83db51e7a566b33aa2dfdb15536dcc.gif' className='w-auto h-auto md:w-[475px] md:h-[300px]] mt-0'></img>
            <div className='px-10'>
                <h4 className='text-2xl text-center p-2 font-semibold'>Complete Shipment</h4>
                <div className='p-3'>
                
                    <p className='text-lg'>
                        This functionality is designed for wholesalers and retailers to mark the receipt of goods, completing the shipment process. This action signifies that the goods have successfully arrived at the wholesaler's or retailer's premises and are ready for the next phase of distribution. 
                        Once shipment is marked as received on our ledger then, it automatically updates its status to DELIVERED, indicating successful delivery to the wholesaler or retailer. If the shipment is being delivered to wholesaler from manufacturer then, only a wholesaler with a matching public address to the one provided at the start of the shipment can complete this process. 
                        If the shipment is being delivered to retailer from wholesaler then, only a retailer with a matching public address to the one provided at the start of the shipment can complete this process.
                    </p>
                    <p className='mt-[15px] text-lg'>Follow the steps given below to fill in the details of form under this section: </p>

                    <p className='mt-[10px] text-lg'>1. Shipment Index Verification: The wholesaler or reatiler must enter the correct index of the shipment to be completed.</p>                
                </div>
            </div>
        </div>
        <div id='getship' className='flex flex-col md:flex-row p-5 mt-4'>
            <div className='pl-0 pr-3'>
                <h4 className='text-2xl text-center p-2 font-semibold'>Get Shipment</h4>
                <div className='p-1'>
                
                    <p className='text-lg'>This feature provides stakeholders with the ability to access comprehensive details of any shipment by entering its unique index. It serves as a transparent and accessible record of the shipment's journey and current status.</p>

                    <p className='mt-[15px] text-lg'>Key Information Available: </p>

                    <p className='mt-[10px] text-lg'>1. Public Addresses: View the sender's and receiver's blockchain public addresses for security and verification.</p>
                    <p className='text-lg'>2. Participant Names: Access the names of the sender and receiver involved in the shipment.</p>
                    <p className='text-lg'>3. Current Holder: Identify who currently possesses the shipment (Manufacturer, Wholesaler, or Retailer).</p>
                    <p className='text-lg'>4. Shipment Status: Check whether the shipment is pending, in transit, or delivered.</p>
                    <p className='text-lg'>5. Payment and Delivery Details: Review the payment status and estimated delivery time if the shipment is in transit.</p>

                
                </div>
            </div>
            <img src='https://cdn.dribbble.com/users/4054/screenshots/4641313/checklist.gif' className='w-auto h-auto md:w-full md:h-96 mt-4 ml-3'></img>
        </div>
    </div>
  )
}

export default ComponentC;
