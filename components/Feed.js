import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Input from "./Input";
import Post from "./Post";
import { getBlogPost } from '../services/authBlog';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  async function fetchBlog() {
    try {
      const data = await getBlogPost()
      setPosts(data.data.post)
      console.log(data.data.post)
    } catch {
      console.log("error")
    }
  }

  useEffect(() => {
    fetchBlog()
  }, []);
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post._id} id={post._id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
