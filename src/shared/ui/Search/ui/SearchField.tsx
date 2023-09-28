
import {memo, useState} from "react";
import { Button } from "@mui/material";

import styles from "./SearchField.module.css"

interface ISearchProps {
  handleSubmit: () => void;
}

export const SearchField = memo(() => {
  const [input, setInputValue] = useState<string>("");

  const handleSubmit = () => {

  };

  return (
      <div className={styles.wrapper}>
        <input className={styles.input} value={input} />
        <Button className={styles.buttonLabel} onClick={handleSubmit}> Поиск</Button>
      </div>
  );
})