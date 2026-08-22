import { Link } from "react-router";
import {
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import MyContainer from "../../MyContainer/MyContainer";

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-[#A1A1AA] pt-12">
            <MyContainer className="">

                {/* Footer Content */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Logo & Description */}
                    <div>
                        <Link
                            to="/"
                            className="text-xl font-bold text-white"
                        >
                            Smart
                            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Deals
                            </span>
                        </Link>

                        <p className="mt-4 max-w-60 text-sm leading-6">
                            Your trusted marketplace for authentic local
                            products. Discover the best deals from across
                            Bangladesh.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="/allProducts"
                                    className="transition hover:text-white"
                                >
                                    All Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="transition hover:text-white"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="transition hover:text-white"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/register"
                                    className="transition hover:text-white"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="#"
                                    className="transition hover:text-white"
                                >
                                    Electronics
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="transition hover:text-white"
                                >
                                    Fashion
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="transition hover:text-white"
                                >
                                    Home & Living
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="transition hover:text-white"
                                >
                                    Groceries
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Contact & Support
                        </h3>

                        <ul className="space-y-4 text-sm">

                            <li className="flex items-center gap-2">
                                <FiMail className="shrink-0 text-base" />

                                <Link
                                    to="mailto:support@smartdeals.com"
                                    className="transition hover:text-white"
                                >
                                    support@Smartdeals.com
                                </Link>
                            </li>

                            <li className="flex items-center gap-2">
                                <FiPhone className="shrink-0 text-base" />

                                <Link
                                    to="tel:+880123456789"
                                    className="transition hover:text-white"
                                >
                                    +880 123 456 789
                                </Link>
                            </li>

                            <li className="flex items-start gap-2">
                                <FiMapPin className="mt-1 shrink-0 text-base" />

                                <span>
                                    123 Commerce Street,
                                    <br />
                                    Dhaka, Bangladesh
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Social Links
                        </h3>

                        <div className="flex items-center gap-3">

                            <Link
                                to="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A1A1AA]/30 transition hover:border-transparent hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                            >
                                <FaXTwitter />
                            </Link>

                            <Link
                                to="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A1A1AA]/30 transition hover:border-transparent hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                            >
                                <FaLinkedinIn />
                            </Link>

                            <Link
                                to="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A1A1AA]/30 transition hover:border-transparent hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                            >
                                <FaFacebookF />
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 border-t border-[#A1A1AA]/20 py-6 text-center">
                    <p className="text-sm font-medium">
                        © 2025 SmartDeals. All rights reserved.
                    </p>
                </div>
            </MyContainer>
        </footer>
    );
};

export default Footer;