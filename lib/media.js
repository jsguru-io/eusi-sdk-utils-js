export const Media = (data) => {

    data = data || {};
    data.media = data.media || [];

    // TODO: This is a hack for the youtube watch to embed correction
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

    const exist = () => {
        return data.media.length
    };

    return Object.assign({}, data, {
        all,
        first,
        exist
    });
}