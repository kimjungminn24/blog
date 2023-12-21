import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className:
      "text-2xl text-skin-accent hover:bg-gradient-to-r hover:bg-clip-text  hover:text-transparent hover:from-red-500 hover:via-green-500 hover:to-indigo-500 hover:animate-text",
  };

  return (
    <div className="flex items-center justify-center text-center ">
      <a href={href}>
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
    </div>
  );
}
