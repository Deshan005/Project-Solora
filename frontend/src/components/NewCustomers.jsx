// src/components/NewCustomers.jsx
"use client";

import Link from "next/link";
import Icon from "../components/NavBar/Icon";
import Percentage from "./Percentage";

const NewCustomers = ({ className, percentage }) => {
    const customersData = [
        { id: 1, name: "Gladlyce", avatar: "G" },
        { id: 2, name: "Elbert", avatar: "E" },
        { id: 3, name: "Joyce", avatar: "J" },
        { id: 4, name: "John", avatar: "J" },
        { id: 5, name: "Elbert", avatar: "E" },
    ];

    return (
        <div className={className}>
            <div className="mb-6">
                <div className={`flex items-center gap-3 ${percentage ? "mb-1" : ""}`}>
                    <div className="text-lg font-medium">857 new customers today!</div>
                    {percentage && <Percentage value={percentage} />}
                </div>
                <div className="text-sm text-secondary">
                    Send a welcome message to all new customers.
                </div>
            </div>
            
            <div className="relative">
                <div className="flex overflow-auto -mx-6 px-6 scrollbar-none">
                    {customersData.map((customer) => (
                        <div
                            className="shrink-0 flex-auto w-20 text-center"
                            key={customer.id}
                        >
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                                {customer.avatar}
                            </div>
                            <div className="mt-2 text-sm text-secondary truncate">
                                {customer.name}
                            </div>
                        </div>
                    ))}
                    
                    <div className="shrink-0 flex-auto w-20 text-center">
                        <Link
                            className="group inline-flex flex-col justify-center items-center"
                            href="/customers"
                        >
                            <div className="flex justify-center items-center w-12 h-12 rounded-full border border-color transition-colors group-hover:border-primary mx-auto">
                                <Icon name="arrow" />
                            </div>
                            <div className="mt-2 text-sm text-secondary transition-colors group-hover:text-primary">
                                View all
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCustomers;