import { useState, useEffect } from "react";
import {
  HiOutlinePlus,
  HiOutlineLocationMarker,
  HiOutlineDotsVertical
} from "react-icons/hi";

export default function Addresses() {

  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    city: "",
    detail: "",
    phone: ""
  });

useEffect(() => {
  const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
  const currentUser = JSON.parse(localStorage.getItem("furyz_user"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  let updated = [...savedAddresses];

  const matchedUser = users.find(
    (u) => u.email === currentUser?.email
  );

  if (matchedUser?.address) {
    const exists = savedAddresses.some(
      (a) => a.detail === matchedUser.address
    );

    if (!exists) {
      const firstAddress = {
        id: Date.now(),
        title: "Home",
        city: "",
        detail: matchedUser.address,
        phone: ""
      };

      updated = [firstAddress, ...savedAddresses];
      localStorage.setItem("addresses", JSON.stringify(updated));
    }
  }

  setAddresses(updated);
}, []);

  const saveAddresses = (newAddresses) => {
    setAddresses(newAddresses);
    localStorage.setItem(
      "addresses",
      JSON.stringify(newAddresses)
    );
  };

  const handleAddAddress = () => {

    const newAddress = {
      id: Date.now(),
      ...form
    };

    const updated = [...addresses, newAddress];

    saveAddresses(updated);

    setForm({
      title: "",
      city: "",
      detail: "",
      phone: ""
    });

    setShowForm(false);
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold">Addresses</h2>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-xl font-bold text-sm hover:bg-lime-300 transition-all"
        >
          <HiOutlinePlus size={18} />
          Add New Address
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm"
          />

          <input
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm"
          />

          <textarea
            placeholder="Full Address"
            value={form.detail}
            onChange={(e) =>
              setForm({ ...form, detail: e.target.value })
            }
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm"
          />

          <div className="flex gap-3">

            <button
              onClick={handleAddAddress}
              className="px-4 py-2 bg-lime-400 text-black rounded-xl font-bold text-sm"
            >
              Save Address
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-white/10 rounded-xl text-sm"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      <div className="grid gap-4">

        {addresses.map(addr => (
          <div
            key={addr.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-start"
          >

            <div className="space-y-2">

              <div className="flex items-center gap-2 text-lime-400">
                <HiOutlineLocationMarker size={20}/>
                <span className="font-bold">{addr.title}</span>
              </div>

              <p className="text-sm text-white/70">
                {addr.detail}
              </p>

              <p className="text-xs text-white/40">
                Phone: {addr.phone}
              </p>

            </div>

            <button className="text-white/40 hover:text-white">
              <HiOutlineDotsVertical size={20}/>
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
