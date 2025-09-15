// src/components/Overview.jsx
"use client";

import { useState } from "react";
import Card from "@/components/UI/Card";
import Icon from "@/components/NavBar/Icon";
import Percentage from "@/components/Percentage";
import NewCustomers from "@/components/NewCustomers";
import Balance from "../UI/Balace";
import RightPanel from "../RightPanel";
import ProductView from "../ProductView";
import OverviewSlider from "./OverViewSlider";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const tabs = [
    {
        id: 1,
        icon: "profile",
        label: "Customers",
        value: "1,293",
        percent: -36.8,
    },
    {
        id: 2,
        icon: "wallet",
        label: "Balance",
        value: "256k",
        percent: 36.8,
    },
];

const Overview = ({}) => {
    const [duration, setDuration] = useState(durations[0]);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Main content area */}
            <div className="flex-1">
                <div className="bg-surface2 rounded-2xl border border-color shadow-theme p-4 lg:p-6">
                    {/* Header with title and duration selector */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4 lg:gap-0">
                        <h3 className="text-xl font-bold">Overview</h3>
                        <select 
                            className="bg-surface3 border border-color rounded-full px-4 py-3 text-sm w-full lg:w-auto"
                            value={duration.id}
                            onChange={(e) => setDuration(durations.find(d => d.id === parseInt(e.target.value)) || durations[0])}
                        >
                            {durations.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Tab navigation */}
                    <div className="flex flex-col lg:flex-row mb-4 p-4 border border-color rounded-3xl bg-surface3">
                        {tabs.map((tab) => (
                            <div
                                className={`group flex-1 px-4 lg:px-6 py-4 rounded-3xl cursor-pointer transition-all ${
                                    activeTab === tab.id
                                        ? "bg-surface2 shadow-theme"
                                        : ""
                                }`}
                                key={tab.label}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div
                                    className={`flex items-center gap-3 mb-2 text-md transition-colors group-hover:text-primary ${
                                        activeTab === tab.id
                                            ? "text-primary"
                                            : "text-secondary"
                                    }`}
                                >
                                    <Icon name={tab.icon} />
                                    <div className="">{tab.label}</div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
                                    <div className="text-2xl font-bold">
                                        {tab.value}
                                    </div>
                                    <div>
                                        <Percentage value={tab.percent} />
                                        <div className="mt-1 text-sm text-secondary">
                                            vs last month
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="pt-1">
                        {activeTab === 1 && (
                            <NewCustomers className="p-3 lg:p-5" percentage={tabs[0].percent} />
                        )}
                        {activeTab === 2 && <Balance />}
                    </div>
                </div>
                <div className="mt-6 lg:mt-10">
                    <ProductView/>
                    <OverviewSlider/>
                </div>
            </div>            
            
            {/* Right Panel - now stacks vertically on mobile */}
            <div className="w-full lg:w-84 pr-0 lg:pr-2.5">
                <RightPanel />
            </div>
        </div>
    );
};

export default Overview;