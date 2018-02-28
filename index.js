const Model = require('./dist/cjs/eusi-sdk-utils');

let context = {
        "id": "5e8af23f-5728-4097-a22a-4200c182b712",
        "name": "Learn Fluent Wakandan",
        "key": "Learn-Fluent-Wakandan",
        "content": [
            {
                "type": "category",
                "value": [
                    "4c78084f-107d-4347-9b81-c5187c9bae8c"
                ],
                "taxonomy": {
                    "id": "5235f52b-ebaa-46e0-a989-b5ec46c7ffa5",
                    "key": "category",
                    "name": "Category",
                    "taxonomy_items": [
                        {
                            "id": "4c78084f-107d-4347-9b81-c5187c9bae8c",
                            "name": "Portfolio",
                            "path": "category.Portfolio"
                        }
                    ]
                }
            },
            {
                "type": "intro",
                "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde, accounting technologies corporis dolorum blanditiis ullam officia our university natus minima fugiat repellat."
            },
            {
                "type": "photo",
                "media": [
                    {
                        "id": "71283f22-02da-4007-8121-020d8d495b09",
                        "url": "https://cdn.stg.eusi.cloud/api/v1/63c49661-653f-46ce-b6f6-a86e4ba28fe1/media/1519212385543_peter-hershey-112799-unsplash.jpg",
                        "type": "image",
                        "width": 4296,
                        "height": 2864
                    }
                ],
                "value": [
                    "71283f22-02da-4007-8121-020d8d495b09"
                ]
            },
            {
                "type": "summary",
                "value": "<p><span style=\"color: rgb(51, 51, 51);\">Xhosa is known as \"the clicking language,\" as in order to properly pronounce its x’s, you have to put your tongue to the roof of your mouth and then make a clicking noise, which closely resembles the sound of a horse trotting. One of the official languages of South Africa, it is spoken by around 18% of the country’s population, while Nelson Mandela spoke it fluently.&nbsp;</span></p>"
            },
            {
                "type": "starts",
                "value": "2018-02-21T11:15:40Z"
            },
            {
                "type": "ends",
                "value": "2018-05-31T10:15:55Z"
            },
            {
                "type": "cost",
                "value": 1000
            }
        ],
        "template_id": "04255fd7-bd15-4aef-a274-9ba2586d2c1b",
        "published_at": "2018-02-21T11:16:19.000Z"
    }
;

const pretty = (obj) => {
    return JSON.stringify(obj, null, 2);
}

let model = Model(context);
// console.log(pretty(model.value('intro')));
console.log(pretty(model.taxonomy('category').info()));
// console.log(pretty(model.media('photo')));
// console.log(pretty(model));
