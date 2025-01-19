import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
      <img
        src={`https://robohash.org/${user.id}?set=set4&size=200x200`}
        alt="User Avatar"
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.name}</h3>
      <p className="text-gray-700 dark:text-gray-300">Email: {user.email}</p>
      <p className="text-gray-700 dark:text-gray-300">City: {user.address.city}</p>
      <Link to={`/user/${user.id}`}>
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Details
        </button>
      </Link>

    </div>
  );
};

export default UserCard;
