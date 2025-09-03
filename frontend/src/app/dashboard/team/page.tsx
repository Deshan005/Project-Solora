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
