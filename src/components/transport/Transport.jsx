import React, { useEffect, useRef, useState } from "react";
import styles from "./transport.module.css";

const Transport = () => {
  const [length, setLength] = useState(200);
  const targetHeight = useRef(200);
  const currentHeight = useRef(200);
  const lastScrollY = useRef(window.scrollY);
  const animationFrame = useRef(null);
  const transportRef = useRef(null);
  const circleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect = transportRef?.current?.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const img = circleRef.current.querySelector("img");
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      if (scrollDelta > 0) {
        if (containerRect.bottom < viewportHeight) {
          circleRef.current.style.position = "absolute";
          circleRef.current.style.top = `${
            transportRef.current.clientHeight - viewportHeight * 1.05
          }px`;
          descriptionRef.current.style.position = "absolute";
          descriptionRef.current.style.top = `${
            transportRef.current.clientHeight - viewportHeight * 0.5
          }px`;
        } else if (containerRect.top < -800) {
          circleRef.current.style.left = 0;
          descriptionRef.current.style.right = "7.5vw";
          descriptionRef.current.style.opacity = 1;
        } else if (containerRect.top < -400) {
          img.style.opacity = 1;
        } else if (containerRect.top < -250 && viewportWidth > 768) {
          circleRef.current.style.top = `-${viewportHeight * 0.05}px`;
        } else if (containerRect.top < 0) {
          targetHeight.current = viewportHeight * 1.1;
          circleRef.current.style.position = "fixed";
        }
      } else {
        if (containerRect.top > 0) {
          targetHeight.current = 200;
          circleRef.current.style.position = "absolute";
        } else if (containerRect.top > -250) {
          circleRef.current.style.top = "20px";
        } else if (containerRect.top > -400) {
          img.style.opacity = 0;
        } else if (containerRect.top > -800) {
          circleRef.current.style.left = "50%";
          descriptionRef.current.style.right = "-50vw";
          descriptionRef.current.style.opacity = 0;
        } else if (containerRect.bottom > viewportHeight) {
          circleRef.current.style.position = "fixed";
          circleRef.current.style.top = `${
            viewportWidth > 768 ? `-${viewportHeight * 0.05}px` : "20px"
          }`;
          descriptionRef.current.style.position = "fixed";
          descriptionRef.current.style.top = "50%";
        } else if (containerRect.bottom < viewportHeight) {
          img.style.opacity = 1;
          targetHeight.current = viewportHeight * 1.1;
          circleRef.current.style.position = "absolute";
          circleRef.current.style.top = `${
            transportRef.current.clientHeight - viewportHeight * 1.05
          }px`;
          circleRef.current.style.left = 0;
          descriptionRef.current.style.position = "absolute";
          descriptionRef.current.style.top = `${
            transportRef.current.clientHeight - viewportHeight * 0.5
          }px`;
          descriptionRef.current.style.right = "7.5vw";
          descriptionRef.current.style.opacity = 1;
        }
      }

      lastScrollY.current = currentScrollY;

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(smoothScrub);
      }
    };

    const smoothScrub = () => {
      currentHeight.current += (targetHeight.current - currentHeight.current) * 0.2;
      setLength(currentHeight.current);

      if (Math.abs(targetHeight.current - currentHeight.current) > 1) {
        animationFrame.current = requestAnimationFrame(smoothScrub);
      } else {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className={styles.transport} ref={transportRef}>
      <div
        className={styles.warehouse_circle}
        style={{ width: `${length}px`, height: `${length}px` }}
        ref={circleRef}
      >
        <div className={styles.overlay}>
          <div></div>
        </div>
        <img src="/images/Warehouse-Circle.webp" alt="" />
      </div>
      <div className={styles.description} ref={descriptionRef}>
        <h4>Specializing in Efficient, Lower-Cost Transport of Key Retail Products</h4>
        <p>
          They say, “Money Makes the World Go Round,” but it&apos;s actually Tri-Link&apos;s global
          shipping and 3PL services, and the products we specialize in delivering efficiently with
          reduced duties and fees.
        </p>
      </div>
    </div>
  );
};

export default Transport;
