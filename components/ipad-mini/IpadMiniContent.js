"use client";

import { useEffect, useRef } from "react";

export default function IpadMiniContent() {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    let observer;
    const resize = () => {
      const content = frame.contentDocument?.querySelector(".channel-html");
      if (content) frame.style.height = `${Math.ceil(content.getBoundingClientRect().height)}px`;
    };
    const connect = () => {
      observer?.disconnect();
      const content = frame.contentDocument?.querySelector(".channel-html");
      if (content) {
        observer = new ResizeObserver(resize);
        observer.observe(content);
        resize();
      }
    };
    frame.addEventListener("load", connect);
    connect();
    return () => {
      frame.removeEventListener("load", connect);
      observer?.disconnect();
    };
  }, []);

  return (
    <section aria-label="iPad mini" className="bg-white">
      <h1 className="sr-only">iPad mini</h1>
      <iframe
        ref={frameRef}
        src="/assets/ipad-mini/index.html"
        title="iPad mini features and comparison"
        className="block w-full border-0"
        style={{ height: "100vh" }}
        onLoad={(event) => {
          const content = event.currentTarget.contentDocument?.querySelector(".channel-html");
          if (content) event.currentTarget.style.height = `${Math.ceil(content.getBoundingClientRect().height)}px`;
        }}
      />
    </section>
  );
}



