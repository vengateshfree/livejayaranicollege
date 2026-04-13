import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-16">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/placeholder.svg"
              alt="Jayarani College Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-lg">
              Jayarani College
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Committed to academic excellence, innovation, and holistic development of students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Quick Links
          </h4>

          <div className="space-y-2">
            {["Home", "Courses", "Innovation", "Placement"].map((l) => (
              <Link
                key={l}
                href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="block text-sm text-gray-300 hover:text-yellow-400 transition"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Courses
          </h4>

          <div className="space-y-2">
            {[
              "B.A. English",
              "B.Com",
              "B.Com CA",
              "B.Sc Maths",
              "B.Sc CS",
              "B.Sc AI & DS",
            ].map((c) => (
              <p
                key={c}
                className="text-sm text-gray-300"
              >
                {c}
              </p>
            ))}
          </div>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Contact
          </h4>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-gray-300 mb-4">

            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-yellow-400" />
              Salem, Tamil Nadu
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              +91 91500 99240
            </p>

            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              info@jayaranicollege.edu.in
            </p>

          </div>

          {/* Social Icons */}
          <div className="grid grid-cols-3 gap-3">

            <a
              href="https://www.facebook.com/jayaranicollegesalem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jayaranicollegesalem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/Jayaranisalem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-black transition-all duration-300"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/jayaranicollegesalem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-700 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919150099240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jayarani College. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;