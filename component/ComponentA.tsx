import * as React from "react"
import FormA from "./FormA"
import FormB from "./FormB"
import FormC from "./FormC"
import FormD from "./FormD"
import styles from "../styles/Home.module.css"
 
import { Card,CardContent } from "../@/components/ui/card"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, } from "../@/components/ui/carousel"

const ComponentA = () => {
  return (
    <Carousel className="mt-20">
      <CarouselContent>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
            <div className="pl-10 pr-10">
              <Card>
                <CardContent className="items-center flex flex-col rounded-xl h-full w-full">
                  <div className="p-10">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center">Create Your Shipment Here</p>
                    <p className="font-bold p-4 mb-5 text-center">This segment has designed to capture all the essential information required to process and deliver your swiftly and securely. After filling out all necessary fields, please review your information carefully and then submit form. If you have any questions or need assistance while filling out the form, please contact our support team.</p>
                  </div>
                  <div className={styles.formbutton} >
                    <FormA/>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
          <div className="pl-10 pr-10">
            <Card>
                <CardContent className="flex items-center flex flex-col rounded-xl h-full w-full">
                  <div className="p-10">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center">Start Your Shipment Here</p>
                    <p className="font-bold p-4 mb-5 text-center">This segment is designed to capture all the Shipment information which will eventually be stored in an Blockchain. After filling out all the necessary fields, please review your information carefully and then submit the form. Please make sure you fill in all the information correctly so that your shipment will be started.</p>
                  </div>
                  <div className={styles.formbutton} >
                    <FormB/>
                  </div>
                  </div>
                 
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
          <div className="pl-10 pr-10">
            <Card>
              <CardContent className="flex items-center flex flex-col rounded-xl h-full w-full">
                <div className="p-10">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center">Complete Your Shipment Here</p>
                    <p className="font-bold p-4 mb-5 text-center">This segment is designed to complete your shipments which is already stored and started in Blockchain. After filling out all of the necessary fields, please review your information carefully and then submit the form. This will complete your shipment from one Stakeholder to another and Shipment will be ready for start again.</p>
                  </div>
                  <div className={styles.formbutton} >
                    <FormC/>
                  </div>
                </div>
                  
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
          <div className="pl-10 pr-10">
            <Card>
                <CardContent className="flex items-center  flex flex-col rounded-xl h-full w-full">
                  <div className="p-10">
                  <div className={styles.textanimation}>
                    <p className="font-black mb-5 mt-5 text-center">Get your Shipment Here</p>
                    <p className="font-bold p-4 mb-5 text-center">This Section can be used to get all the details related to your shipment which is stored in Blockchain. After filling out all the necessary fields, please review your information carefully and then submit the form. Along with all the details we can track the real-time status and payment status of the shipment with the help of Blockchain technology.</p>
                  </div>
                  <div className={styles.formbutton} >
                    <FormD />
                  </div>
                  </div>
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1 lg:basis-1/2">
          <div className="p1-10 pr-10">
            <Card>
                <CardContent className="flex items-center justify-center h-full w-full ">
                  <div className="p-10">
                    5
                  </div>                 
                </CardContent>
            </Card>
          </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default ComponentA;
