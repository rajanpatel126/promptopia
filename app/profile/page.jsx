"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import Profile from "@components/Profile";

const MyProfile = () => {
  // const router = useRouter();

  const handleDelete = async (post) => {};
  const handleEdit = (post) => {
    // router.push(`/update-prompt?id=${post._id}`);
  };

  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/prompt/${session?.user.id}/posts`);
      const data = response.json();
      alert(data+ "hello");
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
