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
  <footer className="gradient-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/placeholder.svg" alt="Jayarani College Logo" className="w-12 h-12 object-contain" />
            <span className="font-heading font-bold text-lg">Jayarani College</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Committed to academic excellence, innovation, and holistic development of students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Courses", "Innovation", "Placement"].map((l) => (
              <Link
                key={l}
                href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="block text-sm text-primary-foreground/70 hover:text-secondary transition"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Courses</h4>
          <div className="space-y-2">
            {["B.A. English", "B.Com", "B.Com CA", "B.Sc Maths", "B.Sc CS", "B.Sc AI & DS"].map((c) => (
              <p key={c} className="text-sm text-primary-foreground/70">{c}</p>
            ))}
          </div>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-primary-foreground/70 mb-4">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" />
              Salem, Tamil Nadu
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 91500 99240
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@jayaranicollege.edu.in
            </p>
          </div>

          {/* Social Icons */}
          <div className="grid grid-cols-3 gap-3">
            <a href="https://www.facebook.com/jayaranicollegesalem" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/jayaranicollegesalem/" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-pink-500 hover:text-white transition-all duration-300">
              <FaInstagram />
            </a>

            <a href="https://x.com/Jayaranisalem" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-black hover:text-white transition-all duration-300">
              <FaXTwitter />
            </a>

            <a href="https://www.linkedin.com/in/jayaranicollegesalem/" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-700 hover:text-white transition-all duration-300">
              <FaLinkedinIn />
            </a>

            <a href="https://wa.me/919150099240" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-green-500 hover:text-white transition-all duration-300">
              <FaWhatsapp />
            </a>

            <a href="#"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-red-600 hover:text-white transition-all duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Jayarani College. All rights reserved.
      </div>
    </div>
    
  </footer>
);

export default Footer;