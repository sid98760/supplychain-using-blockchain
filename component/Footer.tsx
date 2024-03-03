import React from 'react'



const Footer = () => {
    
    
    return (
        <div>
            <div className='pt-5 pb-5 w-full  dark:bg-slate-900  dark:text-slate-300  bg-slate-300  text-stone-700 h-full ' id='footer'>
                <div>
                    <div>
                        <div>
                            <h2 className='text-center'><a href="#" className='text-xl font-bold'>Secure Supply Hub</a></h2>
                            <ul className='flex flex-row justify-center m-3'>
                                <li className='m-5'><a href="#">Home</a></li>
                                <li className='m-5'><a href="#createshipment">Create Shipment</a></li>
                                <li className='m-5'><a href="#startshipment">Start Shipment</a></li>
                                <li className='m-5'><a href="#completeshipment">Complete Shipment</a></li>
                                <li className='m-5'><a href="#getshipment">Get Shipment</a></li>
                                <li className='m-5'><a href="#">About Us</a></li>
                            </ul>
                            <ul className='flex flex-row justify-center m-3'>
                                <li className='m-3'>
                                    <a className="flex flex-row" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"> 
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXbFB3fWCwf2k3ieJ35V42vuxsiOUyxkdn0Kfle37xU6QhSFycH3Xra4MUL3z55EI2kQ&usqp=CAU" alt="logo" className="w-8 h-8 "></img> 
                                        <p className='ml-2'>Twitter</p><p className='ml-6 mr-2'>|</p> 
                                    </a>
                                </li>
                                <li className='m-3'>
                                    <a className="flex flex-row" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"> 
                                        <img src="https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt="logo" className="w-8 h-8"></img> 
                                        <p className='ml-2'>Instagram</p><p className='ml-3 mr-2'>|</p> 
                                    </a>
                                </li>
                                <li className='m-3'>
                                    <a className="flex flex-row" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"> 
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkVn6Cto0nupcNPtfDiGglmu3eyWqCaJWL7bRtLqopddKEPQx50CR3r86IaS8x3bLXlk&usqp=CAU" alt="logo" className="w-8 h-8"></img> 
                                        <p className='ml-2'>Facebook</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-center mt-2 mb-3'>
                                Copyright &copy; All rights reserved | This website is developed by Siddhesh Chinchole.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
