// src/components/BalanceChart.jsx
"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import millify from "millify";
import { NumericFormat } from "react-number-format";

// Your balance chart data
export const homeBalanceChartData = [
    {
        name: "Apr",
        amt: 0,
    },
    {
        name: "May",
        amt: 52480,
    },
    {
        name: "Jun",
        amt: 2345,
    },
    {
        name: "Jul",
        amt: 26345,
    },
    {
        name: "Aug",
        amt: 77345,
    },
    {
        name: "Sep",
        amt: 21454,
    },
];

const Balance = () => {
    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "0";
        }
        return `${millify(value, {
            lowercase: true,
        })}`;
    };

    const CustomTooltip = ({
        payload,
        label,
    }: {
        payload: { value: number }[];
        label: string;
    }) => {
        if (payload && payload.length) {
            return (
                <div className="z-50 bg-slate-800 opacity-100 px-2 py-0.5 rounded-md text-xs text-slate-50">
                    <div className="text-xs opacity-80">{label} 2025</div>
                    <NumericFormat
                        className="text-xs"
                        value={payload[0].value}
                        thousandSeparator=","
                        decimalScale={0}
                        fixedDecimalScale
                        prefix="$"
                        displayType="text"
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <div className="mt-6">
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={300}
                        height={100}
                        data={homeBalanceChartData}
                        margin={{ top: 7, right: 7, left: 0, bottom: 0 }}
                    >
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: "12px",
                                fill: "#94a3b8", // slate-400
                            }}
                            padding={{ left: 10, right: 10 }}
                            height={40}
                            dy={20}
                        />
                        <YAxis
                            tickFormatter={formatterYAxis}
                            type="number"
                            width={36}
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: "12px",
                                fill: "#94a3b8", // slate-400
                            }}
                        />
                        <CartesianGrid
                            strokeDasharray="5 7"
                            vertical={false}
                            stroke="#cbd5e1" // slate-300
                        />
                        <Tooltip
                            content={<CustomTooltip payload={[]} label="" />}
                            cursor={{ stroke: "#cbd5e1", strokeWidth: 1 }} // slate-300
                        />
                        <Line
                            type="monotone"
                            dataKey="amt"
                            stroke="#22c55e" // green-500
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 6,
                                fill: "#f1f5f9", // slate-100
                                stroke: "#22c55e", // green-500
                                strokeWidth: 3,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Balance;