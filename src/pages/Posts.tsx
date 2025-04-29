import { useState, useEffect, ReactElement } from "react";
import axios from "axios";

import { IPost } from "../constants/interfaces";
import { API_URL } from "../constants/constants";

export const Posts = (): ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
      } catch (err) {
        setError("Error fetching posts!");
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="text-center p-10 text-3xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 underline decoration-dotted decoration-orange-500 underline-offset-8">
        📝 POSTS LIST 📝
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-gradient-to-r from-cyan-300 to-green-200 rounded-lg shadow-lg border-4 border-pink-500 transform hover:skew-y-1 transition-transform"
          >
            <h3 className="text-xl font-bold text-red-700 mb-2 bg-yellow-100 p-2 rounded-md">
              {post.title.toUpperCase()}
            </h3>
            <p className="text-purple-800 bg-white bg-opacity-70 p-3 rounded-lg italic">
              {post.body}
            </p>
            <div className="mt-2 text-right">
              <span className="inline-block bg-orange-300 text-blue-800 p-1 rounded-full text-sm font-bold">
                User ID: {post.userId}
              </span>
              <span className="inline-block ml-2 bg-purple-300 text-green-800 p-1 rounded-full text-sm font-bold">
                Post ID: {post.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
