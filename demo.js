function myF(callback) {
    callback()
    console.log('hi')
}
function myF2() {
    console.log('hello')
}
myF(myF2)