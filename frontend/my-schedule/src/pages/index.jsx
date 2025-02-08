import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Details from "@/components/details";
import Footer from "@/components/footer";
import GetStarted from "@/components/getStarted";


export default function Home() {
  return (
    <div>
      <div className="px-20">
      <Navbar></Navbar>
      <Hero></Hero>
      <hr className="mt-8 border-1"/>
      <Details></Details>
      <GetStarted></GetStarted>
      </div>
      <Footer></Footer>
    </div>
    
    
  );
}

