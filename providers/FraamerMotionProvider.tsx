import React from "react";
import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from "framer-motion";

const FraamerMotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionProvider reducedMotion="user">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
};

export default FraamerMotionProvider;
