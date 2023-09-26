import React from "react";

import styles from "@/app/home/section-filter/filters.module.css";
import {Divider} from "@mui/material";
import {FilterSliderGroup} from "./FiltersSliderGroup/FilterSiderGroup";
import {FiltersDropdownGroup} from "./FiltersDropdownGroup/FiltersDropdownGroup";
import {FiltersButtonGroup} from "./FiltersButtonGroup/FiltersButtonGroup";


export const FiltersUI = () => {

    const submitFilterOption = () => {

    };

    return (
        <section className={"filters"}>
            <div className={styles.wrapper}>
                <form onSubmit={submitFilterOption}>
                    <div className={styles.content}>
                        <FilterSliderGroup/>
                        <Divider
                            orientation={"vertical"}
                            flexItem
                        />
                        <FiltersDropdownGroup
                            onHandleFilterChange={submitFilterOption}
                        />
                        <Divider
                            orientation={"vertical"}
                            flexItem
                        />
                        <FiltersButtonGroup
                            onHandleClick={() => console.log("ss")}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};