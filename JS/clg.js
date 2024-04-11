// class Person {
//     constructor(name,age,gander){
//         this.name = name;
//         this.age = age;
//         this.gander = gander;
//         this.type = this.gander === "male"? "Mr." : "Ms.";
//     }
//     intro(){
//         return `I'm ${this.type}${this.name} and ${this.age} years old.`
//     }
// }

// const p1 = new Person("Kyaw Kyaw",19,"male");
// console.log(p1)
// console.log(p1.intro());

// class Student extends Person{
//     constructor(name,age,gander,major){
//         super(name,age,gander);
//         this.major = major;
//     }

// }

// class Monitor extends Student{
//     constructor(name,age,gander,major,room){
//         super(name,age,gander,major);
//         this.room = room;
//     }
//     static x = "xxx";
//     static y = "yyy";
//     static z(){
//         return "Method z";
//     }

//     #a = "aaa";
//     #b(){
//         return "Method b";
//     }
//     c = "ccc";
//     d(){
//         return "Method d";
//     }
// }

// console.dir(Monitor);
// console.log(Monitor.x)

// const m1 = new Monitor("Aye",12,"Male","WAD","!");
// console.log(m1)

// const m = new Monitor("Su Su",14,"female","WAD","Room 1");
// console.log(m)
// console.log(m.intro());

// const st1 = new Student("MgMg",14,"male","SWD");
// console.log(st1);
// console.log(st1.intro());

// console.dir(Date)
// console.log(Date.now());
// console.log(Date.UTC(2024));
// console.log(Date.parse("2003-11-17"))

// const date = new Date();

// console.dir(date.getFullYear())


// console.log(Math.cos(0))

// const m = new Math();
// console.dir(m)

class BankAccount {
    #balance = 0;
    #records = [];
    #recordsInfo = 0;
    constructor(id,name){
        this.id=id;
        this.name = name;
    }
    checkBalance(){
        this.#records[this.#recordsInfo++] = `Checked balance! ${this.#balance}`
        return this.#balance;
    }
    history(){
        return this.#records;
    }

    deposit(amount){
        this.#balance+=amount;
        this.#records[this.#recordsInfo++] = `Deposit ${amount} successful!`;
        return `Deposit ${amount} successful!`
    }

    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount;
            this.#records[this.#recordsInfo++] = `Withdraw ${amount} successful!`;
            return `Withdraw ${amount} successful!`;
        }
        this.#records[this.#recordsInfo++] = `Not enough balance!`;
        return `Not enough balance!`;
    }

}

const ba = new BankAccount(111,"Ks");
ba.name="SS"
console.log(ba.name);
console.log(ba.checkBalance());
console.log(ba.deposit(30000));
console.log(ba.checkBalance());
console.log(ba.withdraw(10000));
console.log(ba.checkBalance());
console.log(ba.withdraw(30000));
console.table(ba.history())