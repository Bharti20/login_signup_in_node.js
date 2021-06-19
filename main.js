const fs = require('fs')
const readlineSync = require('readline-sync')
let userInput = readlineSync.question('what you want to do? 1. login 2. signup ?-------')
if(userInput == 'signup') {
    signUp()
}
// else if(userInput == 'login') {


// }

function signUp() {
    let userData = {'user':[]}
    let obj = {'username':"", 'password':""}
    let userName = readlineSync.question('Enter your user name------')
    let password1 = readlineSync.question('Enter the password1 -------')
    let password2 = readlineSync.question('Enter the password2--------')
    if(password1 == password2) {
        if(password1.includes('#') || password1.includes('$')) {
            if(password1.match(/[0-9]/)) {
                    jsData = readFile()
                    if(jsData.length == 0) {
                        obj['username'] = userName
                        obj['password'] = password1
                        userData['user'].push(obj)
                        let allData = JSON.stringify(userData, null, 2)
                        fs.writeFileSync('userdetails.json',allData)
                        console.log('congrats'+userName+"You are Signed Up Successfully")

                    }else{
                        dataStore = readFile()
                        checkData = checkUserName()
                        if(checkData == 'Username Already Exists') {
                            console.log('Username Already Exists')
                            break
                        }else{
                            obj['username'] = userName
                            obj['password'] = password1
                            dataStore['user'].push(obj)
                            let allData = JSON.stringify(dataStore, null, 2)
                            fs.writeFileSync('userdetails.json',allData)
                            console.log('congrats '+userName+", You are Signed Up Successfully")
                        }
                       
                    }
            }else{
                console.log('Atleast password should contain one speacial charactor and number')
            }
        }else{
            console.log('Atleast password should contain one speacial charactor and number')
        }

    }else{
        console.log('both password are not same')
    }

}
function readFile() {
    let data = fs.readFileSync('userdetails.json')
    let convertedData = JSON.parse(data)
    return convertedData
}

function checkUserName() {
    jsData = readFile()
    let i = 0
    while(i<jsData['user'].length) {
        if(jsData['user'][i]['username'] == userName) {
            return ('Username Already Exists')
        }i++
    }
}


console.log('bhartiiiiiiiiiiiiii')