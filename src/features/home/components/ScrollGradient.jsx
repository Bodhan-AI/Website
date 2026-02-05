import { useScroll, useTransform } from "motion/react"
import { motion } from "motion/react"
import { useRef } from "react"

/**
 * ScrollGradient Component
 * Creates an image that expands/contracts based on scroll position
 */

export default function ScrollGradient({
    direction = "up",
    image = { src: "", alt: "" },
    maxHeight = 6,
    minHeight = 2,
    animation = { start: 100, end: 0 },
}) {
    const { start, end } = animation
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset:
            direction === "up"
                ? [`end ${start}%`, `end ${end}%`]
                : [`start ${end}%`, `start ${start}%`],
    })

    const height = useTransform(
        scrollYProgress,
        [0, 1],
        [`${minHeight}rem`, `${maxHeight}rem`]
    )

    return (
        <motion.img
            ref={container}
            style={{
                width: "100%",
                height,
                transform: direction === "up" ? "rotate(0deg)" : "rotate(180deg)",
            }}
            src={image.src}
            alt={image.alt}
        />
    )
}
