
import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
});

const Header = () => {

    return (
        <div className="relative flex justify-between items-center p-4 container mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <Image
                    src="/logo.webp"
                    className="h-10 w-10"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <div>
                    <h2 className="text-xl font-bold text-red-600">
                        SAIFUL News 24
                    </h2>
                    <div className="text-sm text-gray-500">{date}</div>
                </div>
            </div>

            <div className="ml-auto">
                <button className=" px-4 py-2 rounded-md hover:text-red-700">
                    সাইন ইন
                </button>
                <button className=" btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    সাইন আপ
                </button>
            </div>
        </div>
    );
};

export default Header;