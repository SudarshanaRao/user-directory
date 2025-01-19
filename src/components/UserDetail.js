import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetail;
