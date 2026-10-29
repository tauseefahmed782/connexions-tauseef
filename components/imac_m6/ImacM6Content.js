"use client";

import { useEffect, useRef } from "react";

export default function ImacM6Content() {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    let observer;
    const resize = () => {
      const content = frame.contentDocument?.querySelector("#product-viewport");
      if (content) frame.style.height = `${Math.ceil(content.getBoundingClientRect().height)}px`;
    };
    const connect = () => {
      observer?.disconnect();
      const content = frame.contentDocument?.querySelector("#product-viewport");
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
    <section aria-label="iMac M6" className="bg-white">
      <h1 className="sr-only">iMac M6</h1>
      <iframe
        ref={frameRef}
        src="/assets/imac_m6/index.html"
        title="iMac M6 features and comparison"
        className="block w-full border-0"
        style={{ height: "100vh" }}
        onLoad={(event) => {
          const content = event.currentTarget.contentDocument?.querySelector("#product-viewport");
          if (content) event.currentTarget.style.height = `${Math.ceil(content.getBoundingClientRect().height)}px`;
        }}
      />
    </section>
  );
}


