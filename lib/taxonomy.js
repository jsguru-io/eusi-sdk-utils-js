export const Taxonomy = (data) => {

    const items = () => {
        return data.taxonomy_items;
    };

    return {
        items
    };
}