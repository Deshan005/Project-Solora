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

  return (
    <div className="space-y-4 p-4 lg:p-6">
      <h1 className="text-xl lg:text-2xl font-semibold">Job Notes</h1>

      {/* Add Job Note */}
      <Card title="Add Note">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <select
              className="input w-full"
              value={form.jobId ?? ""}
              onChange={(e) => setForm({ ...form, jobId: e.target.value })}
            >
              <option value="">Select Job</option>
              {isMounted &&
                jobs.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title} ({j.date})
                  </option>
                ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <textarea
              className="input w-full"
              rows={3}
              placeholder="Enter completion notes..."
              value={form.notes ?? ""}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <div className="sm:col-span-2">
            <input
              type="file"
              accept="image/*"
              className="w-full"
              multiple
              onChange={handlePhotos}
            />
          </div>

          {previews.length > 0 && (
            <div className="sm:col-span-2 flex flex-wrap gap-2">
              {previews.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Preview"
                  className="w-20 h-20 lg:w-28 lg:h-28 object-cover rounded-lg border"
                />
              ))}
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
            <span className="text-sm text-red-600 sm:col-span-2">{error}</span>
          )}
        </div>
      </Card>

      {/* Job Notes List */}
      <Card title="Notes">
        <div className="space-y-3">
          {notes.map((n) => (
            <div
              key={n.id}
              className="p-3 border border-color rounded-lg flex flex-col sm:flex-row justify-between items-start gap-3"
            >
              <div className="flex-1">
                <p className="text-sm font-medium">{jobTitle(n.jobId)}</p>
                <p className="text-xs text-secondary">
                  {new Date(n.createdAt).toLocaleString()}
                </p>
                <p className="mt-2 text-sm">{n.notes}</p>
                {n.photos && n.photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {n.photos.map((p, idx) => (
                      <img
                        key={idx}
                        src={p}
                        alt="Job note"
                        className="w-20 h-20 lg:w-28 lg:h-28 object-cover rounded border"
                      />
                    ))}
                  </div>
                )}
              </div>
              <button className="btn-danger text-xs self-end sm:self-auto" onClick={() => remove(n.id)}>
                Delete
              </button>
            </div>
          ))}
          {notes.length === 0 && (
            <p className="text-sm text-secondary">No notes yet.</p>
          )}
        </div>
      </Card>
    </div>
  );
}