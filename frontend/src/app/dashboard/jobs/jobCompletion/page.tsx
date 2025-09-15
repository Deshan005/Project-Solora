'use client';
import { useLocalStorage } from '@/lib/useLocalStorage';
import type { Job } from '@/lib/types';
import Card from '@/components/UI/Card';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { useState } from 'react';

export default function JobCompletionPage() {
  const [jobs, , hydrated] = useLocalStorage<Job[]>('jobs', []);
  const [filter, setFilter] = useState<'all' | 'month'>('all');

  if (!hydrated) return <div>Loading job completion...</div>;

  // Get current month (YYYY-MM)
  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7); // "2025-09"

  // Apply filter
  const filteredJobs =
    filter === 'month'
      ? jobs.filter((j) => j.date?.startsWith(currentMonth))
      : jobs;

  const completed = filteredJobs.filter((j) => j.status === 'Completed').length;
  const pending = filteredJobs.filter((j) => j.status !== 'Completed').length;

  const pieData = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];

  const COLORS = ['#22c55e', '#facc15']; // green + yellow

  // 📊 Aggregate jobs by month for bar chart
  const monthlyDataMap: Record<
    string,
    { completed: number; pending: number }
  > = {};

  jobs.forEach((job) => {
    if (!job.date) return;
    const month = job.date.slice(0, 7); // YYYY-MM
    if (!monthlyDataMap[month]) {
      monthlyDataMap[month] = { completed: 0, pending: 0 };
    }
    if (job.status === 'Completed') {
      monthlyDataMap[month].completed++;
    } else {
      monthlyDataMap[month].pending++;
    }
  });

  // Convert to array for recharts
  const monthlyData = Object.entries(monthlyDataMap).map(([month, data]) => ({
    month,
    ...data,
  }));

  return (
    <div className="space-y-6 p-4 lg:p-6">
      <h1 className="text-xl lg:text-2xl font-semibold">Job Completion Overview</h1>

      {/* Filter Dropdown */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Filter:</label>
        <select
          className="input w-full sm:w-40"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'month')}
        >
          <option value="all">All Jobs</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* Pie Chart (Current Filter View) */}
      <Card title='Chart View'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Stats */}
          <div className="space-y-2 order-2 md:order-1">
            <p className="text-base lg:text-lg">
              ✅ Completed Jobs:{' '}
              <span className="font-semibold">{completed}</span>
            </p>
            <p className="text-base lg:text-lg">
              ⏳ Pending Jobs:{' '}
              <span className="font-semibold">{pending}</span>
            </p>
            <p className="text-base lg:text-lg">
              📊 Total Jobs:{' '}
              <span className="font-semibold">{filteredJobs.length}</span>
            </p>
          </div>

          {/* Chart */}
          <div className="order-1 md:order-2">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Bar Chart (Trends Over Time) */}
      <Card title='Monthly Trends'>
        <div className="w-full h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#22c55e" name="Completed" />
              <Bar dataKey="pending" fill="#facc15" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}