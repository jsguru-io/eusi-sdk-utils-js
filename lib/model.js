import {List} from "./list";
import {Single} from "./single";

export const Model = (context) => {
    return context.data ? List(context) : Single(context);
}