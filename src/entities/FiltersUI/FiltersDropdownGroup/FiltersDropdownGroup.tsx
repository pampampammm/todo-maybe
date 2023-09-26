import React, {useState} from "react";
import {Dropdown} from "../../../shared/ui/Dropdown/ui/DropdownMenu";
import {IList} from "../../../shared/ui/Dropdown/types/types";

interface DropdownGroupProps {
    onHandleFilterChange: () => void;
    typeItems?: IList,
    yearItems?: IList
}

const DropdownGroup = (props: DropdownGroupProps) => {
    const {onHandleFilterChange, typeItems, yearItems} = props

    const [defaultValue] = useState({value: "Выберете", label: "Выберите тип"});

    if(typeItems || yearItems)
        return null

    return (
        <div className={"group-item-wrapper"}>
            <div className={"dropdown-content"}>
                <Dropdown
                    value={"value"}
                    onChangeHandler={onHandleFilterChange}
                    menu={typeItems}
                    label={"тип"}
                />
                <Dropdown
                    value={"value"}
                    onChangeHandler={onHandleFilterChange}
                    menu={yearItems}
                    label={"возвраст"}
                />
            </div>
        </div>
    );
}

export const FiltersDropdownGroup = DropdownGroup