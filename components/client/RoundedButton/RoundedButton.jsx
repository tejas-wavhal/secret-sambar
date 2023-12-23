"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../MagneticEffect/MagneticEffect';
import Link from 'next/link';

export default function RoundedButton({ path, children, defaultTextColor = "white", backgroundColor = "#FB923C", borderColor = "#FB923C", ...attributes }) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <Link href={path} className={`${styles.roundedButton} border-2`} style={{ overflow: "hidden", borderColor, color: defaultTextColor }} onMouseEnter={() => { manageMouseEnter() }} onMouseLeave={() => { manageMouseLeave() }} {...attributes}>
        {
          children
        }
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </Link>
    </Magnetic>
  )
}
