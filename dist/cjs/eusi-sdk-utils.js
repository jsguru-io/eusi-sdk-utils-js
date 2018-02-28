'use strict';

const Media = data => {

    data = data || [];

    const all = () => {
        return data;
    };

    const first = () => {
        return data[0];
    };

    return {
        all,
        first
    };
};

const Taxonomy = data => {

    data = data || [];

    const all = () => {
        return data;
    };

    return {
        all
    };
};

const Single = context => {

    const prop = key => {
        let content = context.content;
        return content.filter(item => {
            return item.type === key;
        })[0];
    };

    const value = (key, format) => {
        let property = prop(key);
        return property ? property.value : null;
    };

    const media = key => {
        let property = prop(key);
        return property ? Media(property.media) : null;
    };

    const taxonomy = key => {
        let property = prop(key);
        return property ? Taxonomy(property.taxonomy) : null;
    };

    return {
        value,
        media,
        taxonomy,
        prop
    };
};

const List = context => {

    const all = () => {
        let data = context.data || [];
        return data.reduce((accumulator, currentValue) => {
            return accumulator = accumulator.concat(Single(currentValue));
        }, []);
    };

    return {
        all
    };
};

const Model = context => {
    return context.data ? List(context) : Single(context);
};

module.exports = Model;
