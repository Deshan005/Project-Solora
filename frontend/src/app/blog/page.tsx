import Navbar from "@/components/Navbar";
import HelpButton from "@/components/HelpButton";
import FeaturedArticles from "@/components/FeaturedArticles";
import BrowseArticles from "@/components/BrowseArticles";


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