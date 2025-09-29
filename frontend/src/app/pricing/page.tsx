import Navbar from "@/components/Navbar";
import HelpButton from "@/components/HelpButton";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import FeatureComparison from "@/components/FeatureComparison";
import AwardsSection from "@/components/awards";
import FAQSection from "@/components/FAQSection";
import TransformCard from "@/components/TransformCard";

export default function LandingPage(){
    return(
        <div className="min-h-screen bg-white">
            <HelpButton/>
            <Navbar/>
            <Packages/>
            <CallToAction/>
            <FeatureComparison/>
            <AwardsSection/>
            <FAQSection/>
            <TransformCard/>
            <Footer/>
        </div>
    )
}