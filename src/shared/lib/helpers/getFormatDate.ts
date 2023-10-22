export enum DATE_TYPE {
    FULL = 19,
    DATE = 10
}

export const getFormatDate = (date: Date, dateType: DATE_TYPE) => {
    const utc = date.toJSON().slice(0, dateType);

    return utc;
};
