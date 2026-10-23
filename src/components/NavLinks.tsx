import Link from 'next/link';
import React from 'react';
import { IDataResponse} from '../types/type';

const NavLinks = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data: IDataResponse = await res.json();
    const navs = data.data
    const filterNavs = navs.filter(n => n.scrapable)

    return (
        <div className="flex items-center justify-center container mx-auto bg-white ">

            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-red-700">
                হোম
            </Link>
            {
                filterNavs.map((n,i) => <Link key={i} href={`/category/${n.slug}`} className="px-4 py-2 text-gray-700 hover:text-red-700">
                    {n.title}
                </Link>)
            }
        </div>
    );
};

export default NavLinks;