export const Single = (context) => {

    const value = (key, format) => {
        let prop = prop(key);
        return prop ? prop.value : null;
    }

    const media = (key, format) => {
        let prop = prop(key);
        return prop ? prop.media : null;
    }

    const prop = (key) => {
        let content = context.content;
        return content.filter((item) => {
            return item.type === key;
        })[0]; // TODO: Can we use find()
    }

    return {
        value
    }
}
