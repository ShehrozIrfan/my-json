/* 
To validate JSON we can use:
https://jsonlint.com/?code=
*/

var person = {
    name: "Shehroz Irfan",
    age: 21,
    address: {
        street: "5 main st",
        city: "Boston"
    },
    children: ["XYZ", "ABC"]
}

//Convert a JavaScript object into a string with JSON.stringify().
person = JSON.stringify(person);
//now the object is converted to a string with json.
console.log(person);
//so now the object is in json so, the below statement will show 'undefined'
console.log(person.name);


//now to convert JSON to object
person = JSON.parse(person);
console.log(person);
console.log(person.name);
console.log(person.address.street);
console.log(person.children[0]);



//now we will fetch data from a JSON file

var xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET', 'sample.json', true);

xhr.onload = function() {
    if(this.status === 200) {
        var result = JSON.parse(this.responseText);
        var output = '';
        for(var i = 0; i < result.length; i++) {
            output += `
                <li>Name: ${result[i].name}, Age: ${result[i].age}</li>
            `;       
        }
        document.getElementById("app").innerHTML = output;
    } 
}

xhr.send();