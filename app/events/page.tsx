"use client";

// import Layout from "@/components/Layout";
import Link from "next/link";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimitValue] = useState(10);

  useEffect(() => {
    const fetchEvents = async () => {
      const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  const totalPages = Math.max(1, Math.ceil(events.length / limit));
  const currentEvents = useMemo(() => {
    const start = (page - 1) * limit;
    return events.slice(start, start + limit);
  }, [events, page, limit]);

  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Our <span className="text-red-900">Events</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
            Stay updated and explore everything at JCS
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex justify-end mb-6">
          <select
            value={limit}
            onChange={(e) => setLimitValue(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            currentEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${encodeURIComponent(event.title)}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-white/80">
                    {event.date && `📅 ${event.date}`}{" "}
                    {event.place && `• 📍 ${event.place}`}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-center gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded"
          >
            Prev
          </button>
          <span className="px-3 py-1">{page}</span>
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </section>
  );
}
