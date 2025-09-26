const Campaigns = () => {
  const campaigns = [
    { id: 1, title: "SPRING NEWSLETTER", status: "active" },
    { id: 2, title: "SUMMER PROMOTION", status: "draft" },
    { id: 3, title: "LOYALTY PROGRAM", status: "completed" }
  ];

  return (
    <section id="campaigns" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-roboto">
          Campaign Management Made Simple
        </h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Steps */}
          <div className="bg-gray-900 text-white p-6">
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white font-roboto">
                ← Back to Campaigns
              </button>
              <div className="flex gap-6 font-roboto">
                <span className="text-blue-400 font-medium">1 Settings</span>
                <span className="text-yellow-400 font-medium">2 Content</span>
                <span className="text-gray-400">3 Review & Send</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Campaign list */}
              <div className="md:col-span-1">
                <h3 className="font-bold text-gray-900 mb-4 font-roboto">KEY PROJECTS</h3>
                <div className="space-y-3">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer font-roboto"
                    >
                      <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                        campaign.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editor */}
              <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 font-roboto">CONTENT</h3>
                <div className="border border-gray-200 rounded-lg p-6 font-roboto">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-gray-100 rounded-lg font-medium">Rows</button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Settings</button>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg">Top</button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg">Postgraph</button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg">List</button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
                    <p className="text-gray-500">Content preview area</p>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium">
                      Send Test
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
