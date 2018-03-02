import moment from "moment";

export const DateTime = (data) => {
    data = data || {};

    const format = (pattern = "MMMM Do YYYY") => {
        return moment(data.value).format(pattern);
    };

    const value = () => {
        return data.value;
    };

    return Object.assign({}, data, {
        format,
        value
    });
}