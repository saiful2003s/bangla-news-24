import Image from 'next/image';
import { INewsSectionsResponse } from '../types/type';


const NewsSection = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const data: INewsSectionsResponse = await res.json();
    const news = data.data;
    const mainNews = news[0].articles[0];
    const otherNews = news[0].articles.slice(1);

    const otherSectionsNews = news.slice(1)




    return (
        <div className="col-span-2 p-4">
            {/* main news section */}
            <div className="grid grid-cols-2 gap-4">
                {/* mainNews card */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image
                            src={mainNews.imageUrl}
                            width={400}
                            height={300}
                            alt={mainNews.imageAlt} />
                    </figure>
                    <div className="card-body">
                        <h3 className='text-rose-600'>{news[0].title}</h3>
                        <h2 className="card-title font-bold">{mainNews.title}</h2>
                        <p>{mainNews.description}</p>
                        <p>
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
                </div>
                {/* Others News */}
                <div className="overflow-hidden rounded-box border border-base-300 bg-base-100">
                    <ul className="list">
                        {otherNews.slice(0, 4).map((on) => (
                            <li
                                key={on.id}
                                className="border-b border-base-300 p-4 last:border-b-0 hover:bg-base-200 transition-colors"
                            >
                                <h4 className='text-rose-600 font-semibold'>{news[0].title}</h4>

                                <h3 className=" font-semibold leading-relaxed text-lg">
                                    {on.title}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Other Sections News */}
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
                                        <div key={a.id} className="card bg-base-100 shadow-sm">
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
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default NewsSection;