import { useState, useEffect } from "react";
import axios from "axios";

import { ITodo } from "../constants/interfaces";
import { API_URL } from "../constants/constants";

export const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${API_URL}/todos`);
        setTodos(response.data);
      } catch (err) {
        setError("Error fetching todos!");
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  if (error) {
    return (
      <div className="text-center p-10 text-3xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-orange-700 underline decoration-dotted decoration-blue-500 underline-offset-8">
        ✅ TODOS LIST ✅
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-4 rounded-lg shadow-lg border-4 ${
              todo.completed
                ? "bg-gradient-to-r from-green-200 to-blue-200 border-green-500"
                : "bg-gradient-to-r from-red-200 to-yellow-200 border-red-500"
            } transform hover:skew-x-1 transition-transform`}
          >
            <div className="flex items-center">
              <span
                className={`text-2xl mr-2 ${
                  todo.completed ? "text-green-600" : "text-red-600"
                }`}
              >
                {todo.completed ? "✅" : "❌"}
              </span>
              <h3
                className={`text-md font-bold ${
                  todo.completed
                    ? "text-green-700 line-through"
                    : "text-red-700"
                } p-2 rounded-md`}
              >
                {todo.title}
              </h3>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="inline-block bg-purple-200 text-blue-800 p-1 rounded-full text-sm font-bold">
                Todo ID: {todo.id}
              </span>
              <span className="inline-block bg-blue-200 text-purple-800 p-1 rounded-full text-sm font-bold">
                User ID: {todo.userId}
              </span>
              <span
                className={`inline-block ${
                  todo.completed
                    ? "bg-green-300 text-green-800"
                    : "bg-red-300 text-red-800"
                } p-1 rounded-full text-sm font-bold`}
              >
                {todo.completed ? "COMPLETED" : "PENDING"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
