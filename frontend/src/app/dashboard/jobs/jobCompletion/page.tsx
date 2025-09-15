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

  if (!hydrated) return <div className="p-6 text-center">Loading job completion data...</div>;

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
  const completionRate = filteredJobs.length > 0 ? (completed / filteredJobs.length) * 100 : 0;

  const pieData = [
    { name: 'Completed', value: completed, color: '#22c55e' },
    { name: 'Pending', value: pending, color: '#facc15' },
  ];

  // 📊 Aggregate jobs by month for bar chart
  const monthlyDataMap: Record<
    string,
    { completed: number; pending: number; total: number }
  > = {};

  jobs.forEach((job) => {
    if (!job.date) return;
    const month = job.date.slice(0, 7); // YYYY-MM
    if (!monthlyDataMap[month]) {
      monthlyDataMap[month] = { completed: 0, pending: 0, total: 0 };
    }
    monthlyDataMap[month].total++;
    if (job.status === 'Completed') {
      monthlyDataMap[month].completed++;
    } else {
      monthlyDataMap[month].pending++;
    }
  });

  // Convert to array for recharts and sort by month
  const monthlyData = Object.entries(monthlyDataMap)
    .map(([month, data]) => ({
      month: new Date(month).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      ...data,
    }))
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  // Custom tooltip for bar chart
  const CustomBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface2 p-3 rounded-lg border border-color shadow-md">
          <p className="font-semibold text-primary">{label}</p>
          <p className="text-sm text-green-500">Completed: {payload[0].value}</p>
          <p className="text-sm text-yellow-500">Pending: {payload[1].value}</p>
          <p className="text-sm text-primary">Total: {payload[0].value + payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for pie chart
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface2 p-3 rounded-lg border border-color shadow-md">
          <p className="font-semibold text-primary">{payload[0].name}</p>
          <p className="text-sm text-primary">{payload[0].value} jobs</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 p-4 lg:p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary">Job Completion Overview</h1>
        
        {/* Filter Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-primary">Time Filter:</label>
          <select
            className="input w-full sm:w-40 bg-surface2"
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'month')}
          >
            <option value="all">All Time</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-surface2 p-4 rounded-lg border border-color shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <span className="text-green-600 text-xl">✅</span>
            </div>
            <div>
              <p className="text-sm text-secondary">Completed</p>
              <p className="text-2xl font-bold text-primary">{completed}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface2 p-4 rounded-lg border border-color shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-full">
              <span className="text-yellow-600 text-xl">⏳</span>
            </div>
            <div>
              <p className="text-sm text-secondary">Pending</p>
              <p className="text-2xl font-bold text-primary">{pending}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface2 p-4 rounded-lg border border-color shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-xl">📊</span>
            </div>
            <div>
              <p className="text-sm text-secondary">Completion Rate</p>
              <p className="text-2xl font-bold text-primary">{completionRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart (Current Filter View) */}
      <Card title={`Job Status (${filter === 'month' ? 'This Month' : 'All Time'})`}>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Chart */}
          <div className="w-full lg:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => <span className="text-sm text-primary">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Details */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Summary</h3>
              <p className="text-sm text-secondary">
                {filter === 'month' ? 'This month' : 'Overall'}, you've completed <span className="font-semibold text-green-500">{completed}</span> out of <span className="font-semibold text-primary">{filteredJobs.length}</span> jobs.
              </p>
            </div>
            
            <div className="space-y-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-surface3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-primary">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.value} jobs</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2 border-t border-color">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary">Total Jobs</span>
                <span className="text-lg font-bold text-primary">{filteredJobs.length}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Bar Chart (Trends Over Time) */}
      <Card title='Monthly Trends'>
        <div className="w-full h-64 sm:h-72 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barCategoryGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis 
                dataKey="month" 
                angle={monthlyData.length > 6 ? -45 : 0}
                textAnchor={monthlyData.length > 6 ? "end" : "middle"}
                height={60}
                tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }}
                interval={0}
              />
              <YAxis 
                allowDecimals={false}
                tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip content={<CustomBarTooltip />} cursor={false} />
              <Legend 
                formatter={(value) => <span className="text-sm text-primary">{value}</span>}
              />
              <Bar 
                dataKey="completed" 
                name="Completed" 
                fill="#22c55e" 
                fillOpacity={0.7}
                radius={[4, 4, 0, 0]}
                activeBar={{
                  fill: "#16a34a",
                  fillOpacity: 1,
                }}
              />
              <Bar 
                dataKey="pending" 
                name="Pending" 
                fill="#facc15" 
                fillOpacity={0.7}
                radius={[4, 4, 0, 0]}
                activeBar={{
                  fill: "#eab308",
                  fillOpacity: 1,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-tertiary mt-2 text-center">
          Showing data for {monthlyData.length} months
        </p>
      </Card>

      {/* Jobs List for Small Screens */}
      <Card title="Recent Jobs" className="block lg:hidden">
        <div className="space-y-3">
          {filteredJobs.slice(0, 5).map((job) => (
            <div key={job.id} className="p-3 border border-color rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-primary">{job.title}</p>
                  <p className="text-xs text-secondary">{job.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  job.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {job.status}
                </span>
              </div>
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-sm text-secondary text-center py-4">No jobs found</p>
          )}
          {filteredJobs.length > 5 && (
            <p className="text-sm text-tertiary text-center pt-2">
              Showing 5 of {filteredJobs.length} jobs
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}