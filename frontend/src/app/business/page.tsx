import Navbar from "@/components/Navbar";
import HelpButton from "@/components/HelpButton";
import Footer from "@/components/Footer";
import BusinessHero from "@/components/BusinessHero";
import BusinessKeyFeatures from "@/components/BusinessKeyFeatures";
import BusinessEverythingNeed from "@/components/BusinessEverythingNeed";
import FAQSection from "@/components/FAQSection";
import TransformCard from "@/components/TransformCard";
import ExploreSolora from "@/components/ExploreSolora";
import BusinessFeautures from "@/components/BusinessFeautures";
import BusinessTestimonial from "@/components/BusinessTestimonial";
import BusinessMigration from "@/components/BusinessMigration";

export default function LandingPage(){
    return(
        <div className="min-h-screen bg-white">
            <HelpButton/>
            <Navbar/>
            <BusinessHero/>
            <BusinessKeyFeatures/>
            <BusinessEverythingNeed/>
            <BusinessFeautures/>
            <BusinessTestimonial/>
            <BusinessMigration/>
            <FAQSection/>
            <ExploreSolora/>
            <TransformCard/>
            <Footer/>
        </div>
    )
}