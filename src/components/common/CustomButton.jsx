import styles from "../../styles.module.css";

const CustomButton = ({ title, handleClick, style }) => {
  
  return (
    <button
      type="button"
      className={`${styles.btn}`}
      style={style}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
