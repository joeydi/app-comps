import { useEffect, useRef, useState } from "react";

export default function ResizeIndicator() {
    const resizeNode = useRef(null);

    const [active, setActive] = useState(false);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        let timeout;

        const resizeHandler = () => {
            setActive(true);
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                setActive(false);
            }, 1000);

            setScale(window.innerWidth / 1920);
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div ref={resizeNode} className="resize-indicator" style={{ transform: `scale(${scale})`, opacity: active ? 1 : 0 }}>
            {`${Math.round(scale * 100)}%`}
        </div>
    );
}
