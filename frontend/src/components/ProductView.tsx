// src/components/ProductView.jsx
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { NumericFormat } from "react-number-format";

export const productsProductViewChartData = [
    {
        name: "14",
        amt: 345231,
    },
    {
        name: "15",
        amt: 653134,
    },
    {
        name: "16",
        amt: 259435,
    },
    {
        name: "17",
        amt: 559128,
    },
    {
        name: "18",
        amt: 384505,
    },
    {
        name: "19",
        amt: 254104,
    },
    {
        name: "20",
        amt: 354561,
    },
];

const ProductView = ({}) => {
    const CustomTooltip = ({
        payload,
        label,
    }: {
        payload: { value: number }[];
        label: string;
    }) => {
        if (payload && payload.length) {
            return (
                <div className="z-50 !bg-b-dark1 !opacity-100 !px-2 !py-0.5 !rounded-[6px] !text-caption !text-t-light">
                    <div className="text-caption opacity-80">
                        Day {label}
                    </div>
                    <div className="text-caption font-bold">
                        <NumericFormat
                            value={payload[0].value}
                            thousandSeparator=","
                            decimalScale={0}
                            fixedDecimalScale
                            prefix="$"
                            displayType="text"
                        />
                    </div>
                </div>
            );
        }
        return null;
    };

    // Calculate total revenue
    const totalRevenue = productsProductViewChartData.reduce((sum, item) => sum + item.amt, 0);
    const formattedTotal = `$${(totalRevenue / 1000000).toFixed(1)}m`;
    const percentageChange = 36.8;

    return (
        <div className="bg-surface2 rounded-2xl border border-color shadow-theme p-4 lg:p-6 mt-6 lg:mt-0">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4 lg:gap-0">
                <div>
                    <h2 className="text-lg font-semibold text-primary mb-2">Product view</h2>
                    <div className="text-2xl font-bold text-primary">{formattedTotal}</div>
                </div>
                <select className="bg-surface3 border border-color rounded-full px-3 py-2 text-sm text-secondary w-full lg:w-auto">
                    <option>Last 7 days</option>
                    <option>Last month</option>
                    <option>Last year</option>
                </select>
            </div>

            {/* Stats */}
            <div className="flex items-center mb-6">
                <div className={`flex items-center ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {percentageChange >= 0 ? (
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    )}
                    <span className="text-sm font-medium">{percentageChange}%</span>
                </div>
                <span className="text-sm text-secondary ml-2">vs last month</span>
            </div>

            {/* Chart container */}
            <div className="mb-4">
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={productsProductViewChartData}
                            barCategoryGap={8}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fontSize: "12px",
                                    fill: "var(--text-tertiary)",
                                }}
                                height={32}
                                dy={10}
                            />
                            <Tooltip
                                content={
                                    <CustomTooltip payload={[]} label="" />
                                }
                                cursor={false}
                            />
                            <Bar
                                dataKey="amt"
                                fill="#94a3b8"
                                fillOpacity={0.6}
                                activeBar={{
                                    fill: "#00b512",
                                    fillOpacity: 1,
                                }}
                                radius={4}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ProductView;