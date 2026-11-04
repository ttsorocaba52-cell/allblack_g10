"use client";

import { useMediaKit, type MediaKitOptions } from "./useMediaKit";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Instagram } from "./sections/Instagram";
import { Stories } from "./sections/Stories";
import { YouTube } from "./sections/YouTube";
import { Audience } from "./sections/Audience";
import { Campaigns } from "./sections/Campaigns";
import { Projects } from "./sections/Projects";
import { Formats } from "./sections/Formats";
import { Contact } from "./sections/Contact";
import { Modal } from "./sections/Modal";

export function MediaKit(props: MediaKitOptions) {
  const v = useMediaKit(props);
  return (
    <>
      <div
        ref={v.siteRef}
        className="site"
        style={{ containerType: "inline-size", background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", overflowX: "clip" }}
      >
        <Nav v={v} />
        <Hero v={v} />
        <About v={v} />
        <Instagram v={v} />
        <Stories v={v} />
        <YouTube v={v} />
        <Audience v={v} />
        <Campaigns v={v} />
        <Projects v={v} />
        <Formats v={v} />
        <Contact v={v} />
      </div>
      <Modal v={v} />
    </>
  );
}
