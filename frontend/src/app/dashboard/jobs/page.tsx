'use client';
import { useMemo, useState } from 'react';
import Card from '@/components/UI/Card';
import { useLocalStorage } from '@/lib/useLocalStorage';
import type { Client, Job, Staff } from '@/lib/types';
import { nanoid } from '../clients/utils';

function timeToMinutes(t: string) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
function overlap(a: Job, b: Job) {
  if (a.date !== b.date) return false;
  if (a.staffId !== b.staffId) return false;
  return (
    timeToMinutes(a.start) < timeToMinutes(b.end) &&
    timeToMinutes(b.start) < timeToMinutes(a.end)
  );
}

export default function JobsPage() {
  const [clients] = useLocalStorage<Client[]>('clients', []);
  const [team] = useLocalStorage<Staff[]>('team', []);
  const [jobs, setJobs, hydrated] = useLocalStorage<Job[]>('jobs', []);

  const [form, setForm] = useState<Partial<Job>>({});
  const [error, setError] = useState<string>('');

  const addJob = () => {
    setError('');
    if (
      !form.title ||
      !form.clientId ||
      !form.staffId ||
      !form.date ||
      !form.start ||
      !form.end
    ) {
      setError('Please fill all fields.');
      return;
    }
    const j: Job = {
      id: nanoid(),
      title: form.title,
      clientId: form.clientId,
      staffId: form.staffId,
      date: form.date,
      start: form.start,
      end: form.end,
      notes: form.notes,
      status: 'Pending',
    };
    if (jobs.some((existing) => overlap(existing, j))) {
      setError('Conflict detected: staff has another job in this time range.');
      return;
    }
    setJobs([j, ...jobs]);
    setForm({});
  };

  const markCompleted = (id: string) =>
    setJobs(jobs.map((j) => (j.id === id ? { ...j, status: 'Completed' } : j)));

  const clientName = (id: string) =>
    clients.find((c) => c.id === id)?.name ?? 'Unknown';
  const staffName = (id: string) =>
    team.find((s) => s.id === id)?.name ?? 'Unknown';

  const byDate = useMemo(() => {
    const map: Record<string, Job[]> = {};
    jobs.forEach((j) => {
      (map[j.date] ??= []).push(j);
    });
    Object.values(map).forEach((arr) =>
      arr.sort((a, b) => a.start.localeCompare(b.start))
    );
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
  }, [jobs]);

  const remove = (id: string) => setJobs(jobs.filter((j) => j.id !== id));

  if (!hydrated) return <div>Loading jobs...</div>;

  return (
    <div className="space-y-4 p-4 lg:p-6">
      <h1 className="text-xl lg:text-2xl font-semibold">Job Scheduling</h1>

      {/* Create Job Form */}
      <Card title="Create Job">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <input
              className="input w-full"
              placeholder="Title"
              value={form.title ?? ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <select
            className="input w-full"
            value={form.clientId ?? ''}
            onChange={(e) => setForm({ ...form, clientId: e.target.value })}
          >
            <option value="">Select Client</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            className="input w-full"
            value={form.staffId ?? ''}
            onChange={(e) => setForm({ ...form, staffId: e.target.value })}
          >
            <option value="">Assign Staff</option>
            {team.filter((t) => t.available).map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <input
            className="input w-full"
            type="date"
            value={form.date ?? ''}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            className="input w-full"
            type="time"
            value={form.start ?? ''}
            onChange={(e) => setForm({ ...form, start: e.target.value })}
          />
          <input
            className="input w-full"
            type="time"
            value={form.end ?? ''}
            onChange={(e) => setForm({ ...form, end: e.target.value })}
          />
          <div className="sm:col-span-2 lg:col-span-3">
            <input
              className="input w-full"
              placeholder="Notes (optional)"
              value={form.notes ?? ''}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <button className="btn-primary w-full sm:w-auto" onClick={addJob}>
              Add Job
            </button>
            {error && <span className="text-sm text-red-600">{error}</span>}
          </div>
        </div>
      </Card>

      {/* Schedule */}
      <Card title="Schedule">
        <div className="space-y-6">
          {byDate.map(([date, list]) => (
            <div key={date} className="space-y-2">
              <div className="text-sm font-semibold">{date}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {list.map((j) => (
                  <div
                    key={j.id}
                    className="border rounded-xl p-3 bg-white shadow"
                  >
                    <div className="font-medium text-sm lg:text-base">{j.title}</div>
                    <div className="text-xs text-gray-600">
                      {j.start}–{j.end} • {clientName(j.clientId)} •{' '}
                      {staffName(j.staffId)}
                    </div>
                    {j.notes && <div className="text-sm mt-1">{j.notes}</div>}

                    {/* Status + Actions */}
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                      <span
                        className={`badge px-2 py-1 text-xs ${
                          j.status === 'Completed'
                            ? 'bg-green-500 text-white'
                            : 'bg-yellow-500 text-white'
                        }`}
                      >
                        {j.status}
                      </span>
                      <div className="flex gap-2 ml-auto">
                        {j.status !== 'Completed' && (
                          <button
                            className="btn-primary text-xs py-1 px-2"
                            onClick={() => markCompleted(j.id)}
                          >
                            Complete
                          </button>
                        )}
                        <button
                          className="btn-danger text-xs py-1 px-2"
                          onClick={() => remove(j.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {byDate.length === 0 && (
            <div className="text-gray-500">No jobs scheduled.</div>
          )}
        </div>
      </Card>
    </div>
  );
}