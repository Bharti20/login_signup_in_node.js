const fs = require('fs')
const readlineSync = require('readline-sync')
let userInput = readlineSync.question('what you want to do? 1. login 2. signup ?-------')
if(userInput == 'signup') {
    signUp()
}
else if(userInput == 'login') {
    logIn()
}

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
                        let i = 0
                        while(i<dataStore['user'].length) {
                            var a = dataStore['user'][i]['username']
                            if(a == userName) {
                                break
                            }i++
                        }if(a == userName) {
                            console.log('Username Already Exists')

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

function logIn() {
    readData = readFile()
    let userName = readlineSync.question('Enter the username------')
    let password = readlineSync.question('Enter the password-----')
    let index = 0
    while(index<readData['user'].length) {
        var d = readData['user'][index]['username']
        if(d == userName) {
            var p = readData['user'][index]['password']
            if(p == password) {
                break
            }else{
                console.log("Invalid username and Password")
            }
        
        }index++
    }if(d == userName) {
        console.log('congrats '+userName+" You are Logged In Successfully")
    }else{
        console.log("Invalid username and Password")
    }
}
