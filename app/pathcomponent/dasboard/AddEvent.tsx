"use client";

import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED EDITOR CONFIG
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: "",
    immediatelyRender: false,
  });

  if (!editor) return null;

  // 🔹 Upload Image
  const uploadImage = async (file: File) => {
    const res = await fetch("/api/sign", { method: "POST" });
    const { timestamp, signature, api_key, cloud_name } = await res.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", api_key);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", "events");

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      { method: "POST", body: formData }
    );

    const data = await uploadRes.json();
    return data.secure_url;
  };

  // 🔹 Submit
  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();

    const description = editor.getHTML();

    if (!title.trim() || !subheading.trim() || !file || editor.isEmpty) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      const imageUrl = await uploadImage(file);

      await addDoc(collection(db, "events"), {
        title: title.trim(),
        subheading: subheading.trim(),
        description,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Event added ✅");

      setTitle("");
      setSubheading("");
      setFile(null);
      editor.commands.clearContent();

    } catch (err) {
      console.error(err);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>

      <form onSubmit={handleAddEvent} className="space-y-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        {/* Subheading */}
        <input
          type="text"
          placeholder="Subheading"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        {/* Toolbar */}
        <div className="flex gap-2 flex-wrap bg-gray-100 p-2 rounded-lg">

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            <b>B</b>
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            <i>I</i>
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            H1
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            H2
          </button>

          {/* Bullet List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            • List
          </button>

          {/* Ordered List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "bg-gray-300 px-2 rounded" : "px-2"}
          >
            1. List
          </button>

        </div>

        {/* Editor */}
        <div className="border rounded-lg p-3 min-h-[150px]">
          <EditorContent editor={editor} />
        </div>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) setFile(e.target.files[0]);
          }}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Add Event"}
        </button>

      </form>
    </div>
  );
}