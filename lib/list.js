import {Single} from "./single";

export const List = (context) => {

    const all = () => {
        let data = context.data || [];
        return data.reduce((accumulator, currentValue) => {
            return accumulator = accumulator.concat(Single(currentValue));
        }, []);
    }

    return {
        all
    };
}