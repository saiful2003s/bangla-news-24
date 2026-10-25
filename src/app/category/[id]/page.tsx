
import Image from 'next/image';
import { ICategoryNewsResponse } from '@/src/types/type';
import Link from 'next/link';

const CategoryNewsPage = async ({
  params
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`
  );

  if (!res.ok) {
    return <p className="p-4">সংবাদ লোড করা যায়নি।</p>;
  }

  const data: ICategoryNewsResponse = await res.json();
  const categoryNews = data.data;

  return (
    <div className="container mx-auto p-4">
      <h3 className="mb-2 text-lg font-semibold">
        {data.title}
      </h3>

      <div className="bg-red-600 py-px mb-5"></div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="card bg-base-100 shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            {news.imageUrl && (
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={news.imageUrl}
                  alt={news.imageAlt || news.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
            )}

            <div className="card-body">
              <h4 className="text-red-600">
                {news.category}
              </h4>

              <h2 className="card-title line-clamp-2">
                {news.title}
              </h2>

              {news.description && (
                <p className="line-clamp-3 text-gray-600">
                  {news.description}
                </p>
              )}

              <p className="text-sm text-gray-500">
                {news.firstPublished
                  ? new Date(news.firstPublished).toLocaleString(
                    'bn-BD',
                    {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                      timeZone: 'Asia/Dhaka',
                    }
                  )
                  : 'প্রকাশের তারিখ পাওয়া যায়নি'}
              </p>

              <span
                className="mt-2 text-sm font-semibold text-red-600"
              >
                বিস্তারিত পড়ুন →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsPage;
