import React, { useEffect, useRef } from "react";
import styles from "./logistics.module.css";

const Logistics = () => {
  const containerRef = useRef(null);
  const clientRef = useRef(null);
  const orderRef = useRef(null);
  const warehouseRef = useRef(null);

  const animateCount = (element) => {
    if (element.dataset.animated === "true") return;

    const target = +element.dataset.target;
    let count = 1;

    const updateCount = () => {
      count += 2;
      if (count >= target) {
        element.innerText = target;
        element.dataset.animated = "true";
      } else {
        element.innerText = count;
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const client = clientRef.current;
      const order = orderRef.current;
      const warehouse = warehouseRef.current;

      if (!container) return;

      const viewportHeight = window.innerHeight;
      const clientHeight = client.clientHeight;
      const containerHeight = container.clientHeight;
      const counterRect = container.getBoundingClientRect();

      if (viewportHeight > counterRect.top + containerHeight * 0.6) {
        client.style.opacity = 0;
        order.style.opacity = 0;
        warehouse.style.opacity = 1;
        client.style.transform = "translateY(50px)";
        order.style.transform = "translateY(50px)";
        warehouse.style.transform = "translateY(0)";
        animateCount(warehouse.querySelector("h4"));
        client.querySelector("h4").dataset.animated = "false";
        order.querySelector("h4").dataset.animated = "false";
      } else if (viewportHeight > counterRect.top + containerHeight * 0.3) {
        client.style.opacity = 0;
        order.style.opacity = 1;
        client.style.transform = "translateY(50px)";
        order.style.transform = "translateY(0)";
        warehouse.style.transform = "translateY(50px)";
        warehouse.style.opacity = 0;
        animateCount(order.querySelector("h4"));
        client.querySelector("h4").dataset.animated = "false";
        warehouse.querySelector("h4").dataset.animated = "false";
      } else if (viewportHeight > counterRect.top + clientHeight + 20) {
        client.style.opacity = 1;
        client.style.transform = "translateY(0)";
        order.style.transform = "translateY(50px)";
        warehouse.style.transform = "translateY(50px)";
        order.style.opacity = 0;
        warehouse.style.opacity = 0;
        animateCount(client.querySelector("h4"));
        order.querySelector("h4").dataset.animated = "false";
        warehouse.querySelector("h4").dataset.animated = "false";
      } else {
        client.style.opacity = 0;
        order.style.opacity = 0;
        warehouse.style.opacity = 0;
        client.style.transform = "translateY(50px)";
        order.style.transform = "translateY(50px)";
        warehouse.style.transform = "translateY(50px)";
        client.querySelector("h4").dataset.animated = "false";
        order.querySelector("h4").dataset.animated = "false";
        warehouse.querySelector("h4").dataset.animated = "false";
      }
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
          <h4 data-target="75" data-animated="false">
            0
          </h4>
          <p>
            Average <br />
            number of
            <br />
            clients
          </p>
        </div>
        <div className={styles.wrapper} ref={orderRef}>
          <h4 data-target="95" data-animated="false">
            0
          </h4>
          <p>
            % Rate of <br /> orders <br /> completed on <br />
            time
          </p>
        </div>
        <div className={styles.wrapper} ref={warehouseRef}>
          <h4 data-target="80" data-animated="false">
            0
          </h4>
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
