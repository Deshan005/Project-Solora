const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-100 via-pink-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#1e1e4d] rounded-3xl p-12 text-white">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo + Platform Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-wide">SOLORA</h2>
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="text-sm font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent mb-4">
                  PLATFORM
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm leading-6">
                  <li>Why We're Different</li>
                  <li>Pricing</li>
                  <li>Watch a video tour</li>
                  <li>Book a live demo</li>
                  <li>Try it now</li>
                  <li>Log in</li>
                </ul>
              </div>
            </div>

            {/* Business Types Section */}
            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="text-sm font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent mb-4">
                BUSINESS TYPES
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm leading-6">
                <li>Hair Salons</li>
                <li>Med Spas</li>
                <li>IV Therapy</li>
                <li>Skincare Studios</li>
                <li>Beauty Studios</li>
                <li>Massage Studios</li>
                <li>Hair Removal Studios</li>
                <li>Tattoo & Piercing</li>
                <li>Nail salons</li>
                <li>Barbershops</li>
                <li>Wellness Centers</li>
                <li>Spas</li>
              </ul>
            </div>

            {/* Features Section (Wider + Split into 2 columns) */}
            <div className="md:col-span-2 p-6 rounded-2xl bg-white/5">
              <h3 className="text-sm font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent mb-4">
                FEATURES
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-300 text-sm leading-6">
                  <li>Calendar & Scheduling</li>
                  <li>Payments & Point-of-Sale</li>
                  <li>Online Booking</li>
                  <li>Express Booking</li>
                  <li>Mobile Apps</li>
                  <li>Client Management</li>
                  <li>Two-Way Texting</li>
                  <li>Memberships & Packages</li>
                  <li>Forms & Chatting</li>
                </ul>
                <ul className="space-y-2 text-gray-300 text-sm leading-6">
                  <li>Gift Cards</li>
                  <li>Automated Flows</li>
                  <li>Campaigns</li>
                  <li>Offers & Discounts</li>
                  <li>Virtual Waiting Room</li>
                  <li>Retail & Inventory</li>
                  <li>Staff Management</li>
                  <li>Reporting</li>
                  <li>Multi-Location</li>
                  <li>Payroll Processing</li>
                  <li>Integrations</li>
                </ul>
              </div>
            </div>

            {/* Resources & Socials Section */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="text-sm font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent mb-4">
                  RESOURCES
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm leading-6">
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="text-sm font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent mb-4">
                  FOLLOW US
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm leading-6">
                  <li>Facebook</li>
                  <li>YouTube</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© Margemint. Inc. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Legal</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
