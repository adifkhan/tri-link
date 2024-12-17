import React from "react";
import styles from "./retailProducts.module.css";

const items = [
  { img: "/images/image-1.jpg", title: "Apparel & Fashion" },
  { img: "/images/image-2.jpg", title: "Health, Beauty & Cosmetics" },
  { img: "/images/image-3.jpg", title: "Footwear & Footgear" },
  { img: "/images/image-4.jpg", title: "Kids Products & Toys" },
  { img: "/images/image-5.jpg", title: "Consumer Electronics" },
  { img: "/images/image-6.jpg", title: "Home Goods & Décor" },
  { img: "/images/image-7.jpg", title: "Food Items, Beverages, and Alcohol" },
  { img: "/images/image-8.jpg", title: "Construction Materials & Tires" },
  { img: "/images/image-9.jpg", title: "Raw Materials" },
];

const RetailProducts = () => {
  return (
    <div className={styles.retail_products}>
      <div className={styles.heading}>
        <h2>Key Retail Products</h2>
      </div>
      <div className={styles.gallery}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div style={{ backgroundImage: `url(${item.img})` }} className={styles.bg_img}></div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetailProducts;
