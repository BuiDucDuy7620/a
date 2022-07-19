const AUTHOR_COPY_RIGHT = ' Bui Duc Duy'
//export function
var sum = (a, b) => {
    return a + b;
}
// export class
var Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    showInforAuthor() {
        console.log('name=' + this.name + "age=" + this.age);
    }
}
var AuthorInfor = {
    Person: Person,
    sum: sum,
    AuthorCopyRight: AUTHOR_COPY_RIGHT
}
module.exports = AuthorInfor
