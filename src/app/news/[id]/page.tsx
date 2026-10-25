
import Image from "next/image";
import { notFound } from "next/navigation";

type ArticleBlock = {
  type?: string;
  model?: {
    text?: string;
    blocks?: ArticleBlock[];
  };
};

function extractText(blocks: ArticleBlock[] = []): string[] {
  return blocks.flatMap((block) => {
    const model = block.model;

    if (!model) return [];

    const texts: string[] = [];

    if (typeof model.text === "string" && model.text.trim()) {
      texts.push(model.text.trim());
    }

    if (Array.isArray(model.blocks)) {
      texts.push(...extractText(model.blocks));
    }

    return texts;
  });
}

function getText(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return "";
}

const NewsCardDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${id}`
  );

  if (res.status === 404) notFound();

  if (!res.ok) {
    throw new Error("নিউজ লোড করা যায়নি।");
  }

  const result = await res.json();
  const news = result?.data;

  if (!news) notFound();

  const descriptionBlocks = news.description?.blocks;

  const description = Array.isArray(descriptionBlocks)
    ? extractText(descriptionBlocks).join("\n\n")
    : "";

  const title = getText(news.title);
  const imageUrl = getText(news.imageUrl);
  const imageAlt = getText(news.imageAlt) || title;
  const category = getText(news.category);

  const publishedDate = news.firstPublished
    ? new Date(news.firstPublished)
    : null;

  const formattedDate =
    publishedDate &&
    !Number.isNaN(publishedDate.getTime())
      ? publishedDate.toLocaleString("bn-BD", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Dhaka",
        })
      : "প্রকাশের তারিখ পাওয়া যায়নি";

  return (
    <main className="min-h-screen bg-base-200 px-3 py-6 sm:px-6 sm:py-10">
      <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-base-100 shadow-md">
        <div className="p-5 sm:p-8">
          {category && (
            <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white">
              {category}
            </span>
          )}

          <h1 className="mb-5 text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
            {title || "শিরোনাম পাওয়া যায়নি"}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-base-content/60">
            <span>প্রকাশিত</span>
            <span aria-hidden="true">•</span>
            <time>
              {formattedDate}
            </time>
          </div>

          {imageUrl && (
            <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-xl bg-base-200">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          <div className="border-l-4 border-red-600 pl-4">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">
              বিস্তারিত সংবাদ
            </h2>

            {description ? (
              <div className="space-y-5 text-base leading-8 text-base-content/80 sm:text-lg sm:leading-9">
                {description
                  .split(/\n\n+/)
                  .filter((paragraph: string) => paragraph.trim())
                  .map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            ) : (
              <p className="text-base-content/60">
                এই সংবাদটির বিস্তারিত বিবরণ পাওয়া যায়নি।
              </p>
            )}
          </div>
        </div>
      </article>
    </main>
  );
};

export default NewsCardDetailsPage;
