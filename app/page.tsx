"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function KavariPolo() {
  const [page, setPage] = useState("home");

  const Nav = () => (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50 flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-bold tracking-widest">KAVARI POLO</h1>
      <div className="flex gap-6 text-sm">
        {["home", "about", "shop", "services", "lookbook", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className="uppercase hover:text-gray-400 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );

  const Home = () => (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl md:text-8xl font-bold"
      >
        KAVARI POLO
      </motion.h1>
      <p className="mt-6 text-gray-400 max-w-xl">
        Style That Rides Beyond the Game. Built for riders, leaders, and those who dominate both sport and lifestyle.
      </p>
      <button
        onClick={() => setPage("shop")}
        className="mt-8 bg-white text-black px-6 py-3 rounded-xl"
      >
        Explore Drops
      </button>
    </section>
  );

  const About = () => (
    <section className="py-32 px-6 md:px-20 text-center">
      <h2 className="text-4xl mb-6">About Kavari</h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Kavari Polo is built at the intersection of sport, luxury, and identity. Inspired by the discipline of polo and the elegance of elite lifestyle, the brand represents power, precision, and modern dominance.
        <br /><br />
        This is not fast fashion. This is legacy.
        <br /><br />
        Built by a rider — for those who lead, not follow.
      </p>
    </section>
  );

  const Shop = () => (
    <section className="py-32 px-6 md:px-20 text-center">
      <h2 className="text-4xl mb-6">Shop</h2>
      <p className="text-gray-400 text-lg">
        COMING SOON — First Drop: Founder’s Edition
      </p>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Limited pieces. Premium quality. Designed to sell out.
      </p>
    </section>
  );

  const Services = () => (
    <section className="py-32 px-6 md:px-20 text-center">
      <h2 className="text-4xl mb-10">What We Provide</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          "Premium Apparel",
          "Custom Polo Gear",
          "Brand Collaborations",
          "Lifestyle & Content Creation",
        ].map((item, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl">
            {item}
          </div>
        ))}
      </div>
    </section>
  );

  const Lookbook = () => (
    <section className="py-32 px-6 md:px-20 text-center">
      <h2 className="text-4xl mb-6">Lookbook</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A glimpse into the Kavari lifestyle — horses, motion, power, and presence. Official shoot coming soon.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-60 bg-gray-900 rounded-2xl" />
        ))}
      </div>
    </section>
  );

  const Contact = () => (
    <section className="py-32 px-6 md:px-20 text-center">
      <h2 className="text-4xl mb-6">Contact</h2>
      <p className="text-gray-400">
        For collaborations, partnerships, and business inquiries.
      </p>
      <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl">
        Get in Touch
      </button>
    </section>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <div className="pt-20">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "shop" && <Shop />}
        {page === "services" && <Services />}
        {page === "lookbook" && <Lookbook />}
        {page === "contact" && <Contact />}
      </div>

      <footer className="py-10 text-center text-gray-500">
        © {new Date().getFullYear()} Kavari Polo — Built for Legacy
      </footer>
    </div>
  );
}