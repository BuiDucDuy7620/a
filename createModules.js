//export function
module.exports.getMyDateTime=()=>{
    return Date();
}
exports.getMytime=()=>{
    return Date();
}
exports.getDirName=()=>{
    return __dirname
}
// export variable
const MY_AGE=23;
exports.myAge=MY_AGE;

console.log(module);