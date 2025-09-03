'use client';
import { useMemo, useState } from 'react';
import Card from '@/components/UI/Card';
import { useLocalStorage } from '@/lib/useLocalStorage';
import type { Client, Invoice, Job } from '@/lib/types';
import { nanoid } from '../clients/utils';

export default function InvoicesPage() {
  const [clients] = useLocalStorage<Client[]>('clients', []);
  const [jobs] = useLocalStorage<Job[]>('jobs', []);
  const [invoices, setInvoices] = useLocalStorage<Invoice[]>('invoices', []);

  const [form, setForm] = useState<Partial<Invoice>>({ status: 'Unpaid' as const });
  const [error, setError] = useState<string>('');

  const add = () => {
    setError('');
    if (!form.clientId || form.amount === undefined || !form.issuedOn || !form.dueOn) {
      setError('Please fill all required fields.');
      return;
    }

    setInvoices([
      {
        id: nanoid(),
        clientId: form.clientId,
        jobId: form.jobId,
        amount: Number(form.amount),
        status: form.status ?? 'Unpaid',
        issuedOn: form.issuedOn!,
        dueOn: form.dueOn!,
      },
      ...invoices,
    ]);
    setForm({ status: 'Unpaid' });
  };

  const markPaid = (id: string) =>
    setInvoices(invoices.map(inv => (inv.id === id ? { ...inv, status: 'Paid' } : inv)));

  const remove = (id: string) => setInvoices(invoices.filter(i => i.id !== id));

  const clientName = (id: string) => clients.find(c => c.id === id)?.name ?? 'Unknown';

  const totals = useMemo(() => {
    const paid = invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
    const unpaid = invoices.filter(i => i.status === 'Unpaid').reduce((s, i) => s + i.amount, 0);
    return { paid, unpaid, all: paid + unpaid };
  }, [invoices]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Invoices</h1>

      {/* Totals */}
      <div className="grid sm:grid-cols-3 gap-3">
        <Card title="Total" className="bg-surface2">
          <div className="text-sm text-secondary">Total</div>
          <div className="text-2xl font-semibold">Rs. {totals.all.toLocaleString()}</div>
        </Card>
        <Card title="Total" className="bg-surface2">
          <div className="text-sm text-secondary">Unpaid</div>
          <div className="text-2xl font-semibold">Rs. {totals.unpaid.toLocaleString()}</div>
        </Card>
        <Card title="Total" className="bg-surface2">
          <div className="text-sm text-secondary">Paid</div>
          <div className="text-2xl font-semibold">Rs. {totals.paid.toLocaleString()}</div>
        </Card>
      </div>

      {/* Create Invoice */}
      <Card title="Create Invoice">
        <div className="grid sm:grid-cols-3 gap-3">
          <select
            className="input"
            value={form.clientId ?? ''}
            onChange={e => setForm({ ...form, clientId: e.target.value })}
          >
            <option value="">Select Client</option>
            {clients.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            className="input"
            value={form.jobId ?? ''}
            onChange={e => setForm({ ...form, jobId: e.target.value })}
          >
            <option value="">Link Job (optional)</option>
            {jobs.map(j => (
              <option key={j.id} value={j.id}>
                {j.title} ({j.date})
              </option>
            ))}
          </select>

          <input
            className="input"
            type="number"
            placeholder="Amount"
            value={form.amount ?? ''}
            onChange={e => setForm({ ...form, amount: Number(e.target.value) })}
          />

          <input
            className="input"
            type="date"
            value={form.issuedOn ?? ''}
            onChange={e => setForm({ ...form, issuedOn: e.target.value })}
          />

          <input
            className="input"
            type="date"
            value={form.dueOn ?? ''}
            onChange={e => setForm({ ...form, dueOn: e.target.value })}
          />

          <button className="btn-primary" onClick={add}>
            Add
          </button>

          {error && (
            <span className="text-sm text-red-600 sm:col-span-3">{error}</span>
          )}
        </div>
      </Card>

      {/* Invoices Table */}
      <Card title="Invoices">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-color">
                <th className="py-2 pr-3">Client</th>
                <th className="py-2 pr-3">Amount</th>
                <th className="py-2 pr-3">Issued</th>
                <th className="py-2 pr-3">Due</th>
                <th className="py-2 pr-3">Status</th>
                <th className="py-2 pr-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(i => (
                <tr key={i.id} className="border-b border-color last:border-0">
                  <td className="py-2 pr-3">{clientName(i.clientId)}</td>
                  <td className="py-2 pr-3">Rs. {i.amount.toLocaleString()}</td>
                  <td className="py-2 pr-3">{i.issuedOn}</td>
                  <td className="py-2 pr-3">{i.dueOn}</td>
                  <td className="py-2 pr-3">
                    <span
                      className={`badge ${
                        i.status === 'Paid'
                          ? 'bg-green-500 text-white border-green-700'
                          : 'bg-red-500 text-white border-red-700'
                      }`}
                    >
                      {i.status}
                    </span>
                  </td>
                  <td className="py-2 pr-3 text-right">
                    <div className="flex gap-2 justify-end">
                      {i.status === 'Unpaid' && (
                        <button className="btn" onClick={() => markPaid(i.id)}>
                          Mark Paid
                        </button>
                      )}
                      <button className="btn-danger" onClick={() => remove(i.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {invoices.length === 0 && (
                <tr>
                  <td className="py-6 text-center text-secondary" colSpan={6}>
                    No invoices yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
