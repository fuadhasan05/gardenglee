import React, { useState } from 'react';
import Swal from 'sweetalert2';

const categories = [
  'Composting',
  'Plant Care',
  'Vertical Gardening',
  'Hydroponics',
  'Pest Control',
  'Other',
];

const difficulties = ['Easy', 'Medium', 'Hard'];
const availabilities = ['Public', 'Hidden'];

// Mock user info (replace with actual user context/auth)
const mockUser = {
  name: 'Jane Doe',
  email: 'jane@example.com',
};

const ShareTip = () => {
  const [form, setForm] = useState({
    title: '',
    plantType: '',
    difficulty: '',
    description: '',
    imageUrl: '',
    category: '',
    availability: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());
    console.log('Submitted Tip Data:', tipData);
    fetch('http://localhost:5173/share-tip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...tipData,
          userName: mockUser.name,
          userEmail: mockUser.email,
        }),
    })
    

    setForm({
      title: '',
      plantType: '',
      difficulty: '',
      description: '',
      imageUrl: '',
      category: '',
      availability: '',
    });
    Swal.fire({
      icon: 'success',
      title: 'Tip submitted successfully!',
      showConfirmButton: false,
      timer: 1800,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Share a Garden Tip</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Title"
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Plant Type/Topic</label>
            <input
              name="plantType"
              value={form.plantType}
              onChange={handleChange}
              required
              placeholder="Type/Topic"
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Difficulty Level</label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            >
              <option value="">Select</option>
              {difficulties.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              placeholder="Describe your gardening tip in detail..."
              rows={4}
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Images URL</label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              type="url"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            >
              <option value="">Select</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Availability</label>
            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-700 rounded-lg focus:outline-none"
            >
              <option value="">Select</option>
              {availabilities.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">User Name</label>
              <input
                value={mockUser.name}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">User Email</label>
              <input
                value={mockUser.email}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
          >
            Submit Tip
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;