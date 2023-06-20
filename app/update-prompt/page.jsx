"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() => {
    const promptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = response.json();
      // console.log(data);
      setPost({
        prompt: data.prompt,
        tag: data.prompt,
      });
    };
    if (promptId) promptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    if (!promptId) alert("No prompt id found");

    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PETCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
