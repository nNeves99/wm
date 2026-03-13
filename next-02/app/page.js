import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/MyButton";
import { MyButton2 } from "@/components/MyButton2";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Olá</h1>
      <MyButton />
      <hr />
      <MyButton />
        
      
    </div>
  );
}
