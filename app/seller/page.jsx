'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Dummy data for the charts
const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [4000, 3000, 5000, 4500, 6000, 5500],
      backgroundColor: 'rgba(136, 132, 216, 0.5)',
      borderColor: 'rgba(136, 132, 216, 1)',
      borderWidth: 1,
    },
  ],
};

const categoryData = {
  labels: ['Electronics', 'Fashion', 'Home Goods', 'Sports'],
  datasets: [
    {
      label: 'Sales by Category',
      data: [400, 300, 300, 200],
      backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      hoverOffset: 4,
    },
  ],
};

const AddProduct = () => {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Sales Statistics Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Sales Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Monthly Sales</h3>
            <Bar data={salesData} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Sales by Category</h3>
            <div className="w-full max-w-xs mx-auto">
              <Pie data={categoryData} />
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
          <div>
            <p className="text-base font-medium">Product Image</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">

              {[...Array(4)].map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }} type="file" id={`image${index}`} hidden />
                  <Image
                    key={index}
                    className="max-w-24 cursor-pointer"
                    src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                    alt=""
                    width={100}
                    height={100}
                  />
                </label>
              ))}

            </div>
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              placeholder="Type here"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <label
              className="text-base font-medium"
              htmlFor="product-description"
            >
              Product Description
            </label>
            <textarea
              id="product-description"
              rows={4}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
              placeholder="Type here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={category}
              >
                <option value="Earphone">Earphone</option>
                <option value="Headphone">Headphone</option>
                <option value="Watch">Watch</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                id="product-price"
                type="number"
                placeholder="0"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="offer-price">
                Offer Price
              </label>
              <input
                id="offer-price"
                type="number"
                placeholder="0"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                onChange={(e) => setOfferPrice(e.target.value)}
                value={offerPrice}
                required
              />
            </div>
          </div>
          <button type="submit" className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded">
            ADD
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AddProduct;
