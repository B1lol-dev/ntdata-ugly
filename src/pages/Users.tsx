import { ReactElement, useEffect, useState } from "react";
import axios from "axios";

import { IUser } from "../constants/interfaces";
import { API_URL } from "../constants/constants";

export const Users = (): ReactElement => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        setUsers(response.data);
      } catch (err) {
        setError("Error fetching users!");
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return (
      <div className="text-center p-10 text-3xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-red-700 underline decoration-wavy decoration-green-500 underline-offset-8">
        👤 USERS LIST 👤
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-gradient-to-r from-pink-400 to-yellow-300 rounded-lg shadow-lg border-4 border-blue-600 transform hover:rotate-1 transition-transform"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-2 bg-green-200 p-2 rounded-full text-center">
              {user.name}
            </h3>
            <div className="bg-white bg-opacity-70 p-3 rounded-lg">
              <p className="text-blue-800 font-bold">
                Username: <span className="text-red-600">{user.username}</span>
              </p>
              <p className="text-blue-800 font-bold">
                Email: <span className="text-red-600">{user.email}</span>
              </p>
              <p className="text-blue-800 font-bold">
                Phone: <span className="text-red-600">{user.phone}</span>
              </p>
              <p className="text-blue-800 font-bold">
                Website: <span className="text-red-600">{user.website}</span>
              </p>
              <div className="mt-2 p-2 bg-yellow-100 rounded-lg">
                <p className="text-green-800 font-bold">
                  Company:{" "}
                  <span className="text-purple-600">{user.company.name}</span>
                </p>
                <p className="text-green-800 font-bold">
                  Catchphrase:{" "}
                  <span className="text-purple-600 italic">
                    "{user.company.catchPhrase}"
                  </span>
                </p>
              </div>
              <div className="mt-2 p-2 bg-blue-100 rounded-lg">
                <p className="text-orange-800 font-bold">Address:</p>
                <p className="text-orange-800">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-orange-800">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
