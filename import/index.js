import { Computer } from './computer.js';
class Anuj extends Computer{
    constructor (name,company)
    {
        super(name); // will call constructor of Computer class 'super' is the keyword for this
        this.company = company;
    }

    login()
    {
        console.log("You are logged into a " + this.name +" "+ this.company);
    }
}

const pc = new Anuj('Laptop' , 'HP');
pc.login();
pc.run();

// this is an exapmle of named export

