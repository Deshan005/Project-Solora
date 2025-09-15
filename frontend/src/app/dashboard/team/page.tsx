'use client';
import { useState } from 'react';
import Card from '@/components/UI/Card';
import { useLocalStorage } from '@/lib/useLocalStorage';
import type { Staff } from '@/lib/types';
import { nanoid } from '../clients/utils';

export default function TeamPage() {
  const [team, setTeam] = useLocalStorage<Staff[]>('team', []);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const add = () => {
    if (!name.trim()) return;
    setTeam([{ id: nanoid(), name, role, available: true }, ...team]);
    setName(''); setRole('');
  };

  const toggleAvailability = (id: string) => {
    setTeam(team.map(s => s.id === id ? { ...s, available: !s.available } : s));
  };

  const remove = (id: string) => setTeam(team.filter(s => s.id !== id));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Team</h1>
      <Card title="Add Staff">
        <div className="grid sm:grid-cols-3 gap-3">
          <input className="input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input className="input" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
          <button className="btn-primary" onClick={add}>Add</button>
        </div>
      </Card>

      <Card title="Team Members">
        <div className="grid sm:grid-cols-2 gap-3">
          {team.map(s => (
            <div key={s.id} className="border rounded-xl p-3 flex items-center gap-2">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-gray-600">{s.role}</div>
              </div>
              <span className={`badge ml-auto ${s.available ? 'bg-green-50 border-green-200' : 'bg-gray-100'}`}>
                {s.available ? 'Available' : 'Unavailable'}
              </span>
              <button className="btn" onClick={() => toggleAvailability(s.id)}>Toggle</button>
              <button className="btn-danger" onClick={() => remove(s.id)}>Remove</button>
            </div>
          ))}
          {team.length === 0 && <div className="text-gray-500">No team members yet.</div>}
        </div>
      </Card>
    </div>
  );
}




// 'use client';
// import { useState } from 'react';
// import Card from '@/components/UI/Card';
// import { useLocalStorage } from '@/lib/useLocalStorage';
// import type { Staff } from '@/lib/types';
// import { nanoid } from '../clients/utils';

// export default function TeamPage() {
//   const [team, setTeam] = useLocalStorage<Staff[]>('team', []);
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [isAdding, setIsAdding] = useState(false);

//   const add = () => {
//     if (!name.trim()) return;
//     setTeam([{ id: nanoid(), name, role, available: true }, ...team]);
//     setName(''); 
//     setRole('');
//     setIsAdding(false);
//   };

//   const toggleAvailability = (id: string) => {
//     setTeam(team.map(s => s.id === id ? { ...s, available: !s.available } : s));
//   };

//   const remove = (id: string) => {
//     if (confirm("Are you sure you want to remove this team member?")) {
//       setTeam(team.filter(s => s.id !== id));
//     }
//   };

//   return (
//     <div className="space-y-6 p-4 lg:p-6 max-w-6xl mx-auto">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-2xl lg:text-3xl font-bold text-primary">Team Management</h1>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-secondary bg-surface2 px-3 py-1 rounded-full">
//             {team.length} team member{team.length !== 1 ? 's' : ''}
//           </span>
//         </div>
//       </div>

//       <Card title="Add Team Member" className="mb-6">
//         {!isAdding ? (
//           <button 
//             className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
//             onClick={() => setIsAdding(true)}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//             </svg>
//             Add New Team Member
//           </button>
//         ) : (
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-primary mb-1">Name</label>
//                 <input 
//                   className="input" 
//                   placeholder="Enter full name" 
//                   value={name} 
//                   onChange={e => setName(e.target.value)}
//                   autoFocus
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-primary mb-1">Role</label>
//                 <input 
//                   className="input" 
//                   placeholder="e.g. Technician, Manager" 
//                   value={role} 
//                   onChange={e => setRole(e.target.value)} 
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2 pt-2">
//               <button className="btn-primary flex-1 sm:flex-initial" onClick={add}>
//                 Add Team Member
//               </button>
//               <button 
//                 className="btn flex-1 sm:flex-initial" 
//                 onClick={() => {
//                   setIsAdding(false);
//                   setName('');
//                   setRole('');
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </Card>

//       <Card title="Team Members">
//         {team.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {team.map(s => (
//               <div key={s.id} className="border border-color rounded-xl p-4 flex flex-col transition-all hover:shadow-md">
//                 <div className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                     <span className="text-lg font-semibold text-primary">
//                       {s.name.split(' ').map(n => n[0]).join('').toUpperCase()}
//                     </span>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="font-semibold text-primary truncate">{s.name}</div>
//                     <div className="text-sm text-secondary mt-1">{s.role || <span className="italic">No role specified</span>}</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between mt-4 pt-3 border-t border-color">
//                   <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
//                     s.available 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-gray-100 text-gray-800'
//                   }`}>
//                     <span className={`h-2 w-2 rounded-full ${s.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
//                     {s.available ? 'Available' : 'Unavailable'}
//                   </span>
                  
//                   <div className="flex gap-2">
//                     <button 
//                       className="p-1.5 rounded-md hover:bg-surface2 transition-colors"
//                       onClick={() => toggleAvailability(s.id)}
//                       title="Toggle Availability"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                       </svg>
//                     </button>
//                     <button 
//                       className="p-1.5 rounded-md hover:bg-red-50 transition-colors"
//                       onClick={() => remove(s.id)}
//                       title="Remove Team Member"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-8">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <h3 className="mt-4 text-lg font-medium text-primary">No team members yet</h3>
//             <p className="mt-2 text-sm text-secondary">
//               Get started by adding your first team member.
//             </p>
//             <button 
//               className="mt-4 btn-primary"
//               onClick={() => setIsAdding(true)}
//             >
//               Add Team Member
//             </button>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// }