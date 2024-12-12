import React, { useEffect, useRef } from "react";
import styles from "./logistics.module.css";

const Logistics = () => {
  const containerRef = useRef(null);
  const clientRef = useRef(null);
  const orderRef = useRef(null);
  const warehouseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const client = clientRef.current;
      const order = orderRef.current;
      const warehouse = warehouseRef.current;

      if (!container) return;

      const viewportHeight = window.innerHeight;
      const clientHeight = client.clientHeight;
      //   const orderHeight = order.innerHeight;
      //   const warehouseHeight = warehouse.innerHeight;
      const counterRect = container.getBoundingClientRect();

      console.log(
        viewportHeight > counterRect.top + clientHeight * 1.3,
        viewportHeight,
        counterRect.top,
        counterRect.top + clientHeight * 1.3
      );

      if (viewportHeight > counterRect.top + clientHeight + 20) {
        client.style.opacity = 1;
        order.style.opacity = 0;
        warehouse.style.opacity = 0;
      }
      //   else if (viewportHeight > counterRect.top) {
      //         client.style.opacity = 0;
      //         order.style.opacity = 1;
      //         warehouse.style.opacity = 0;
      //       }
      else {
        client.style.opacity = 0;
        order.style.opacity = 0;
        warehouse.style.opacity = 0;
      }
      //    else if (viewportHeight > counterRect.top) {
      //     client.style.opacity = 0;
      //     order.style.opacity = 1;
      //     warehouse.style.opacity = 0;
      //   }

      //   if (isVisible) {
      //     wrapper.style.position = "sticky";
      //     wrapper.style.top = `${viewportHeight * 0.8}px`;
      //     wrapper.style.left = "80vw";
      //     wrapper.style.opacity = "1";
      //   } else {
      //     wrapper.style.opacity = "0";
      //   }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.logistics}>
      <div className={styles.heading}>
        <h2>
          3PL and FTZ <span>logistic solutions</span> to <br /> Optimize Your Operations, Streamline
          Transportation,
          <br /> and Link You with Your Customers
        </h2>
      </div>

      <div className={styles.counter} ref={containerRef}>
        <div className={styles.wrapper} ref={clientRef}>
          <h4>75</h4>
          <p>
            Average <br />
            number of
            <br />
            clients
          </p>
        </div>
        <div className={styles.wrapper} ref={orderRef}>
          <h4>95</h4>
          <p>
            % Rate of <br /> orders <br /> completed on <br />
            time
          </p>
        </div>
        <div className={styles.wrapper} ref={warehouseRef}>
          <h4>80</h4>
          <p>
            % Warehouse <br /> capacity <br />
            utilization rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
