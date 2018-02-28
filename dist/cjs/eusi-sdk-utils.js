'use strict';

const Media = data => {

    data = data || {};
    data.media = data.media || [];

    data.media.forEach(entry => {
        if (entry.type === 'external') {
            Object.assign(entry, {
                embed_url: entry.url.replace('watch?v=', 'embed/')
            });
        }
    });

    const all = () => {
        return data.media;
    };

    const first = () => {
        return data.media[0];
    };

    return Object.assign({}, data, {
        all,
        first
    });
};

const Taxonomy = data => {
    data = data || {};
    data.taxonomy = data.taxonomy || {};
    data.taxonomy.taxonomy_items = data.taxonomy.taxonomy_items || [];

    const info = () => {
        return data.taxonomy;
    };

    const items = () => {
        return data.taxonomy.taxonomy_items;
    };

    return Object.assign({}, data, {
        info,
        items
    });
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
        return property ? Media(property) : null;
    };

    const taxonomy = key => {
        let property = prop(key);
        return property ? Taxonomy(property) : null;
    };

    return Object.assign({}, context, {
        value,
        media,
        taxonomy,
        prop
    });
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
