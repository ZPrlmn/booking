import React from 'react';

type Request = {
    user_name: string;
    date: string;
    time: string;
    type: string;
    price: number;
    approve: boolean;
};

const requests: Request[] = [
    {
        user_name: "John Doe",
        date: "2024-11-01",
        time: "14:30",
        type: "Deluxe Room",
        price: 200.0,
        approve: true,
    },
    {
        user_name: "Jane Smith",
        date: "2024-11-01",
        time: "10:00",
        type: "Standard Room",
        price: 120.0,
        approve: false,
    },
    {
        user_name: "Mike Johnson",
        date: "2024-11-02",
        time: "16:45",
        type: "Family Suite",
        price: 300.0,
        approve: true,
    },
    {
        user_name: "Emily Brown",
        date: "2024-11-02",
        time: "12:30",
        type: "Single Room",
        price: 80.0,
        approve: false,
    },
    {
        user_name: "Chris Lee",
        date: "2024-11-03",
        time: "09:00",
        type: "Honeymoon Suite",
        price: 350.0,
        approve: true,
    },
];

export default function Requests() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Requests</h2>
            <div className="flex flex-wrap gap-4">
                {requests.map((request, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] p-4 bg-white rounded-lg shadow-md"
                    >
                        <div>
                            <p className="font-semibold text-gray-700">User: {request.user_name}</p>
                            <p className="text-gray-500">Date: {request.date}</p>
                            <p className="text-gray-500">Time: {request.time}</p>
                            <p className="text-gray-500">Room Type: {request.type}</p>
                            <p className="text-gray-500">Price: ${request.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    request.approve
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >
                                {request.approve ? "Approved" : "Pending"}
                            </span>
                            {!request.approve && (
                                <button
                                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                >
                                    Approve
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
