'use client';

import { useMemo, useState } from 'react';
import Card from '@/components/UI/Card';
import { useLocalStorage } from '@/lib/useLocalStorage';
import type { Client } from '@/lib/types';
import { nanoid } from './utils';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function ClientForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Partial<Client>;
  onSave: (c: Client) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<Client>>(
    initial ?? { joinedDate: new Date().toISOString(), serviceHistory: [] }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.notes) {
      alert('Please fill in all fields');
      return;
    }
    onSave({
      id: form.id ?? nanoid(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      notes: form.notes,
      serviceHistory: form.serviceHistory ?? [],
      joinedDate: form.joinedDate ?? new Date().toISOString(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border border-color rounded-2xl bg-surface2 shadow-theme space-y-3"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          placeholder="Name"
          className="input"
          value={form.name ?? ''}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          type="email"
          className="input"
          value={form.email ?? ''}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Phone"
          className="input"
          value={form.phone ?? ''}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="Notes"
          className="input"
          value={form.notes ?? ''}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-end">
        <button type="submit" className="btn order-2 sm:order-1">
          Save
        </button>
        <button type="button" className="btn order-1 sm:order-2" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function ClientsPage() {
  const [clients, setClients] = useLocalStorage<Client[]>('clients', []);
  const [editing, setEditing] = useState<Client | null>(null);
  const [adding, setAdding] = useState(false);

  const upsert = (c: Client) => {
    setClients((prev) => {
      const i = prev.findIndex((x) => x.id === c.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = c;
        return copy;
      }
      return [c, ...prev];
    });
    setAdding(false);
    setEditing(null);
  };

  const remove = (id: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const rows = useMemo(() => clients, [clients]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <button className="btn sm:ml-auto mt-2 sm:mt-0" onClick={() => setAdding(true)}>
          Add Client
        </button>
      </div>

      {/* Forms */}
      {adding && <ClientForm onSave={upsert} onCancel={() => setAdding(false)} />}
      {editing && <ClientForm initial={editing} onSave={upsert} onCancel={() => setEditing(null)} />}

      {/* Table */}
      <Card title="Client List">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]"> {/* Minimum width to prevent compression */}
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-color">
                  <th className="py-2 pr-3">Name</th>
                  <th className="py-2 pr-3">Email</th>
                  <th className="py-2 pr-3">Phone</th>
                  <th className="py-2 pr-3">Notes</th>
                  <th className="py-2 pr-3">Joined</th>
                  <th className="py-2 pr-3">Service History</th>
                  <th className="py-2 pr-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-color hover:bg-surface3 transition-colors"
                  >
                    <td className="py-2 pr-3 font-medium">{c.name}</td>
                    <td className="py-2 pr-3">{c.email}</td>
                    <td className="py-2 pr-3">{c.phone}</td>
                    <td className="py-2 pr-3 max-w-xs truncate">{c.notes}</td>
                    <td className="py-2 pr-3">
                      {c.joinedDate ? dayjs(c.joinedDate).format('YYYY-MM-DD') : '-'}{' '}
                      <span className="text-secondary text-xs">
                        ({c.joinedDate ? dayjs(c.joinedDate).fromNow() : '-'})
                      </span>
                    </td>
                    <td className="py-2 pr-3">
                      {c.serviceHistory?.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {c.serviceHistory.map((s, idx) => (
                            <span
                              key={idx}
                              className="badge bg-surface3 text-primary-color"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="py-2 pr-3">
                      <div className="flex gap-2 justify-end">
                        <button className="btn" onClick={() => setEditing(c)}>
                          Edit
                        </button>
                        <button className="btn" onClick={() => remove(c.id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td className="py-6 text-center text-secondary" colSpan={7}>
                      No clients yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}