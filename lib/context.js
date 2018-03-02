export const Context = (req) => {

    let context = {

    };

    const apply = (data) => {
        Object.assign(context, data)
    };

    const get = () => {
        return context;
    };

    return {
        apply,
        get
    }

};