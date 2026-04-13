"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function EventAdmin() {
  const [events, setEvents] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<"add" | "edit" | "view" | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false,
  });

  // 🔹 Fetch events
  const fetchEvents = async () => {
    const snap = await getDocs(collection(db, "events"));
    setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔹 Upload
  const uploadImage = async (file: File) => {
    const res = await fetch("/api/sign", { method: "POST" });
    const { timestamp, signature, api_key, cloud_name } = await res.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", api_key);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      { method: "POST", body: formData }
    );

    return await uploadRes.json();
  };

  // 🔹 Add / Update
  const handleSubmit = async () => {
    const description = editor?.getHTML();

    if (!title || !subheading) return alert("Fill all fields");

    let imageData: any = {};
    if (file) imageData = await uploadImage(file);

    if (openModal === "edit") {
      await updateDoc(doc(db, "events", selectedEvent.id), {
        title,
        subheading,
        description,
        ...(file && { image: imageData.secure_url }),
      });
    } else {
      await addDoc(collection(db, "events"), {
        title,
        subheading,
        description,
        image: imageData.secure_url,
        createdAt: serverTimestamp(),
      });
    }

    closeModal();
    fetchEvents();
  };

  // 🔹 Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  // 🔹 Open Modals
  const openAdd = () => {
    setOpenModal("add");
    setTitle("");
    setSubheading("");
    setFile(null);
    editor?.commands.clearContent();
  };

  const openEdit = (event: any) => {
    setOpenModal("edit");
    setSelectedEvent(event);
    setTitle(event.title);
    setSubheading(event.subheading);
    editor?.commands.setContent(event.description);
  };

  const openView = (event: any) => {
    setSelectedEvent(event);
    setOpenModal("view");
  };

  const closeModal = () => {
    setOpenModal(null);
    setSelectedEvent(null);
  };

  if (!editor) return null;

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>

        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Event
        </button>
      </div>

      {/* 🔥 TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Subheading</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="p-3">
                  <img src={e.image} className="w-20 h-14 object-cover rounded" />
                </td>
                <td className="p-3">{e.title}</td>
                <td className="p-3">{e.subheading}</td>

                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openView(e)}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() => openEdit(e)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(e.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg relative">

            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            {/* VIEW */}
            {openModal === "view" && (
              <>
                <img src={selectedEvent.image} className="w-full h-60 object-cover rounded" />
                <h2 className="text-xl font-bold mt-3">{selectedEvent.title}</h2>
                <p className="text-gray-500">{selectedEvent.subheading}</p>

                <div
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: selectedEvent.description }}
                />
              </>
            )}

            {/* ADD / EDIT */}
            {(openModal === "add" || openModal === "edit") && (
              <>
                <h2 className="text-xl font-bold mb-3">
                  {openModal === "edit" ? "Edit Event" : "Add Event"}
                </h2>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full border p-2 mb-2"
                />

                <input
                  value={subheading}
                  onChange={(e) => setSubheading(e.target.value)}
                  placeholder="Subheading"
                  className="w-full border p-2 mb-2"
                />

                {/* Toolbar */}
                <div className="flex gap-2 bg-gray-100 p-2 rounded mb-2">
                  <button onClick={() => editor.chain().focus().toggleBold().run()} type="button">B</button>
                  <button onClick={() => editor.chain().focus().toggleItalic().run()} type="button">I</button>
                </div>

                <div className="border p-2 mb-2">
                  <EditorContent editor={editor} />
                </div>

                <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

                <button
                  onClick={handleSubmit}
                  className="mt-3 w-full bg-blue-600 text-white p-2 rounded"
                >
                  Save
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}