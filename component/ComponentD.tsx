import React from 'react'

const ComponentD = () => {
  return (
    <div className='ml-10 mr-10 p-6 h-1/6 bg-zinc-200 dark:bg-zinc-800 rounded-xl'>
        <h2 className='text-4xl text-center p-5 font-black mb-2'>About Us</h2>
        <div>
            <div>
                <p className='text-lg mt-8'>
                    Welcome to Secure SupplyHub, your premier blockchain-powered platform dedicated to redefining supply chain management for the digital age. 
                    Secure SupplyHub is at the forefront of revolutionizing supply chain management through the power of blockchain technology. 
                    We offer a robust platform designed to enhance transparency, security, and efficiency in the movement of goods from manufacturers to end retailers. 
                    Our application caters to key stakeholders in the supply chain, including manufacturers, wholesalers, and retailers, ensuring that every transaction is recorded, and every product journey is traceable in real-time. 
                    At Secure SupplyHub, we are committed to simplifying supply chain operations while upholding the highest standards of integrity and reliability. Secure SupplyHub is built on cutting-edge blockchain technology, which ensures that every product's journey is securely recorded and easily accessible. 
                    Our platform's features, including the creation, starting, completing, and tracking of shipments, are designed to provide a comprehensive overview of the supply chain in real time. This not only enhances operational efficiency but also builds a foundation of trust between manufacturers, wholesalers, and retailers.
                </p>
            </div>
            <div className='flex flex-col md:flex-row mt-5'>
                <div className='relative m-5 group'>
                    <img className="opacity-40 w-auto h-auto md:w-[420px] md:h-[300px]] dark:group-hover:opacity-15 group-hover:opacity-30 rounded-xl transition-opacity duration-200" src='https://previews.123rf.com/images/artursz/artursz1804/artursz180401112/99085999-writing-note-showing-our-mission-business-photo-showcasing-goal-motivation-target-growth-planning.jpg'></img>     
                    <p className=' md:w-auto md:h-auto absolute top-[10%] md:top-[25%] left-[10%] right-[10%] font-bold text-sm md:text-sm group-hover:opacity-100 text-center md:hover:scale-125 hover:scale-110'>
                        To empower manufacturers, wholesalers, and retailers with a revolutionary platform that simplifies the complexities of supply chain management. We are committed to delivering a system where every transaction is not only secure but also transparent and traceable in real-time.
                    </p>
                    <p className='text-xl text-center p-3 font-bold mb-2'>Our Mission</p>
                </div>
                <div className='relative m-5 group'>
                    <img className="dark:opacity-50 opacity-55 w-auto h-auto md:w-[420px] md:h-[280px] dark:group-hover:opacity-15 group-hover:opacity-30 rounded-xl transition-opacity duration-200" src='https://us.123rf.com/450wm/innakot/innakot2309/innakot230900174/213196128-our-vision-text-on-a-sticky-with-pen-on-the-gray-background.jpg?ver=6'></img>
                    <p className='absolute md:top-[25%] top-[15%] left-[7%] right-[7%] font-bold text-xs md:text-sm group-hover:opacity-100 text-center md:hover:scale-125 hover:scale-110'>
                        To become the global standard for supply chain operations, where every product's journey from creation to consumption is seamlessly integrated, monitored, and managed through our blockchain platform. We envision a world where supply chain complexities are no longer a barrier to business efficiency and environmental sustainability.
                    </p>
                    <p className='text-xl text-center p-3 font-bold mb-2'>Our Vision</p>
                </div>
                <div className='relative m-5 group'>
                    <img className="opacity-50 w-auto h-auto md:w-[420px] md:h-[280px] dark:group-hover:opacity-15 group-hover:opacity-30 rounded-xl transition-opacity duration-200" src='https://t3.ftcdn.net/jpg/03/96/59/82/360_F_396598277_fmx8Ykhw4woErijL1CCug9563VwLOKxt.jpg'></img>
                    <p className='absolute md:top-[25%] top-[20%] left-[7%] right-[7%] font-bold text-xs md:text-sm group-hover:opacity-100 text-center md:hover:scale-110 hover:scale-110'>
                        Secure SupplyHub offers a user-friendly interface where manufacturers can initiate shipments, wholesalers and retailers can acknowledge receipt, and they can track the progress of goods through the supplychain. Our detailed tracking system, ensures that every party involved in the supply chain can verify the authenticity and status of shipments.
                    </p>
                    <p className='text-xl text-center p-3 font-bold mb-2'>Our Services</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponentD;
