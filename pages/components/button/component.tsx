import styles from "./Button.module.scss";

export default function Button(props: {name: string, onClick: () => void}) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.name}
    </button>  );
}