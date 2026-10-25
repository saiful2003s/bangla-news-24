import { ICategoryNewsResponse } from "@/src/types/type";

const CategoryNewsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${id}`
    );

    if (!res.ok) {
        return <p>সংবাদ লোড করা যায়নি।</p>;
    }

    const data: ICategoryNewsResponse = await res.json();
    const categoryNews = data.data;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-red-600">
                {data.title}
            </h1>

            <div className="mt-4 grid grid-cols-1 gap-4">
                {categoryNews.map((news) => (
                    <article key={news.id} className="border-b p-3">
                        <h2 className="font-semibold">
                            {news.title}
                        </h2>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default CategoryNewsPage;
