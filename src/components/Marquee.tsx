import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { INews, INewsResponse } from "../types/type";

const Marquee = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news');
    const data: INewsResponse = await res.json();
    const news: INews[] = data.data;


    return (
        <div className="bg-red-600">
            <div className="  w-full overflow-hidden flex container mx-auto">
            <p className=" bg-red-800 text-white font-bold flex items-center p-2">সর্বশেষ</p>
            <MarqueeText duration={10} direction="right" className=" py-2">
            {
                news.map(n => 
                    <span className="" key={n.id}>
                        <span className=" text-white">{n.title}</span>
                        <span className="mx-3 text-gray-300">•</span>
                    </span>
                )
            }
        </MarqueeText>
        </div>
        </div>
    );
};

export default Marquee;