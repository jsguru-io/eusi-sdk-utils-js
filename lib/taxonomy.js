export const Taxonomy = (data) => {
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
}