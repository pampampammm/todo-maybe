"use client";

import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../helpers/useOutsideClick";
import {IList} from "../types/types";


export interface IPropsDropdownList {
  menu: IList,
}

const Dropdown = ({ menu }: IPropsDropdownList) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick({
    elementRef: buttonRef,
    triggerRef: buttonRef,
    onOutsideClick: onClose,
    enabled: isOpen
  })

  function onClose() {
    console.log('outside click')
    setIsOpen(prevState => !prevState)
  }

  const onClickHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  const onItemClick = () => {
    console.log('dropdown item selected')
  };

  return (
    <button className={'dropdown-button'}
      ref={buttonRef}
      onClick={() => onClickHandler()}
    >
      {menu.title}
      {isOpen
        &&
        <ul className='dropdown-list'>
          {menu.list.map((item) =>
            <li
              key={item.id}
              className={`dropdown-list-item`}
              onClick={onItemClick}
            >
              {item.label}
            </li>
          )}
        </ul>
      }
    </button>
  );
};

export const DropdownOld = Dropdown;