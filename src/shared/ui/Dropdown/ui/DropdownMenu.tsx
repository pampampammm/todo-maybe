"use client";

import { InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import {IList} from "../types/types";

export interface IPropsDropdownList {
  menu: IList,
  label: string,
  value: string,
  onChangeHandler: () => void
}

const DropdownMenu = ({ menu, label, value, onChangeHandler }: IPropsDropdownList) => {

  return (
    <div>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        variant="standard"
        className={"select-wrapper"}
        id="demo-simple-select-standard"
        value={value}
        onChange={onChangeHandler}
      >
        {/*{menu.list.map(value =>*/}
        {/*  <MenuItem*/}
        {/*    key={value.id}*/}
        {/*    value={value.value}>*/}
        {/*    {value.label}*/}
        {/*  </MenuItem>*/}
        {/*)}*/}
      </Select>
    </div>

  );
};

export const Dropdown = DropdownMenu;