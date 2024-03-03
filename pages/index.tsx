import { NextPage } from "next";
import Newnavi from "../component/header";
import ComponentA from "../component/ComponentA";
import ComponentB from "../component/ComponentB";
import ComponentC from "../component/ComponentC";
import ComponentD from "../component/ComponentD";
import Footer from "../component/Footer";

const Home: NextPage = () => {

  return (   
      <>
      <div className="fixed top-0 left-0 right-0 z-50">
          <Newnavi/>
      </div>
      <div className="ml-20 mr-20 mt-40 h-1/6 z-0">
          <ComponentA />
      </div>
      <div className="z-10">
        <ComponentB />
      </div>
      <div className="mt-20 z-20" id="use">
        <ComponentC />
      </div>
      <div className="mt-20" id="aboutus">
        <ComponentD />
      </div>
      <div className="mt-16 mb-3 z-40">
        <Footer/>
      </div>
      </>
  );
};

export default Home;
