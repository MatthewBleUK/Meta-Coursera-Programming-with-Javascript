/*

The Benefits of OOP:

OOP helps developers to mimic the relationship between objects in the real world. 

AND

Allows you to write modular code.

Makes your code more flexible.

Makes your code reusable.




The Principles of OOP:

The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism.

Objects derive from a class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.



OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming.

Inheritance is when a class inherits (by using the extend keyword) from another class.

Example code:

class Animal {}
class Bird extends Animal {}
class Eagle extends Bird {}



OOP Principles: Encapsulation

Encapsulation has to do with making a code implementation "hidden" from other users, 
in the sense that they don't have to know how my code works in order to "consume" the code.

For example:

"abc".toUpperCase();

I don't really need to worry or even waste time thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.



OOP Principles: Abstraction

Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 



OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms".

Although two objects have the same method, they can be different and take mulitple forms.

For example:

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

The bell on a door will sound and may operate differently than a bell on a bicycle.

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:

function ringTheBell(thing) {
    console.log(thing.bell())
}

Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

You've now seen an example of the exact same function producing different results, based on the context in which it is used.

*/