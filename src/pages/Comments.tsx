import { useState, useEffect, ReactElement } from "react";
import axios from "axios";

import { IComment } from "../constants/interfaces";
import { API_URL } from "../constants/constants";

export const Comments = (): ReactElement => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL}/comments`);
        setComments(response.data);
      } catch (err) {
        setError("Error fetching comments!");
        console.error(err);
      }
    };

    fetchComments();
  }, []);

  if (error) {
    return (
      <div className="text-center p-10 text-3xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-purple-700 underline decoration-double decoration-yellow-500 underline-offset-8">
        💬 COMMENTS LIST 💬
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comments.slice(0, 20).map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-lg shadow-lg border-4 border-green-500 transform hover:-rotate-1 transition-transform"
          >
            <h3 className="text-lg font-bold text-blue-700 mb-2 bg-purple-100 p-2 rounded-md">
              {comment.name}
            </h3>
            <p className="text-green-800 bg-white bg-opacity-70 p-3 rounded-lg">
              {comment.body}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <span className="inline-block bg-blue-300 text-red-800 p-1 rounded-full text-sm font-bold">
                Post ID: {comment.postId}
              </span>
              <span className="inline-block bg-red-300 text-blue-800 p-1 rounded-full text-sm font-bold">
                {comment.email}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 p-3 bg-red-200 rounded-lg">
        <p className="text-purple-800 font-bold">
          Showing only 20 comments because there are too many! 🙄
        </p>
      </div>
    </div>
  );
};
