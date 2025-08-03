import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <Link
            href="https://instagram.com/un_finished_sentenc"
            target="_blank"
          >
            <Instagram />
          </Link>
        </li>
        <li className="hover:text-purple-600">
          <Link
            href="https://www.linkedin.com/in/arjuna-rawat-814979198"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li className="hover:text-purple-600">
          <Link href="https://github.com/rawat4arjuna" target="_blank">
            <Github />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
