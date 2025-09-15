"use client";

import { useEffect, useState } from "react";
import Card from "@/components/UI/Card";
import { useLocalStorage } from "@/lib/useLocalStorage";
import type { Job } from "@/lib/types";
import { nanoid } from "../../clients/utils";

interface JobNote {
  id: string;
  jobId: string;
  staffId: string;
  notes: string;
  photos?: string[]; // multiple base64 images
  createdAt: string;
}

export default function JobNotesPage() {
  const [jobs] = useLocalStorage<Job[]>("jobs", []);
  const [notes, setNotes] = useLocalStorage<JobNote[]>("jobNotes", []);

  const [form, setForm] = useState<Partial<JobNote>>({});
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    // ensure client-only rendering for localStorage data
    setIsMounted(true);
  }, []);

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews: string[] = [];
    const newPhotos: string[] = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        newPhotos.push(base64);
        newPreviews.push(base64);
        // update state after last file
        if (newPhotos.length === files.length) {
          setForm({ ...form, photos: [...(form.photos ?? []), ...newPhotos] });
          setPreviews([...previews, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const add = () => {
    setError("");
    if (!form.jobId || !form.notes) {
      setError("Please select a job and add notes.");
      return;
    }

    const newNote: JobNote = {
      id: nanoid(),
      jobId: form.jobId,
      staffId: "staff-1", // mock, replace with auth later
      notes: form.notes,
      photos: form.photos ?? [],
      createdAt: new Date().toISOString(), // safe format
    };

    setNotes([newNote, ...notes]);
    setForm({});
    setPreviews([]);
  };

  const cancel = () => {
    setForm({});
    setPreviews([]);
    setError("");
  };

  const remove = (id: string) => setNotes(notes.filter((n) => n.id !== id));

  const jobTitle = (id: string) => jobs.find((j) => j.id === id)?.title ?? "Unknown Job";

  // Group notes by date
  const groupedNotes = notes.reduce((acc, note) => {
    const date = new Date(note.createdAt).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(note);
    return acc;
  }, {} as Record<string, JobNote[]>);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedNotes).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  // Toggle date expansion
  const toggleDate = (date: string) => {
    const newExpandedDates = new Set(expandedDates);
    if (newExpandedDates.has(date)) {
      newExpandedDates.delete(date);
    } else {
      newExpandedDates.add(date);
    }
    setExpandedDates(newExpandedDates);
  };

  // Expand all dates
  const expandAll = () => {
    const allDates = new Set(sortedDates);
    setExpandedDates(allDates);
  };

  // Collapse all dates
  const collapseAll = () => {
    setExpandedDates(new Set());
  };

  return (
    <div className="space-y-4 p-4 lg:p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary">Job Notes</h1>
        <div className="flex gap-2">
          <button 
            className="px-3 py-1.5 rounded-lg text-sm bg-surface2 border border-color hover:bg-surface3 transition-colors"
            onClick={expandAll}
          >
            Expand All
          </button>
          <button 
            className="px-3 py-1.5 rounded-lg text-sm bg-surface2 border border-color hover:bg-surface3 transition-colors"
            onClick={collapseAll}
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Add Job Note */}
      <Card title="Add New Note" className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Select Job</label>
            <select
              className="input w-full"
              value={form.jobId ?? ""}
              onChange={(e) => setForm({ ...form, jobId: e.target.value })}
            >
              <option value="">Select a job</option>
              {isMounted &&
                jobs.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title} ({j.date})
                  </option>
                ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              className="input w-full"
              rows={4}
              placeholder="Enter completion notes..."
              value={form.notes ?? ""}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Add Photos (Optional)</label>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <input
                type="file"
                accept="image/*"
                className="w-full sm:flex-1"
                multiple
                onChange={handlePhotos}
              />
              {previews.length > 0 && (
                <button 
                  type="button"
                  className="btn-danger text-xs px-3 py-2"
                  onClick={() => {
                    setPreviews([]);
                    setForm({...form, photos: []});
                  }}
                >
                  Clear Photos
                </button>
              )}
            </div>
          </div>

          {previews.length > 0 && (
            <div className="md:col-span-2">
              <p className="text-sm text-secondary mb-2">Photo Previews:</p>
              <div className="flex flex-wrap gap-3">
                {previews.map((src, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={src}
                      alt="Preview"
                      className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg border shadow-sm"
                    />
                    <button 
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => {
                        const newPreviews = [...previews];
                        newPreviews.splice(idx, 1);
                        setPreviews(newPreviews);
                        setForm({...form, photos: newPreviews});
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-2">
            <button className="btn-primary w-full sm:w-auto" onClick={add}>
              Add Note
            </button>
            <button className="btn w-full sm:w-auto" onClick={cancel}>
              Cancel
            </button>
          </div>

          {error && (
            <div className="md:col-span-2 mt-2 p-3 bg-red-100 border border-red-300 rounded-lg">
              <span className="text-sm text-red-600">{error}</span>
            </div>
          )}
        </div>
      </Card>

      {/* Job Notes List */}
      <Card title="Saved Notes">
        <div className="space-y-4">
          {sortedDates.length > 0 ? (
            sortedDates.map((date) => (
              <div key={date} className="border-color rounded-lg overflow-hidden shadow-sm">
                <div 
                  className="date-header flex justify-between items-center p-4 bg-surface2 cursor-pointer transition-colors hover:bg-surface3"
                  onClick={() => toggleDate(date)}
                >
                  <h3 className="font-semibold text-primary">{date}</h3>
                  <div className="flex items-center gap-3">
                    <span className="job-count-badge bg-primary text-white px-2.5 py-1 rounded-full text-xs font-medium">
                      {groupedNotes[date].length} note{groupedNotes[date].length !== 1 ? 's' : ''}
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${expandedDates.has(date) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedDates.has(date) && (
                  <div className="p-4 space-y-4 bg-surface1">
                    {groupedNotes[date].map((n) => (
                      <div
                        key={n.id}
                        className="p-4 border border-color rounded-lg bg-surface2 shadow-sm"
                      >
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                              <p className="text-lg font-semibold text-primary">{jobTitle(n.jobId)}</p>
                              <p className="text-sm text-secondary whitespace-nowrap">
                                {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                            <p className="text-sm text-primary mt-2 whitespace-pre-wrap">{n.notes}</p>
                            {n.photos && n.photos.length > 0 && (
                              <div className="mt-4">
                                <p className="text-sm font-medium text-secondary mb-2">Attached Photos:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                  {n.photos.map((p, idx) => (
                                    <div key={idx} className="relative group">
                                      <img
                                        src={p}
                                        alt="Job note"
                                        className="w-full h-32 object-cover rounded-lg border shadow-sm"
                                      />
                                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg"></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <button 
                            className="btn-danger text-xs px-3 py-2 self-start lg:self-auto"
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this note?")) {
                                remove(n.id);
                              }
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="text-secondary mb-2">No notes yet.</div>
              <p className="text-sm text-tertiary">Add your first job note using the form above.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}