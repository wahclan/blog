import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.ai}`}>
        AI
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.ml}`}>
        ML
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.life}`}>
        Life
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.politics}`}>
      Politics
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
