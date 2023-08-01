import Image from "next/image";
import styles from "./Container.module.scss";

interface ContainerProps {
  img: { alt: string; src: string };
  title: string;
  text: string;
}

const Container = ({ img, title, text }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image alt={img.alt} src={img.src} height={300} width={300} />
        <div className={styles.containerInfo}>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Container;
