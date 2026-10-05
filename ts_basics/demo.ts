interface Person {
    firstname: string;
    lastname: string;
    age?: number
}

let person: Person = {
    firstname: "max",
    lastname: "verstappen",
    age: 34,
}

function printPerson(person: Person) {

    //string concatenation
    console.log("Die Person " + person.firstname + " " + person.lastname + " ist " + person.age + " alt!");
    //bessere variante
    console.log(`Die Person ${person.firstname} ${person.lastname} ist ${person.age} jahre alt!`)
    
    //nicht möglich
    //if(person.age == person.lastname)
}

printPerson(person);

//printPerson("hello"); kriekt man error

//inline funktioniert auch
printPerson({firstname: "hello", lastname: "world", age: 29});

//person.address; Property 'address' does not exist on type 'Person'.

