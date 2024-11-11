import Image from 'next/image';

interface mobileProps {
  img: string;
  name: string;
  about: string;
  link: string;
}

const Mobile: React.FC<mobileProps> = ({ img, name, about, link }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-5 text-white w-full md:w-1/3 mt-4 transition-transform transform hover:scale-105 flex flex-col md:flex-row gap-4">
      {/* Image Section */}
      <div className="mb-4 w-full md:w-1/2">
        <Image 
          src={img} 
          alt={name} 
          width={400} 
          height={250} 
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Text Section */}
      <div className='flex flex-col w-full md:w-1/2'>
        <h2 className="text-2xl font-bold uppercase tracking-wide text-red-600">{name}</h2>
        <p className="text-sm text-gray-300 leading-6 mt-2">{about}</p>
        <div className="mt-4">
          <button className="w-24 h-8 bg-red-500 text-white hover:bg-transparent hover:border-b-2 hover:border-red-500 transition-all">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center w-full h-full"
            >
              Visit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
