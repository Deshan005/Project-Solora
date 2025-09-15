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
  const [success, setSuccess] = useState<string>('');
  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({});

  const toggleDate = (date: string) => {
    setExpandedDates(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  const addJob = () => {
    setError('');
    setSuccess('');
    if (
      !form.title ||
      !form.clientId ||
      !form.staffId ||
      !form.date ||
      !form.start ||
      !form.end
    ) {
      setError('Please fill all required fields.');
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
    setSuccess('Job successfully scheduled!');
  };

  const markCompleted = (id: string) => {
    setJobs(jobs.map((j) => (j.id === id ? { ...j, status: 'Completed' } : j)));
    setSuccess('Job marked as completed!');
  };

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

  const remove = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
    setSuccess('Job deleted successfully!');
  };

  if (!hydrated) return <div className="flex justify-center items-center h-64">Loading jobs...</div>;

  return (
    <div className="space-y-6 p-4 lg:p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary">Job Scheduling</h1>
        <div className="text-sm text-secondary">
          Total Jobs: <span className="font-semibold">{jobs.length}</span>
        </div>
      </div>

      {/* Create Job Form */}
      <Card title="Schedule New Job" className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-secondary mb-1">Job Title *</label>
            <input
              className="input w-full"
              placeholder="e.g., Website Design, Consultation"
              value={form.title ?? ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Client *</label>
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
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Staff *</label>
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
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Date *</label>
            <input
              className="input w-full"
              type="date"
              value={form.date ?? ''}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Start Time *</label>
            <input
              className="input w-full"
              type="time"
              value={form.start ?? ''}
              onChange={(e) => setForm({ ...form, start: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">End Time *</label>
            <input
              className="input w-full"
              type="time"
              value={form.end ?? ''}
              onChange={(e) => setForm({ ...form, end: e.target.value })}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-secondary mb-1">Notes (optional)</label>
            <input
              className="input w-full"
              placeholder="Additional details about this job"
              value={form.notes ?? ''}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="btn-primary w-full sm:w-auto px-6 py-2" onClick={addJob}>
            Schedule Job
          </button>
          
          {error && (
            <div className="flex-1 p-3 bg-red-100 border border-red-300 rounded-lg dark:bg-red-900/20 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="flex-1 p-3 bg-green-100 border border-green-300 rounded-lg dark:bg-green-900/20 dark:border-green-800">
              <p className="text-green-600 dark:text-green-400 text-sm">{success}</p>
            </div>
          )}
        </div>
      </Card>

      {/* Schedule */}
      <Card title="Job Schedule" className="p-6">
        {byDate.length > 0 ? (
          <div className="space-y-4">
            {byDate.map(([date, list]) => (
              <div key={date} className="space-y-3">
                <div 
                  className="date-header"
                  onClick={() => toggleDate(date)}
                >
                  <div className="text-lg font-semibold text-primary">
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="job-count-badge">
                      {list.length} job{list.length !== 1 ? 's' : ''}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-secondary transition-transform ${expandedDates[date] ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedDates[date] && (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ml-2 pl-2 border-l-2 border-border-color">
                    {list.map((j) => (
                      <div
                        key={j.id}
                        className={`job-card ${j.status === 'Completed' ? 'completed' : ''}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-primary dark:text-white">{j.title}</div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              j.status === 'Completed'
                                ? 'bg-green-500 text-white'
                                : 'bg-yellow-500 text-white'
                            }`}
                          >
                            {j.status}
                          </span>
                        </div>
                        
                        <div className="text-sm text-secondary dark:text-gray-300 mb-3">
                          <div className="flex items-center gap-1 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {j.start} – {j.end}
                          </div>
                          <div className="flex items-center gap-1 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {staffName(j.staffId)}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {clientName(j.clientId)}
                          </div>
                        </div>
                        
                        {j.notes && (
                          <div className="text-sm text-secondary dark:text-gray-300 bg-surface2 dark:bg-surface3 p-2 rounded-lg mb-3">
                            {j.notes}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          {j.status !== 'Completed' && (
                            <button
                              className="btn-primary text-xs py-2 px-3 flex-1 flex items-center justify-center gap-1"
                              onClick={() => markCompleted(j.id)}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Complete
                            </button>
                          )}
                          <button
                            className="btn-danger text-xs py-2 px-3 flex-1 flex items-center justify-center gap-1"
                            onClick={() => remove(j.id)}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-secondary dark:text-gray-400">
            <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg dark:text-white">No jobs scheduled yet</p>
            <p className="text-sm mt-1">Create your first job using the form above</p>
          </div>
        )}
      </Card>
    </div>
  );
}