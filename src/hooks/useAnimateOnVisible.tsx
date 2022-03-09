import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type Props = {
    children?: React.ReactNode;
};

function AnimateOnVisible({ children }: Props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ delay: 0.4, duration: 0.3 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}

export { AnimateOnVisible };
