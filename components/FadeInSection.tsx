import React, { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"div">;

export const FadeInSection: React.FC<PropType> = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible) {
                    setVisible(true);
                }
            });
        });
        const currentDomRef = domRef.current;
        if (currentDomRef) {
            observer.observe(currentDomRef);
        }
        return () => {
            if (currentDomRef) {
                observer.unobserve(currentDomRef);
            }
        };
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};
