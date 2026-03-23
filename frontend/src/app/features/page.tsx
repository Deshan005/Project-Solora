import Navbar from "@/components/Navbar";
import HelpButton from "@/components/HelpButton";
import EffortlessBooking from "@/components/EffortlessBooking";
import BookingFeaturesGrid from "@/components/BookingFeaturesList";
import ExploreSolora from "@/components/ExploreSolora";
import Footer from "@/components/Footer";
import TransformCard from "@/components/TransformCard";

export default function LandingPage(){
    return(
        <div className="min-h-screen bg-white">
            <HelpButton/>
            <Navbar/>
            <EffortlessBooking/>
            <BookingFeaturesGrid/>
            <ExploreSolora/>
            <TransformCard/>
            <Footer/>
        </div>
    )
}