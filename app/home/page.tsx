"use client";
import React, { useState } from 'react';

interface Hotel {
  hotelName: string;
  province: string;
  city: string;
  address: string;
  type: string;
  pax: number;
  price: number;
  description: string;
}

const hotels: Hotel[] = [
  {
    hotelName: "Ocean View Hotel",
    province: "California",
    city: "Los Angeles",
    address: "123 Beach Ave",
    type: "Deluxe Room",
    pax: 2,
    price: 200.0,
    description: "Spacious room with a king-sized bed and sea view."
  },
  {
    hotelName: "Mountain Retreat",
    province: "Colorado",
    city: "Aspen",
    address: "456 Mountain Rd",
    type: "Family Suite",
    pax: 4,
    price: 300.0,
    description: "Large suite with two bedrooms and a living area."
  },
  {
    hotelName: "City Center Inn",
    province: "New York",
    city: "New York City",
    address: "789 Main St",
    type: "Standard Room",
    pax: 2,
    price: 120.0,
    description: "Comfortable room with essential amenities."
  },
  {
    hotelName: "Cozy Cabin",
    province: "Vermont",
    city: "Stowe",
    address: "101 Cabin Ln",
    type: "Single Room",
    pax: 1,
    price: 80.0,
    description: "Cozy room ideal for solo travelers."
  },
  {
    hotelName: "Romantic Getaway",
    province: "Florida",
    city: "Key West",
    address: "202 Sunset Blvd",
    type: "Honeymoon Suite",
    pax: 2,
    price: 350.0,
    description: "Romantic suite with a private balcony and hot tub."
  }
];

export default function Home() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [dateTime, setDateTime] = useState('');

  const openModal = (hotel: Hotel) => setSelectedHotel(hotel);
  const closeModal = () => setSelectedHotel(null);

  const handleSubmitDate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dateTime);
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
            <strong>Hotel Name:</strong> {hotel.hotelName} <br />
            <strong>Province:</strong> {hotel.province} <br />
            <strong>City:</strong> {hotel.city} <br />
            <strong>Address:</strong> {hotel.address} <br />
            <strong>Type:</strong> {hotel.type} <br />
            <strong>Pax:</strong> {hotel.pax} <br />
            <strong>Price:</strong> ${hotel.price.toFixed(2)} <br />
            <strong>Description:</strong> {hotel.description} <br />

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => openModal(hotel)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Book Modal
              </button>
              <button
                type='button'
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Message  
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Like</button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Comment</button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Share</button>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-2">{selectedHotel.hotelName}</h3>
            <div>
              <form onSubmit={handleSubmitDate}>
                <label htmlFor="dateTime" className="block mb-2">Date & Time</label>
                <input
                  type="datetime-local"
                  id='dateTime'
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="border rounded w-full p-2 mb-4"
                />
                <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
