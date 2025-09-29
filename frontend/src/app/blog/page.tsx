import Navbar from "@/components/Navbar";
import HelpButton from "@/components/HelpButton";
import Footer from "@/components/Footer";
import FeaturedArticles from "@/components/FeaturedArticles";
import BrowseArticles from "@/components/BrowseArticles";
import EmailMarketingFeature from "@/components/MarketingFeature";


export default function LandingPage(){
    return(
        <div className="min-h-screen bg-white">
            <HelpButton/>
            <Navbar/>
            <FeaturedArticles/>
            <BrowseArticles/>
        </div>
    )
}