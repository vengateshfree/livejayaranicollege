"use client";

// import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const NEWS_API =
  "https://opensheet.elk.sh/1wb202NVx9rfK8DgXMcyY9e16kxomMgtHHI0PYw042pI/Sheet1";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimitValue] = useState(10);

  useEffect(() => {
    fetch(NEWS_API)
      .then((res) => res.json())
      .then((data) => {
        setNews(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  const totalPages = Math.max(1, Math.ceil(news.length / limit));
  const currentNews = useMemo(() => {
    const start = (page - 1) * limit;
    return news.slice(start, start + limit);
  }, [news, page, limit]);

  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Our <span className="text-red-900">News & Services</span>
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
            currentNews.map((item, index) => (
              <Link
                key={`${item.title}-${index}`}
                href={`/news/${encodeURIComponent(item.title)}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/15iRYOT2VfSYfkAwsxUn0f7JoN2OzC40T/preview"
                    width="100%"
                    height="200"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-900 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <span className="text-red-900 font-semibold text-sm">Read More →</span>
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
