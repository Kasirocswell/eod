"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    {
      name: "Malik",
      image: "/Malik/malik1.png",
      height: "6'2",
      weight: "180 lbs",
      age: 31,
      hometown: "Lagos, Nigeria",
      skills: "Aerial combat, strategic planning, firearms",
      bio: "Former military pilot turned resistance leader. Focused, strategic, and driven to uncover humanity's cosmic destiny.",
    },
    {
      name: "Zara",
      image: "/Zara/zara1.png",
      height: "5'7",
      weight: "155 lbs",
      age: 27,
      hometown: "Lawton, Oaklahoma",
      skills: "Krav Maga, Tech Saavy, Engineering",
      bio: "Skilled engineer/hacker. Intelligent, resourceful, and fiercely loyal.",
    },
    {
      name: "Aisha",
      image: "/Aisha/aisha1.png",
      height: "5'5",
      weight: "140 lbs",
      age: 25,
      hometown: "Lagos, Nigeria",
      skills: "Nursing, first aid, empathy, leadership, warrior.",
      bio: "Malik's sister, a nurse with a nurturing spirit. Caring, brave, and committed to helping others.",
    },
    {
      name: "Dr. Nia",
      image: "/Nia/nia1.png",
      height: "5'9",
      weight: "166 lbs",
      age: 35,
      hometown: "Brooklyn, New York",
      skills: "Medical expertise, research, emotional intelligence",
      bio: "A brilliant scientist. Compassionate, wise, and dedicated to understanding the invasion's purpose.",
    },
    {
      name: "Diego",
      image: "/Diego/diego1.png",
      height: "6'0",
      weight: "150 lbs",
      age: 25,
      hometown: "Los Angeles, California",
      skills: "Engineering, tech-savvy, problem-solving, stealth.",
      bio: "A tech-savvy hacker. Passionate about technology and always eager to find a solution",
    },
    {
      name: "Lena",
      image: "/Lena/lena1.png",
      height: "5'10",
      weight: "170 lbs",
      age: 32,
      hometown: "San Francisco, California",
      skills: "Swordsmanship, leadership, agility.",
      bio: "Enigmatic swordmaster with a mysterious past. Leads the resistance with unmatched skill and a thirst for justice",
    },
    {
      name: "Captain Uri",
      image: "/Uri/uri1.png",
      height: "5'6",
      weight: "135 lbs",
      age: 65,
      hometown: "Unknown",
      skills: "Command, strategy, interstellar navigation",
      bio: "Wise, experienced, and focused on humanity's universal mission",
    },
    {
      name: "Commander Idris",
      image: "/Idris/idris1.png",
      height: "6'0",
      weight: "185 lbs",
      age: 50,
      hometown: "Unknown",
      skills: "Military strategy, leadership, diplomacy",
      bio: "High-ranking military officer.",
    },
    {
      name: "Nyx",
      image: "/Nyx/nyx1.png",
      height: "6'9",
      weight: "160 lbs",
      age: 38,
      hometown: "Uknown",
      skills: "Advanced science, research, leadership",
      bio: "Lead scientist. Enigmatic, intelligent, and deeply invested in humanity's cosmic role",
    },
    {
      name: "Sentinel",
      image: "/Sentinel/sentinel1.png",
      height: "6'7",
      weight: "400 lbs",
      age: 0,
      hometown: "Unkown",
      skills: "Combat, guidance, adaptability",
      bio: "Advanced robot soldier",
    },
  ];

  return (
    <div>
      <div
        className="w-screen h-screen"
        style={{
          backgroundImage: "url(/backgrounds/cover6.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <section className="relative flex justify-center items-center h-full">
          <div className="grid grid-cols-4 gap-4 bg-white bg-opacity-60 p-8 rounded-lg mt-[-200px]">
            {characters.map((character) => (
              <button
                key={character.name}
                className="text-center p-4 border border-black text-black rounded hover:bg-opacity-80 flex flex-col items-center"
                onClick={() => setSelectedCharacter(character)}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-2"
                />
                {character.name}
              </button>
            ))}
          </div>
        </section>

        {selectedCharacter && (
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/2 text-black">
              <Image
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                width={500}
                height={500}
                className="rounded-xl mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">
                {selectedCharacter.name}
              </h2>
              <p>
                <strong>Height:</strong> {selectedCharacter.height}
              </p>
              <p>
                <strong>Weight:</strong> {selectedCharacter.weight}
              </p>
              <p>
                <strong>Age:</strong> {selectedCharacter.age}
              </p>
              <p>
                <strong>Hometown:</strong> {selectedCharacter.hometown}
              </p>
              <p>
                <strong>Skills:</strong> {selectedCharacter.skills}
              </p>
              <p>
                <strong>Bio:</strong> {selectedCharacter.bio}
              </p>
              <button
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => setSelectedCharacter(null)}
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
