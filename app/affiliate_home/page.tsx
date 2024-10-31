"use client";
import React, { useState } from 'react';
import Post from './post';

const hotelRooms = [
  {
    type: "Deluxe Room",
    pax: 2,
    slots: 3,
    price: 200.0,
    description: "Spacious room with a king-sized bed and sea view.",
  },
  {
    type: "Standard Room",
    pax: 2,
    slots: 5,
    price: 120.0,
    description: "Comfortable room with essential amenities.",
  },
  {
    type: "Family Suite",
    pax: 4,
    slots: 2,
    price: 300.0,
    description: "Large suite with two bedrooms and a living area.",
  },
  {
    type: "Single Room",
    pax: 1,
    slots: 4,
    price: 80.0,
    description: "Cozy room ideal for solo travelers.",
  },
  {
    type: "Honeymoon Suite",
    pax: 2,
    slots: 1,
    price: 350.0,
    description: "Romantic suite with a private balcony and hot tub.",
  },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Hotel Rooms</h2>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600 transition duration-200"
      >
        Add Room
      </button>
      
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotelRooms.map((room, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{room.type}</h3>
            <p className="text-sm text-gray-500 mb-4">{room.description}</p>
            <div className="text-gray-700 space-y-2">
              <p><span className="font-medium">Pax:</span> {room.pax}</p>
              <p><span className="font-medium">Slots:</span> {room.slots}</p>
              <p><span className="font-medium">Price:</span> ${room.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto">
            <Post />
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
