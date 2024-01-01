'use client'
import styles from './page.module.scss'
import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function TextMaskAnimation({ phrases, color = "#FDBA74" }) {

  return (
    <div className={styles.container}>
      <MaskText phrases={phrases} color={color} />
    </div>
  )
}

export function MaskText({ phrases, color }) {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={styles.body}>
      {
        phrases.map((phrase, index) => {
          return <div key={index} style={{color}}  className={`${styles.lineMask} font-montserrat text-[1.7rem] md:text-5xl lg:text-[2.5rem] xl:text-[3.5rem]`}>
            <motion.h1 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.h1>
          </div>
        })
      }
    </div>
  )
}