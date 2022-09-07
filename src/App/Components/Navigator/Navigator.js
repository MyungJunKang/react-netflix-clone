import React, { useEffect, useState } from "react";
import styles from "./Navigator.module.scss";
import cn from "classnames";

const Navigator = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={cn(styles.wrapper, show && styles.active)}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className={styles.navigatorLogo}
        onClick={() => window.location.reload()}
      />
      <img
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        alt="User Logged"
        className={styles.navUserProfileAvatar}
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default Navigator;
