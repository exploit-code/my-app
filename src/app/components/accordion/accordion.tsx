"use client";

import { useState, useRef } from "react";
import styles from "./accordion.module.scss";
import cn from "classnames";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface IAccordion {
  children: string | JSX.Element;
  title: string;
}

export const Accordion = ({ children, title }: IAccordion) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleAccordionHandle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__head} onClick={toggleAccordionHandle}>
        {title}
        <button className={styles.accordion__button}>
          <MdKeyboardArrowLeft
            className={cn(styles.accordion__icon, isOpen && styles.accordion__icon_open)}
          />
        </button>
      </div>
      <div
        className={cn(styles.accordion__body, isOpen && styles.accordion__body_open)}
        style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }}
      >
        <div className={styles.accordion__content} ref={itemRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
