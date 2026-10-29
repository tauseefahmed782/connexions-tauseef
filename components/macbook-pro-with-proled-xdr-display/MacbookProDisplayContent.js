"use client";

import { useEffect, useRef } from "react";

export default function MacbookProDisplayContent() {
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
    <section aria-label="MacBook Pro with PROLED XDR Display" className="bg-black">
      <h1 className="sr-only">MacBook Pro with PROLED XDR Display</h1>
      <iframe
        ref={frameRef}
        src="/assets/macbook-pro-with-proled-xdr-display/index.html"
        title="MacBook Pro with PROLED XDR Display features and comparison"
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

