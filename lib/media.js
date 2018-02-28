export const Media = (data) => {

    data = data || {};
    data.media = data.media || [];

    data.media.forEach((entry) => {
        if (entry.type === 'external') {
            Object.assign(entry, {
                embed_url: entry.url.replace('watch?v=', 'embed/')
            })
        }
    });

    const all = () => {
        return data.media;
    };

    const first = () => {
        return data.media[0]
    };

    return Object.assign({}, data, {
        all,
        first
    });
}