import { NextPage } from "next";
import Newnavi from "../component/header";
import ComponentA from "../component/ComponentA";
import ComponentB from "../component/ComponentB";

const Home: NextPage = () => {

  return (   
      <>
      <div className="fixed top-0 left-0 right-0 z-20">
          <Newnavi/>
      </div>
      <div className="ml-20 mr-20 mt-40 h-1/6 z-0">
          <ComponentA />
      </div>
      <div className="z-10">
        <ComponentB />
      </div>
      </>
  );
};

export default Home;
