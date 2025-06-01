import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { PulseLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dummy user info, replace with real user context/auth
const user = { name: "John Doe", email: "john@example.com" };

const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", availability: "", imageUrl: "" });

  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setForm({
          title: data.title,
          availability: data.availability,
          imageUrl: data.imageUrl,
        });
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/tips/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    toast.success("Tip updated successfully!");
    setTimeout(() => navigate("/my-tips"), 1500);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <PulseLoader color="#15803d" size={10} />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-20">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-8 text-green-700 text-center">Update Your Tip</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow">
        <div>
          <label className="block mb-2 font-semibold">User Name</label>
          <input
            value={user.name}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">User Email</label>
          <input
            value={user.email}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Availability</label>
          <input
            name="availability"
            value={form.availability}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 w-full cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;