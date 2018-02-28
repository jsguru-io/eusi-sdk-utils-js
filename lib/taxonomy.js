export const Taxonomy = (data) => {

    data = data || [];

    const all = () => {
        return data;
    };

    return {
        all
    };
}