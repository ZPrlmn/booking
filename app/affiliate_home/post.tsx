"use client";
import React, { useState } from 'react';

export default function Post() {
    const [type, setType] = useState('');
    const [pax, setPax] = useState('');
    const [slots, setSlots] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Type:', type, 'Pax:', pax, 'Slots:', slots, 'Price:', price, 'Description:', description);
    };

    return (
        <div className="p-4 bg-white rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Add Rooms</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Pax"
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Slots"
                    value={slots}
                    onChange={(e) => setSlots(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
