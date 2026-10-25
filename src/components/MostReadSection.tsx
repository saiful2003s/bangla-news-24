import Link from 'next/link';
import React from 'react';
import { IMostReadNewsResponse } from '../types/type';

const MostReadSection = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data: IMostReadNewsResponse = await res.json()
    const news = data.data

    return (
        <div className="col-span-1 p-4 ">

            <div className="overflow-hidden rounded-box border border-base-300 bg-base-100 p-4">
                <h2 className="text-xl font-bold mb-4 text-red-600">সর্বাধিক পঠিত</h2>
                <ol className="list-decimal list-inside marker:text-red-600 marker:text-lg marker:font-bold">
                    {
                        news.map(n => (
                            <li key={n.id} className="mb-2 font-semibold">
                                {n.title}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

export default MostReadSection;