import Image from 'next/image';
import React from 'react';

interface SkillProps {
  img: string;
  name: string;
  about: string;
}

const Skill: React.FC<SkillProps> = ({ img, name, about }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-5 text-white w-full md:w-1/3 mt-4 transition-transform transform hover:scale-105">
      <div className="mb-4">
        <Image src={img} alt={name} width={50} height={50} className="mix-blend-multiply" priority />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-red-600">{name}</h2>
      </div>
      <div>
        <p className="text-sm text-gray-300 leading-6">{about}</p>
      </div>
    </div>
  );
};

export default Skill;
