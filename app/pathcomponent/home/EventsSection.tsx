"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

export default function EventsSection() {
  const [events, setEvents] = useState<any[]>([]);

  // 🔹 Fetch latest 3 events
  const fetchEvents = async () => {
    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc"),
      limit(3) // ✅ only latest 3
    );

    const snap = await getDocs(q);

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="pb-20 bg-gray-50">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our <span className="text-red-900">Events</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay updated and explore everything at JCS
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">

        {/* LEFT BIG CARD */}
        {events[0] && (
            <Link href={`/events/${encodeURIComponent(events[0]?.title)}`}>
          <div className="relative group rounded-2xl overflow-hidden h-[400px]">

            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {events[0].title}
              </h3>

              {/* optional fields */}
              <p className="text-sm text-white/80">
                {events[0].date && `📅 ${events[0].date}`}{" "}
                {events[0].place && `• 📍 ${events[0].place}`}
              </p>
            </div>

          </div>
          </Link>
        )}

        {/* RIGHT SMALL CARDS */}
        <div className="flex flex-col gap-6">

          {events.slice(1).map((event, i) => (
            <Link key={event.id ?? i} href={`/events/${encodeURIComponent(event.title)}`}>
            <div
              className="relative group rounded-2xl overflow-hidden h-[190px]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold">
                  {event.title}
                </h3>

                <p className="text-xs text-white/80">
                  {event.date && `📅 ${event.date}`}
                </p>
              </div>

            </div>
            </Link>
          ))}

        </div>

      </div>

      {/* More Button */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-end">
        <Link href="/events" className="text-red-900 font-semibold text-sm">
          More Events →
        </Link>
      </div>

    </section>
  );
}