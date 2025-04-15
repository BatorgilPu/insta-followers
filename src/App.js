import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(100);
  const price = count * 30;

  const handlePurchase = () => {
    if (!username) {
      alert("Instagram нэрээ оруулна уу!");
      return;
    }
    alert(`${count} дагагчийг @${username} дээр нэмэх захиалга өглөө.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Инстаграм дагагч нэмэх</h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Private profile-тай бол дагагч нэмэгдэхгүйг анхаарна уу!
        </p>

        <input
          type="text"
          placeholder="Instagram username оруулна уу (@temdegteiгээр)"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="number"
          min={50}
          max={10000}
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="w-full border p-2 mb-3 rounded"
        />

        <div className="text-right mb-4 font-semibold text-lg">
          Үнэ: ₮{price.toLocaleString()}
        </div>

        <button
          onClick={handlePurchase}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Худалдан авах
        </button>

        <div className="bg-red-100 text-red-800 mt-5 p-3 rounded text-sm">
          ⚠️ Та тохиргоог унтраагаагүй бол дагагч нэмэгдэхгүйг анхаарна уу!
        </div>
      </div>
    </div>
  );
}
