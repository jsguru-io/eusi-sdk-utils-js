const Model = require('./dist/cjs/eusi-sdk-utils');

let context = {
    name: 'courses',
    content: [{
        type: 'title',
        value: 'Some title'
    }]
};

let model = Model(context);
console.log(model.value('title'));
