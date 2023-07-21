class A {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    drive() {
        if (this.age == 18) {
            return 'you are try for driving';
        } else if (this.age > 18) {
            return 'you are able for driving';
        } else if (this.age < 18 || this.age > 50) {
            return 'you are child and not able for drive';
        } else {
            return 'you are old and not able for drive';
        }
    }
    static funct(a, b) {
        return a + b;
    }
}
class B extends A {
    constructor(a, b, c) {
        super(a, b);
        this.lenguages = c
        this.emogy = '©®⅘⨊⨆⨅'
    }
}


avinash = new B('avinash ', 19, 'python')
console.log(avinash.drive())
console.log(A.funct('12', '34'))
console.log(B.funct('12', '34'))
console.log(avinash.name)
console.log(avinash.age)
console.log(avinash.lenguages)
console.log(avinash.emogy)