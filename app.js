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


var people = {
    name: "John",
    email: function() {
        return "test@test.com"
    },
    function() {
        return "Hello World"
    }
}
console.log(people.email());
//now convert that object to string
people = JSON.stringify(people);
//so the function will not be converted to JSON string, because JSON works with specific datatype that are(Number, String, Boolean, Array, Object, Null) - so it doesn't work with function.

//excluding the function, remaining part will be converted to json.
console.log(people);
people = JSON.parse(people);
console.log(people);


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