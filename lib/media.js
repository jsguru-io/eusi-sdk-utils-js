export const Media = (data) => {

    data = data || [];

    data.forEach((entry) => {
        if(entry.type === 'external') {
            Object.assign(entry, {
                embed_url: entry.url.replace('watch?v=', 'embed/')
            })
        }
    });

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