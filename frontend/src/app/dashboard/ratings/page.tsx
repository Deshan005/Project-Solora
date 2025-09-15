'use client';
import { useMemo } from 'react';
import { useLocalStorage } from '@/lib/useLocalStorage';
import Card from '@/components/UI/Card';
import type { Client } from '@/lib/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

type ClientWithRating = Client & { rating?: number };

export default function ClientRatingsPage() {
  const [clients, setClients, hydrated] = useLocalStorage<Client[]>('clients', []);

  const setClientRating = (id: string, rating: number) => {
    setClients(clients.map(c => (c.id === id ? { ...c, rating } : c)));
  };

  // Aggregate data for charts
  const { distribution, average } = useMemo(() => {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let total = 0;
    let count = 0;

    clients.forEach(c => {
      if ((c as ClientWithRating).rating) {
        const r = (c as ClientWithRating).rating!;
        dist[r] += 1;
        total += r;
        count += 1;
      }
    });

    return {
      distribution: Object.entries(dist).map(([rating, qty]) => ({
        rating,
        count: qty,
      })),
      average: count > 0 ? (total / count).toFixed(2) : 'N/A',
    };
  }, [clients]);

  if (!hydrated) return <div>Loading client ratings...</div>;

  if (clients.length === 0) {
    return <div className="text-gray-500">No clients available to rate.</div>;
  }

  const COLORS = ['#ef4444', '#f59e0b', '#facc15', '#22c55e', '#3b82f6'];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Client Ratings</h1>

            {/* Summary */}
      <Card title="Ratings Summary">
        <p className="mb-4">Average Rating: <span className="font-semibold">{average}</span></p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={distribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" label={{ value: 'Stars', position: 'insideBottom', offset: -5 }} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={distribution}
                dataKey="count"
                nameKey="rating"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Individual Ratings */}
      <div className="space-y-4">
        {clients.map((client) => (
          <Card title='' key={client.id}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{client.name}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setClientRating(client.id, star)}
                    className={`text-xl ${
                      (client as ClientWithRating).rating ?? 0 >= star
                        ? 'text-yellow-400'
                        : 'text-gray-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>


    </div>
  );
}



// 'use client';
// import { useMemo, useState } from 'react';
// import { useLocalStorage } from '@/lib/useLocalStorage';
// import Card from '@/components/UI/Card';
// import type { Client } from '@/lib/types';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend
// } from 'recharts';

// type ClientWithRating = Client & { rating?: number };

// // Custom tooltip component for the bar chart
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-surface1 p-3 rounded-lg border border-border-color shadow-md">
//         <p className="text-primary font-medium">{label}</p>
//         <p className="text-secondary">
//           {payload[0].value} {payload[0].value === 1 ? 'client' : 'clients'}
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// export default function ClientRatingsPage() {
//   const [clients, setClients, hydrated] = useLocalStorage<Client[]>('clients', []);
//   const [currentPage, setCurrentPage] = useState(1);
//   const clientsPerPage = 10;

//   const setClientRating = (id: string, rating: number) => {
//     setClients(clients.map(c => (c.id === id ? { ...c, rating } : c)));
//   };

//   // Calculate percentage change (mock data for demonstration)
//   const percentageChange = 12.5; // This would normally be calculated from previous month data

//   // Aggregate data for charts
//   const { distribution, average, ratedClients } = useMemo(() => {
//     const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
//     let total = 0;
//     let count = 0;
//     const rated = clients.filter(c => (c as ClientWithRating).rating);

//     rated.forEach(c => {
//       const r = (c as ClientWithRating).rating!;
//       dist[r] += 1;
//       total += r;
//       count += 1;
//     });

//     return {
//       distribution: Object.entries(dist).map(([rating, qty]) => ({
//         rating: `${rating} Star${Number(rating) > 1 ? 's' : ''}`,
//         count: qty,
//         value: qty,
//         name: `${rating} Star`
//       })),
//       average: count > 0 ? (total / count).toFixed(2) : 'N/A',
//       ratedClients: rated
//     };
//   }, [clients]);

//   // Pagination logic
//   const indexOfLastClient = currentPage * clientsPerPage;
//   const indexOfFirstClient = indexOfLastClient - clientsPerPage;
//   const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
//   const totalPages = Math.ceil(clients.length / clientsPerPage);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   if (!hydrated) return <div className="flex justify-center items-center h-64">Loading client ratings...</div>;

//   if (clients.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-gray-500 text-center">
//           <p className="text-xl mb-2">No clients available to rate.</p>
//           <p className="text-sm">Add clients to start rating them.</p>
//         </div>
//       </div>
//     );
//   }

//   const COLORS = ['#ef4444', '#f59e0b', '#facc15', '#84cc16', '#22c55e'];

//   return (
//     <div className="space-y-8 p-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-primary">Client Ratings</h1>
//         <div className="bg-primary/10 px-4 py-2 rounded-lg">
//           <span className="text-sm text-secondary">Average Rating:</span>
//           <span className="ml-2 text-xl font-bold text-primary">{average}</span>
//           <span className="text-sm text-secondary">/5</span>
//         </div>
//       </div>

//       {/* Summary */}
//       <Card title="Ratings Distribution" className="p-6">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Bar Chart */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">Ratings Frequency</h3>
            
//             {/* Percentage change indicator */}
//             <div className="flex items-center mb-6">
//               <div className={`flex items-center ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                 {percentageChange >= 0 ? (
//                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//                   </svg>
//                 ) : (
//                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                   </svg>
//                 )}
//                 <span className="text-sm font-medium">{Math.abs(percentageChange)}%</span>
//               </div>
//               <span className="text-sm text-secondary ml-2">vs last month</span>
//             </div>

//             {/* Chart container */}
//             <div className="mb-4">
//               <div className="h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={distribution}
//                     barCategoryGap={8}
//                     margin={{
//                       top: 0,
//                       right: 0,
//                       left: 0,
//                       bottom: 0,
//                     }}
//                   >
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{
//                         fontSize: "12px",
//                         fill: "var(--text-tertiary)",
//                       }}
//                       height={32}
//                       dy={10}
//                     />
//                     <YAxis 
//                       allowDecimals={false} 
//                       tick={{ fill: '#6b7280' }}
//                       axisLine={false}
//                     />
//                     <Tooltip
//                       content={<CustomTooltip />}
//                       cursor={false}
//                     />
//                     <Bar
//                       dataKey="count"
//                       fill="#3b82f6"
//                       fillOpacity={0.6}
//                       activeBar={{
//                         fill: "#00b512",
//                         fillOpacity: 1,
//                       }}
//                       radius={4}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>

//           {/* Pie Chart */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">Ratings Proportion</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={distribution.filter(d => d.count > 0)}
//                   dataKey="count"
//                   nameKey="rating"
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={100}
//                   paddingAngle={2}
//                   label={({ name, percent }) => 
//                     `${name}: ${(percent * 100).toFixed(0)}%`
//                   }
//                   labelLine={false}
//                 >
//                   {distribution.map((entry, index) => (
//                     <Cell 
//                       key={`cell-${index}`} 
//                       fill={COLORS[index % COLORS.length]} 
//                       stroke="#fff"
//                       strokeWidth={2}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip 
//                   formatter={(value, name) => [`${value} clients`, name]}
//                   contentStyle={{ 
//                     borderRadius: '8px', 
//                     border: '1px solid #e5e7eb',
//                     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                   }}
//                 />
//                 <Legend 
//                   layout="vertical" 
//                   verticalAlign="middle" 
//                   align="right"
//                   wrapperStyle={{ paddingLeft: '20px' }}
//                 />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </Card>

//       {/* Client Ratings Table */}
//       <Card title="Rate Clients" className="p-6">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-surface2">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
//                   Client
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
//                   Rating
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-surface1 divide-y divide-gray-200">
//               {currentClients.map((client) => (
//                 <tr key={client.id} className="hover:bg-surface2 transition-colors">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="h-10 w-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
//                         <span className="font-medium text-primary">
//                           {client.name.charAt(0).toUpperCase()}
//                         </span>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-primary">{client.name}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-secondary">{client.email || 'No email'}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex gap-1">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <button
//                             key={star}
//                             onClick={() => setClientRating(client.id, star)}
//                             className={`text-xl transition-transform hover:scale-110 ${
//                               (client as ClientWithRating).rating && (client as ClientWithRating).rating! >= star
//                                 ? 'text-yellow-400'
//                                 : 'text-gray-300'
//                             }`}
//                           >
//                             ★
//                           </button>
//                         ))}
//                       </div>
//                       {(client as ClientWithRating).rating && (
//                         <span className="ml-2 text-sm font-medium text-primary">
//                           ({(client as ClientWithRating).rating}/5)
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">
//                     {(client as ClientWithRating).rating ? (
//                       <button
//                         onClick={() => setClientRating(client.id, 0)}
//                         className="text-red-500 hover:text-red-700 text-sm font-medium"
//                       >
//                         Clear Rating
//                       </button>
//                     ) : (
//                       <span className="text-gray-400">Not rated</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         {clients.length > clientsPerPage && (
//           <div className="flex items-center justify-between mt-6 px-4">
//             <div className="text-sm text-secondary">
//               Showing {indexOfFirstClient + 1} to {Math.min(indexOfLastClient, clients.length)} of {clients.length} clients
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className={`px-3 py-1 rounded-md text-sm ${
//                   currentPage === 1 
//                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
//                     : 'bg-surface2 text-primary hover:bg-surface3'
//                 }`}
//               >
//                 Previous
//               </button>
              
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                 <button
//                   key={page}
//                   onClick={() => paginate(page)}
//                   className={`px-3 py-1 rounded-md text-sm ${
//                     currentPage === page
//                       ? 'bg-primary text-white'
//                       : 'bg-surface2 text-primary hover:bg-surface3'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
              
//               <button
//                 onClick={() => paginate(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`px-3 py-1 rounded-md text-sm ${
//                   currentPage === totalPages
//                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                     : 'bg-surface2 text-primary hover:bg-surface3'
//                 }`}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// }