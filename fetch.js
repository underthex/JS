/**
 * Created by underthex on 6/16/18.
 */

const fetch = require('node-fetch');

const result = fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'apikey': 'none'
        }
    })
    .then(response => response.json())
    .then(data => data);


result.then((data) => {
    console.log(getTitle(data));
});

let getTitle = (json) => {
    return json.title;
};