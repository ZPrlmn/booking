"use client";
import React, { useState } from 'react';

export default function Create() {
  const [affiliateName, setAffiliateName] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Affiliate Name:', affiliateName);
    console.log('Email:', email);
    console.log('Province/Municipality:', province);
    console.log('Town/City:', city);
    console.log('Address:', address);
    console.log('Coordinates:', coordinates);
    console.log('Description:', description);
    // Handle form submission logic here
  };

  return (
    <div>
      <h2>Create Affiliate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="affiliateName">Affiliate Name:</label>
          <input
            type="text"
            id="affiliateName"
            value={affiliateName}
            onChange={(e) => setAffiliateName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="province">Province/Municipality:</label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Town/City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="coordinates">Coordinates:</label>
          <input
            type="text"
            id="coordinates"
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            required
            placeholder="e.g., 34.0522,-118.2437"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
          />
        </div>
        <button type="submit">Create Affiliate</button>
      </form>
    </div>
  );
}
