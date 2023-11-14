import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
    const lenisRef = useRef();

    useEffect(() => {
        function update(time) {
            lenisRef.current?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    });

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <Component {...pageProps} />
        </ReactLenis>
    );
}
