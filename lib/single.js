import {Media} from "./media";
import {Taxonomy} from "./taxonomy";

export const Single = (context) => {

    const prop = (key) => {
        let content = context.content;
        return content.filter((item) => {
            return item.type === key;
        })[0];
    }

    const value = (key, format) => {
        let property = prop(key);
        return property ? property.value : null;
    }

    const media = (key) => {
        let property = prop(key);
        return property ? Media(property) : Media({});
    }

    const taxonomy = (key) => {
        let property = prop(key);
        return property ? Taxonomy(property) : Taxonomy({});
    }

    return Object.assign({}, context, {
        value,
        media,
        taxonomy,
        prop
    });
}
