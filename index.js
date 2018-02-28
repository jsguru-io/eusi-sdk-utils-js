import {Model} from "./lib/model";

let context = {
    name: 'courses',
    content: [{
        type: 'title',
        value: 'Some title'
    }]
};


let model = Model(context);
console.log(model.value('title'));