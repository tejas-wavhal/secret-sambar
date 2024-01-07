'use client';
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis';
import React, { useEffect, useRef } from 'react'
import TextMaskAnimation from '../Animations/TextMaskAnimation';
import AnimatedBreakline from '../AnimatedBreakline/AnimatedBreakline';
import GalleryCard from '../GalleryCard/GalleryCard';
import { useScroll } from 'framer-motion';

const GalleryPage = ({ headingPhrases, projects }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <section ref={container} className={`${styles.main}`}>
      <TextMaskAnimation phrases={headingPhrases} color='black' />
      <div className='h-20 overflow-hidden lg:-mb-10 lg:mt-5'>
        <AnimatedBreakline />
      </div>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <GalleryCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </section>
  )
}

export default GalleryPage