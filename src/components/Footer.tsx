
import Link from "next/link";
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaXTwitter,
    FaNewspaper,
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
    // const currentYear = new Date().getFullYear();
    const currentYear = 2026;

    return (
        <footer className="mt-16 bg-neutral text-neutral-content">
            {/* Top accent line */}
            <div className="h-1 w-full bg-red-600" />

            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & About */}
                    <div>
                        <Link href="/" className="mb-5 inline-flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
                                <FaNewspaper className="text-2xl text-white" />
                            </div>

                            <div>
                                <h2 className="text-xl font-extrabold text-white">
                                    Bangla News <span className="text-red-500">24</span>
                                </h2>
                                <p className="text-xs tracking-widest text-neutral-content/60">
                                    সত্যের সাথে প্রতিদিন
                                </p>
                            </div>
                        </Link>

                        <p className="max-w-sm text-sm leading-7 text-neutral-content/70">
                            দেশ ও বিশ্বের সর্বশেষ খবর, রাজনীতি, অর্থনীতি, খেলাধুলা এবং
                            বিনোদনের সংবাদ জানতে আমাদের সাথেই থাকুন।
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-red-600"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-red-600"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-red-600"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-red-600"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            প্রয়োজনীয় লিংক
                        </h3>

                        <ul className="space-y-3 text-sm text-neutral-content/70">
                            <li>
                                <Link href="/" className="transition hover:text-red-400">
                                    হোম
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/politics"
                                    className="transition hover:text-red-400"
                                >
                                    রাজনীতি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/world"
                                    className="transition hover:text-red-400"
                                >
                                    বিশ্ব সংবাদ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/economy"
                                    className="transition hover:text-red-400"
                                >
                                    অর্থনীতি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/sports"
                                    className="transition hover:text-red-400"
                                >
                                    খেলাধুলা
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            সংবাদ বিভাগ
                        </h3>

                        <ul className="space-y-3 text-sm text-neutral-content/70">
                            <li>
                                <Link
                                    href="/category/bengali"
                                    className="transition hover:text-red-400"
                                >
                                    মূলপাতা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/technology"
                                    className="transition hover:text-red-400"
                                >
                                    প্রযুক্তি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/entertainment"
                                    className="transition hover:text-red-400"
                                >
                                    বিনোদন
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/business"
                                    className="transition hover:text-red-400"
                                >
                                    ব্যবসা-বাণিজ্য
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/lifestyle"
                                    className="transition hover:text-red-400"
                                >
                                    জীবনযাপন
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            যোগাযোগ
                        </h3>

                        <ul className="space-y-4 text-sm text-neutral-content/70">
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="mt-1 shrink-0 text-red-500" />
                                <span>ঢাকা, বাংলাদেশ</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaEnvelope className="shrink-0 text-red-500" />
                                <a
                                    href="mailto:info@example.com"
                                    className="break-all transition hover:text-red-400"
                                >
                                    info@example.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaPhone className="shrink-0 text-red-500" />
                                <a
                                    href="tel:+8801000000000"
                                    className="transition hover:text-red-400"
                                >
                                    +880 1000-000000
                                </a>
                            </li>
                        </ul>

                        <Link
                            href="/"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                            <FaArrowUp />
                            হোম পেজে ফিরে যান
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-neutral-content/60 sm:flex-row sm:px-6 sm:text-left">
                    <p>
                        © {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
                    </p>

                    <p>
                        সর্বশেষ খবরের জন্য আমাদের সাথেই থাকুন।
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
