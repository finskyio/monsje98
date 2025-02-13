'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ExpandingText: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const acceleratedProgress = useTransform(scrollYProgress, [0, 0.4], [0, 2]);
  const scale = useTransform(acceleratedProgress, [0, 1], [0.1, 10]);
  const smoothScale = useSpring(scale, { stiffness: 2000, damping: 30 });

  return (
    <div style={{ height: '200vh' }}>
      <div
        style={{
          position: 'sticky',
          top: "-200px",
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.h4
          style={{
            scale: smoothScale,
            originX: 0.5,
            originY: 0.5,
            fontSize: '1rem',
            letterSpacing: '-0.05em',
            margin: 0,
            height: '0.5em',
          }}
        >
          M98
        </motion.h4>
        <motion.h4
          style={{
            scale: smoothScale,
            originX: 0.5,
            originY: 0.5,
            fontSize: '1rem',
            letterSpacing: '-0.05em',
            margin: 0,
            marginTop: '150px',
          }}
        >
          philosophy
        </motion.h4>
      </div>
    </div>
  );
};

export default ExpandingText;
