import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HelpButton from "@/components/HelpButton";
import Campaigns from "@/components/Campaigns";
import Footer from "@/components/Footer";
import ReviewLogos from "@/components/TrustedBy";
import TrustedBy from "@/components/TrustedBy";
import WhySolora from "@/components/WhySolora";
import ExploreSolora from "@/components/ExploreSolora";
import TransformCard from "@/components/TransformCard";

export default function LandingPage(){
    return(
        <div className="min-h-screen bg-white">
            <HelpButton/>
            <Navbar/>
            <Hero/>
            <Features/>
            <TrustedBy/>
            <WhySolora/>
            <ExploreSolora/>
            <TransformCard/>
            <Footer/>
        </div>
    )
}