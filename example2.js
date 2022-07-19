const AuthorInfor = require('./example');
const { AuthorCopyRight } = require('./example');
var authorModule = require('./example')
console.log('using person class of module');

var person = new authorModule.Person('bui duc duy', 30);

person.showInforAuthor();
var total = authorModule.sum(10, 20)
console.log(total);
var authorCopyRight=authorModule.AuthorCopyRight
console.log(authorCopyRight);
