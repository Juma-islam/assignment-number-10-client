import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Update successful!!");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="text-center bg-linear-to-r bg-linear-to-bl from-violet-500 to-fuchsia-500 p-10 rounded-lg md:w-md mx-auto mt-10">
      <title>My Profile page</title>
      <img src={user?.photoURL} alt="" className="w-24 h-24 mx-auto rounded-full border-2" />
      <h2 className="text-xl mt-3 font-semibold">{user?.displayName}</h2>
      <p>{user?.email}</p>
      <div className="mt-5 space-y-2">
        <input
          type="text"
          value={name}
          id=""
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
        />{" "}
        <br />
        <input
          type="text"
          value={photo}
          id=""
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="btn bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold w-80 mt-2"
      >
        Update Profile
      </button>
    </div>
  );
};

export default MyProfile;
