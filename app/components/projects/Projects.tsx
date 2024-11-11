import Image from 'next/image';
interface ProjProps {
  img: string;
  name: string;
  about: string;
  link:string;
}
const Projects: React.FC<ProjProps> = ({ img, name, about, link }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-5 text-white w-full md:w-1/3 mt-4 transition-transform transform hover:scale-105">
      <div className="mb-4">
        <Image src={img} alt={name} width={400} height={250} className="object-cover w-full h-full " />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-red-600 sm:text-xl">{name}</h2>
      </div>
      <div>
        <p className="text-sm text-gray-300 leading-6">{about}</p>
      </div>
      <div className="mt-4">
        <button className="w-24 h-8 bg-red-500 text-white hover:bg-transparent hover:border-b-2 hover:border-red-500 transition-all">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            Visit
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
