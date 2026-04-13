"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const NEWS_API =
  "https://opensheet.elk.sh/1wb202NVx9rfK8DgXMcyY9e16kxomMgtHHI0PYw042pI/Sheet1";

export default function NewsDetailPage({
  params,
}: {
  params: { title: string };
}) {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const targetTitle = decodeURIComponent(params.title);

    fetch(NEWS_API)
      .then((res) => res.json())
      .then((data) => {
        const found = (data || []).find((item: any) => item.title === targetTitle);
        setNews(found || null);
      })
      .catch(() => setNews(null));
  }, [params.title]);

  if (!news) {
    return (
      <Layout>
        <p className="text-center mt-10">Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our <span className="text-red-900">News & Services</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay updated and explore everything at JCS
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <iframe
          src="https://drive.google.com/file/d/15iRYOT2VfSYfkAwsxUn0f7JoN2OzC40T/preview"
          width="100%"
          height="400"
          className="rounded mb-4"
        />

        <h1 className="text-3xl font-bold">{news.title}</h1>

        <h3 className="text-gray-600 mt-2">{news.subheading || ""}</h3>

        <div className="mt-4 text-base">{news.desc}</div>
      </div>
    </Layout>
  );
}
