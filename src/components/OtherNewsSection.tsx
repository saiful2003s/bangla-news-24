import Image from 'next/image';
import Link from 'next/link';
import { INewsSectionsResponse } from '../types/type';

const OtherNewsSection = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const data: INewsSectionsResponse = await res.json();
    const news = data.data;
    const mainNews = news[0].articles[0];
    const otherSectionsNews = news.slice(1)

    return (
        <div>
            {
                otherSectionsNews.map(osn => (
                    <div key={osn.curationId} className="mt-8">
                        <h3 className=" font-semibold text-lg mb-2">{osn.title}</h3>
                        <div className="bg-red-600 py-px"></div>
                        {/* news card */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {
                                osn.articles.map(a => (
                                    <Link
                                        href={`/news/${a.id}`}
                                        key={a.id}
                                        className="card bg-base-100 shadow-sm
                                                  transition-all duration-300 ease-in-out
                                                   hover:-translate-y-1 hover:shadow-xl
                                                  cursor-pointer"
                                    >
                                        <figure>
                                            <Image
                                                width={400}
                                                height={300}
                                                src={a.imageUrl}
                                                alt={a.imageAlt || a.title} />
                                        </figure>
                                        <div className="card-body ">
                                            <h4 className='text-red-600'>{osn.title}</h4>
                                            <h2 className="card-title line-clamp-2">{a.title}</h2>
                                            <p className="text-gray-600 line-clamp-3">{a.description}</p>
                                            <p className="text-gray-500 text-sm">
                                                {mainNews.firstPublished ?
                                                    new Date(mainNews.firstPublished).toLocaleString('bn-BD', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                        weekday: 'long',
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: true,
                                                        timeZone: 'Asia/Dhaka'
                                                    }) : 'প্রকাশের তারিখ পাওয়া যায়নি'
                                                }

                                            </p>

                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default OtherNewsSection;