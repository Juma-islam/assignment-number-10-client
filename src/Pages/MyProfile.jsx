import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaUserCircle, FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const isAdmin = user?.email === "admin@communityfix.com"; 

  const handleUpdate = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      await updateUser({ displayName: name.trim(), photoURL: photo.trim() || null });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Update failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Card */}
        <div className="card bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-10 text-center relative">
            <div className="avatar online placeholder absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 rounded-full ring-8 ring-white dark:ring-gray-800 shadow-2xl">
                {photo ? (
                  <img src={photo} alt="Profile" className="object-cover" />
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center h-full">
                    <FaUserCircle className="text-6xl text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="pt-20 pb-10 px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-4">
              {user?.displayName || "User"}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{user?.email}</p>

            {/* Role Badge */}
            <div className="mt-4">
              <span
                className={`badge badge-lg font-semibold py-4 px-6 ${
                  isAdmin
                    ? "badge-error text-white"
                    : "badge-success text-white"
                }`}
              >
                {isAdmin ? "ADMIN" : "USER"}
              </span>
            </div>

            {/* Edit Form */}
            <div className="mt-10 space-y-6 max-w-md mx-auto">
              <div>
                <label className="label font-semibold text-left block">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="label font-semibold text-left block">Photo URL</label>
                <input
                  type="url"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full focus:ring-2 focus:ring-emerald-500"
                  placeholder="https://example.com/photo.jpg"
                />
                <p className="text-xs text-gray-500 mt-2 text-left">
                  Paste a direct image link 
                </p>
              </div>

              {/* Photo Preview */}
              {photo && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Photo Preview:</p>
                  <img
                    src={photo}
                    alt="Preview"
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-emerald-300"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              )}

              <button
                onClick={handleUpdate}
                disabled={loading}
                className="btn btn-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-bold shadow-lg disabled:opacity-70"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    <FaEdit className="mr-2" /> Update Profile
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
