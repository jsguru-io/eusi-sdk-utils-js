export const Media = (data) => {

    data = data || [];

    const all = () => {
        return data;
    };

    const first = () => {
        return data[0]
    };

    return {
        all,
        first
    };
}