import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Details from "@/components/details";

export default function Home() {
  return (
    <div className="px-20">
      <Navbar></Navbar>
      <Hero></Hero>
      <hr className="mt-8 border-1"/>
      <Details></Details>
    </div>
    
  );
}
