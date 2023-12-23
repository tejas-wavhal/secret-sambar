'use client';
import styles from './page.module.scss'
import { projects } from './data';
import GalleryCard from '@/components/client/GalleryCard/GalleryCard';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import TextMaskAnimation from '@/components/client/Animations/TextMaskAnimation';

export default function Gallery() {

  const headingPhrases = [
    "Visual Feast of South Indian Cuisine",
    "Journey Through Flavorful Memories",
    "Experience Culinary Artistry at Secret Sambar."
  ];
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <main ref={container} className={styles.main}>
      <TextMaskAnimation phrases={headingPhrases}/>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <GalleryCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}
