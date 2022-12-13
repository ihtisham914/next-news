import Navbar from "../components/Navbar";
import styles from "../styles/author.module.css";

const author = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.main}>
        <h1>Designed and Developed by</h1>
        <div className={styles.employeeofthemonth}>
          <h2>Ihtisham Ul Haq</h2>
          <h5>FullStack Developer</h5>
          <img src="/me.png" alt="" />
          <p>Software Engineer with 2 years experience as web developer</p>
        </div>
      </div>
    </div>
  );
};

export default author;
