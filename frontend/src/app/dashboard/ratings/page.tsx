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

      {/* Individual Ratings */}
      <div className="space-y-4">
        {clients.map((client) => (
          <Card key={client.id}>
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
    </div>
  );
}
