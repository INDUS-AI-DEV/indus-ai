import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export default function TeamMember({
  name,
  role,
  bio,
  image,
  linkedin,
}: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
        <div className="aspect-[3/4] sm:aspect-[1/1]">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300"
            width={300}
            height={300}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 font-raleway">
            {name}
          </h3>
          <p className="text-sm text-gray-600 font-raleway">{role}</p>
          <p className="mt-2 text-sm text-gray-500 font-raleway line-clamp-2">
            {bio}
          </p>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-sm text-[#2C514C] hover:text-[#1a3330] transition-colors"
            >
              <svg
                className="h-4 w-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
