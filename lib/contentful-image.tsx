"use client";

import Image from "next/image";

import type { ContentfulImageProps } from "../shared/utils";
import { contentfulLoader } from "../shared/utils";

export default function ContentfulImage(props: ContentfulImageProps) {
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />;
}
