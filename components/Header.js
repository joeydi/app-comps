import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ResizeIndicator from "@/components/ResizeIndicator";

export default function Header() {
    const backdropNode = useRef(null);

    const [scale, setScale] = useState(0);

    const scrollHandler = () => {
        setScale(window.scrollY / 200);
    };

    useEffect(() => {
        scrollHandler();

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/industry">Industries</Link>
            <Link href="/about">About Us</Link>
            <div ref={backdropNode} className="backdrop" style={{ opacity: scale }}></div>
            <img src="/header-light.png" width="3840" height="200" alt="" />
            <ResizeIndicator />
        </header>
    );
}
