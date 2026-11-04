"use client";

import { useEffect } from "react";
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

  // Posição do mouse dentro do card .spot, usada pelo brilho em app/globals.css
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".spot") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <>
      <div
        ref={v.siteRef}
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
