import styles from "./Container2.module.scss";

interface Container2Props {
  title: string;
  description: string;
  url: string;
  bgDark?: boolean;
}

const Container2 = ({ title, description, url, bgDark }: Container2Props) => {
  return (
    <div className={styles.container2}>
      <div
        className={styles.zoom}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={styles.content}>
        <div className={`${styles.card}${bgDark ? ` ${styles.bgDark}` : ""}`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Container2;
