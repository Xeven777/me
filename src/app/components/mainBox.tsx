import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function LinktreePage() {
  return (
    <div className="min-h-screen px-2 p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <Image
        src={"/anish.svg"}
        width={50}
        height={50}
        alt="AnishLogo"
        className="absolute top-2 left-2 size-6 md:size-12 md:top-8 md:left-8 cursor-none pointer-events-auto"
      />
      <div className="w-full flex flex-col lg:flex-row max-w-6xl neubox rounded-3xl shadow-xl overflow-hidden">
        <div className="lg:w-1/2 p-10 sm:p-24 flex flex-col items-center lg:items-start justify-center">
          <Image
            width={200}
            height={200}
            src="https://media.licdn.com/dms/image/v2/D5603AQFA732S8EyL5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706852008341?e=1734566400&v=beta&t=8s1TGMOG7PVcWSdY7iz3dE4ay26I1CgzpRCXAbC-wCQ"
            alt="Profile"
            className="size-40 neuboxsm object-cover border-4 border-white mb-6"
          />
          <h1 className="text-4xl font-bold text-zinc-700/90 mb-2">
            Anish Biswas
          </h1>
          <p className="text-xl text-zinc-500/90 mb-6">
            Web Developer & Designer
          </p>
          <div className="flex space-x-4 md:space-x-8 mt-2">
            <SocialIcon Icon={Twitter} href="https://x.com/xevenbiswas" />
            <SocialIcon Icon={Github} href="https://github.com/Xeven777" />
            <SocialIcon
              Icon={Linkedin}
              href="https://www.linkedin.com/in/anishbiswas777/"
            />
            <SocialIcon Icon={Mail} href="mailto:anish7biswas@gmail.com" />
          </div>
        </div>

        <div className="lg:w-1/2 py-10 px-8 sm:p-20">
          <h2 className="text-3xl font-semibold text-zinc-700 mb-6">
            My Links
          </h2>
          <div className="flex flex-col justify-center gap-4 border max-w-md">
            <LinkButton href="https://www.anish7.me/" text="My Portfolio" />
            <LinkButton href="https://blastro.netlify.app/" text="My Blogs" />
            <LinkButton
              href="https://calendly.com/anish7"
              text="Schedule a meet"
            />
            <LinkButton href="#" text="Download My E-book" />
            <LinkButton
              href="https://dub.sh/cooldesign"
              text="Get Free Design Resources✨"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ Icon, href }: { Icon: React.ElementType; href: string }) {
  return (
    <a
      href={href}
      className="text-gray-600 w-full hover:text-gray-800 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
    </a>
  );
}

function LinkButton({ href, text }: { href: string; text: string }) {
  return (
    <a href={href}>
      <button
        className="text-zinc-700 md:text-lg w-full font-medium"
        type="button"
      >
        {text}
      </button>
    </a>
  );
}
