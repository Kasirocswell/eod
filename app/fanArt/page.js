"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function FanArt() {
  const [selectedArt, setSelectedArt] = useState(null);

  const fanArts = [
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover9.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover10.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover11.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover12.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover13.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover14.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover15.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover16.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover17.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover18.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover19.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover20.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover21.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover22.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover23.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover24.png",
    },
    {
      title: "Epic Battle",
      artist: "John Doe",
      image: "/backgrounds/cover8.png",
    },
    // ... Add other fan arts in a similar format with their respective images
  ];

  return (
    <div>
      <div
        className="w-screen h-screen"
        style={{
          backgroundImage: "url(/backgrounds/cover8.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <section className="relative flex justify-center items-center h-full">
          <div className="grid grid-cols-8 gap-4 bg-white bg-opacity-60 p-8 rounded-lg h-[calc(100% - 5rem)] overflow-y-auto mt-[-500px]">
            {fanArts.map((art) => (
              <button
                key={art.title}
                className="border rounded  border-black text-black hover:bg-opacity-80"
                onClick={() => setSelectedArt(art)}
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  width={100}
                  height={100}
                  className="rounded mb-2"
                />
              </button>
            ))}
          </div>
        </section>

        {selectedArt && (
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/2">
              <Image
                src={selectedArt.image}
                alt={selectedArt.title}
                width={400}
                height={400}
                className="rounded mx-auto mb-4"
              />
              <h2 className="text-black text-2xl font-bold mb-4">
                {selectedArt.title}
              </h2>
              <p className="text-black">
                <strong>Artist:</strong> {selectedArt.artist}
              </p>
              <button
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => setSelectedArt(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
