"use client";

import { useMemo, useState } from "react";
import Card from "@/components/UI/Card";
import { useLocalStorage } from "@/lib/useLocalStorage";
import type { Invoice, Client } from "@/lib/types";
import jsPDF from "jspdf";
//import "jspdf-autotable";

export default function RevenueReportPage() {
  const [invoices] = useLocalStorage<Invoice[]>("invoices", []);
  const [clients] = useLocalStorage<Client[]>("clients", []);
  const [selectedMonth, setSelectedMonth] = useState("");

  // Group Paid invoices by month
  const monthly = useMemo(() => {
    const data: Record<string, Invoice[]> = {};
    invoices
      .filter((inv) => inv.status === "Paid")
      .forEach((inv) => {
        const month = inv.issuedOn?.slice(0, 7) ?? "Unknown"; // YYYY-MM
        if (!data[month]) data[month] = [];
        data[month].push(inv);
      });
    return data;
  }, [invoices]);

  // Lookup client name
  const clientName = (id: string) =>
    clients.find((c) => c.id === id)?.name ?? "Unknown Client";

  // Generate PDF for selected month
  const generatePDF = () => {
    if (!selectedMonth || !monthly[selectedMonth]) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Revenue Report - ${selectedMonth}`, 14, 20);

    const rows = monthly[selectedMonth].map((inv) => [
      inv.issuedOn,
      clientName(inv.clientId),
      `Rs. ${inv.amount.toLocaleString()}`,
    ]);

    (doc as any).autoTable({
      head: [["Date", "Client", "Amount"]],
      body: rows,
      startY: 30,
    });

    const total = monthly[selectedMonth].reduce((s, i) => s + i.amount, 0);
    doc.text(
      `Total Income: Rs. ${total.toLocaleString()}`,
      14,
      (doc as any).lastAutoTable.finalY + 10
    );

    doc.save(`Revenue-${selectedMonth}.pdf`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Revenue Reports</h1>

      <Card title="Generate Monthly Report">
        <div className="space-y-3">
          {/* Dropdown to select a month */}
          <select
            className="input w-full"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {Object.keys(monthly).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          {/* Show report for selected month */}
          {selectedMonth && (
            <div className="space-y-2 border rounded p-3">
              <h3 className="font-medium">Report for {selectedMonth}</h3>
              <ul className="text-sm space-y-1">
                {monthly[selectedMonth].map((inv) => (
                  <li
                    key={inv.id}
                    className="flex justify-between border-b pb-1 text-xs"
                  >
                    <span>{inv.issuedOn}</span>
                    <span>{clientName(inv.clientId)}</span>
                    <span>Rs. {inv.amount.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold mt-2">
                Total: Rs.{" "}
                {monthly[selectedMonth]
                  .reduce((s, i) => s + i.amount, 0)
                  .toLocaleString()}
              </p>
              <button className="btn-primary mt-3" onClick={generatePDF}>
                Download PDF
              </button>
            </div>
          )}

          {!selectedMonth && (
            <p className="text-sm text-secondary">
              Select a month to view and download report.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
