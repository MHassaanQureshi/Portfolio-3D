import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen flex mt-16 items-center justify-center">
      <div className="w-[100%] lg:w-full text-white p-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl border-b-2 border-red-500 p-2 font-extrabold mt-10 lg:mt-32">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row p-5 flex-wrap lg:mt-12 w-full items-center lg:items-start">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              className="rounded-lg -rotate-90"
              width={300}
              height={300}
            />
          </div>
          <div className="text-lg gap-5 flex flex-col w-full lg:w-1/2">
            <p className="mt-7 text-center lg:text-left">
              I’m a dedicated learner, passionate about acquiring new skills
              and exploring modern technologies. I recently started my journey
              into front-end development and am eager to create user-friendly
              websites. My goal is to become a Full Stack Developer, and I’m
              currently seeking opportunities to grow and improve my front-end
              development skills.
            </p>
            <div className="flex flex-col lg:flex-row gap-10 mt-5 lg:mt-10">
              <ul className="flex flex-col gap-5 marker:text-red-600 list-disc">
                <li>Email: hassaanharoon03@gmail.com</li>
                <li>Location: Karachi, Pakistan</li>
                <li>Age: 21</li>
              </ul>
              <ul className="flex flex-col gap-5 marker:text-red-600 list-disc">
                <li>Nationality: Pakistan</li>
                <li>Education: Federal Urdu University, Karachi</li>
                <li>Degree: Bachelors in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
