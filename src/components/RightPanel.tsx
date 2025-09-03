// src/components/RightPanel.jsx
const RightPanel = () => {
  // Client comments data
  const clientComments = [
    {
      id: 1,
      client: "Sarah Johnson",
      comment: "Excellent service! Delivered ahead of schedule.",
      rating: 5,
      date: "2 days ago"
    },
    {
      id: 2,
      client: "Michael Brown",
      comment: "Good communication throughout the project.",
      rating: 4,
      date: "1 week ago"
    },
    {
      id: 3,
      client: "Emily Wilson",
      comment: "Professional team with great attention to detail.",
      rating: 5,
      date: "2 weeks ago"
    }
  ];

  return (
    <aside className=" w-84 bg-surface2 h-full p-4 rounded-2xl border-l border-color hidden lg:block overflow-auto">
      <h3 className="font-bold mb-4">Widgets</h3>
      
      {/* Stats Widget */}
      <div className="p-4 bg-surface1 rounded-lg shadow-theme mb-4 border border-color">
        <h4 className="font-medium mb-2">Performance Stats</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-secondary">Completion Rate</span>
            <span className="font-medium">92%</span>
          </div>
          <div className="w-full bg-surface3 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-secondary">Client Satisfaction</span>
            <span className="font-medium">88%</span>
          </div>
          <div className="w-full bg-surface3 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
          </div>
        </div>
      </div>
      
      {/* Recent Clients Widget */}
      <div className="p-4 bg-surface1 rounded-lg shadow-theme mb-4 border border-color">
        <h4 className="font-medium mb-2">Recent Clients</h4>
        <div className="space-y-3">
          {['Sarah Johnson', 'Michael Brown', 'Emily Wilson', 'Robert Davis'].map((client, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2">
                {client.charAt(0)}
              </div>
              <span className="text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Links Widget */}
      <div className="p-4 bg-surface1 rounded-lg shadow-theme mb-4 border border-color">
        <h4 className="font-medium mb-2">Quick Links</h4>
        <div className="space-y-2">
          {['Reports', 'Analytics', 'Settings', 'Help Center'].map((link, index) => (
            <a key={index} href="#" className="block text-secondary hover:text-primary text-sm">
              → {link}
            </a>
          ))}
        </div>
      </div>

      {/* Client Comments Brief */}
      <div className="p-4 bg-surface1 rounded-lg shadow-theme border border-color">
        <h4 className="font-medium mb-3">Recent Feedback</h4>
        <div className="space-y-3">
          {clientComments.map((comment) => (
            <div key={comment.id} className="pb-3 border-b border-color last:border-b-0 last:pb-0">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium">{comment.client}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${i < comment.rating ? 'text-yellow-400' : 'text-secondary'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-secondary mb-1 line-clamp-2">{comment.comment}</p>
              <div className="text-xs text-tertiary">{comment.date}</div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 p-2 bg-surface3 hover:bg-surface2 border border-color rounded text-xs text-secondary hover:text-primary transition-colors">
          View All Comments
        </button>
      </div>
    </aside>
  );
};

export default RightPanel;