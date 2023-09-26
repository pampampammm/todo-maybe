
import { Slider } from "@mui/material";

import styles from "./SliderGroup.module.css"

type SlidersGroupSlidesProps = {
  onClickHandler: () => void
}

type SliderSetting = {
  title: string,
  defaultValue: string,
  step: number,
  min: number,
  max: number
  marks: boolean
}

const slider = {
  title: "Год производства",
  defaultValue: 2023,
  min: 1994,
  max: 2023,
  step: 1,
  marks: false
};


const SliderGroup = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>{slider.title}</p>
        <Slider
          className={styles.slider}
          marks={slider.marks}
          size={"small"}
          defaultValue={slider.defaultValue}
        >
        </Slider>
      </div>
    </div>
  );
};

export const FilterSliderGroup = SliderGroup;