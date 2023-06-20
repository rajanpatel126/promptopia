"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Prompt");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPost = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPost);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/prompt/${session?.user.id}/posts`);
      const data = response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <>
      <Profile
        name="My"
        desc="Welcome to your Profile section"
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        data={posts}
      />
      Hello
    </>
  );
};

export default MyProfile;
