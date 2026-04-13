"use client";

// import Layout from "@/components/Layout";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function EventDetailsPage({
  params,
}: {
  params: { title: string };
}) {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const decodedTitle = decodeURIComponent(params.title);
      const q = query(collection(db, "events"), where("title", "==", decodedTitle));
      const snap = await getDocs(q);

      if (!snap.empty) {
        const docData = snap.docs[0];
        setEvent({ id: docData.id, ...docData.data() });
      }
    };

    fetchEvent();
  }, [params.title]);

  if (!event) {
    return (
        <p className="text-center mt-10">Loading...</p>
    );
  }

  return (
      <>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our <span className="text-red-900 !text-red-900">Events</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay updated and explore everything at JCS
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <img src={event.image} className="w-full h-80 object-cover rounded mb-4" />

        <h1 className="text-3xl font-bold">{event.title}</h1>

        <h3 className="text-gray-600 mt-2">{event.subheading}</h3>

        <div
          className="mt-4 text-base"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </div>
      </>
  );
}
