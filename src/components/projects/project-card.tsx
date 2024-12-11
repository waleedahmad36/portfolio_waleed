import { useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";
import {  X } from 'lucide-react';

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  iframeSrc?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.4,
        }}
        className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
      >
        <Corosel images={props.imageUrl} aspectRatio={2.1} />
        <div className="p-3 text-foreground sm:p-4">
          <div className="flex items-center gap-3">
            <span className="relative h-5 w-5">
              <Image src={props.favicon} alt="logo" fill />
            </span>
            <span className="text-sm font-semibold">{props.name}</span>
          </div>
          <div className="mt-3">
            <p className="text-xs md:text-sm">{props.description}</p>
          </div>
          <div className="mt-6 flex items-center justify-end gap-6">
            <a
              href={props.sourceCodeHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <GithubIcon className="h-5 w-5" /> Source code
            </a>
            {props.iframeSrc ? (
              <button
                onClick={openModal}
                className="flex items-center gap-1 text-xs underline md:text-sm"
              >
                Watch demo video
              </button>
            ) : (
              props.liveWebsiteHref && (
                <button
                  onClick={openModal}
                  className="flex items-center gap-1 text-xs underline md:text-sm"
                >
                  <FiExternalLink className="h-5 w-5" /> Live
                </button>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal for iframe or video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black"     onClick={closeModal} >
                   <div className="relative rounded-lg p-5 w-11/12 max-w-4xl bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"      >
            <button
              onClick={closeModal}
              className="absolute top-10 right-8 text-xl font-bold z-50 text-gray-700"
            >
              <X    className='font-extrabold cursor-pointer'  />
            </button>
            {props.iframeSrc ? (
              <iframe
                src={props.iframeSrc}
                width="100%"
                height="500px"
                className="rounded-md"
                title={props.name}
              />
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold">Live Demo</h2>
                <p className="mt-4">
                  This project is live! Visit it <a href={props.liveWebsiteHref} target="_blank" className="text-blue-500 underline">here</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
