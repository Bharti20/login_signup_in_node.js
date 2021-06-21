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
    let obj = {'username':"", 'password':"", 'profile':""}
    let bioData = {'description':"", 'dob':"", 'hobbies':"", 'gender':""}
    let userName = readlineSync.question('Enter your user name------')
    let password1 = readlineSync.question('Enter the password1 -------')
    let password2 = readlineSync.question('Enter the password2--------')
    if(password1 == password2) {
        if(password1.includes('#') || password1.includes('$')) {
            if(password1.match(/[0-9]/)) {
                    if(fs.existsSync('userdetails.json') == false) {
                        let data = JSON.stringify('bharti', null, 2);
                        fs.writeFileSync('userdetails.json', data)
                        jsData = readFile()
                        obj['username'] = userName
                        obj['password'] = password1
                        console.log('congrats '+userName+" You are Signed Up Successfully")
                        let descrip = readlineSync.question('Enter the description---')
                        let dateOfBirth = readlineSync.question("Enter the date of birth ----")
                        let hobbies = readlineSync.question('Enter the hobbies ----')
                        let gender = readlineSync.question('Enter the gender-------')
                        bioData['description'] = descrip
                        bioData['dob'] = dateOfBirth
                        bioData['hobbies'] = hobbies
                        bioData['gender'] = gender
                        obj['profile'] = bioData
                        userData['user'].push(obj)
                        let allData = JSON.stringify(userData, null, 2)
                        fs.writeFileSync('userdetails.json',allData)
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
                            console.log()
                            console.log('congrats '+userName+", You are Signed Up Successfully")
                            console.log()
                            let descrip = readlineSync.question('Enter the description---')
                            let dateOfBirth = readlineSync.question("Enter the date of birth ----")
                            let hobbies = readlineSync.question('Enter the hobbies ----')
                            let gender = readlineSync.question('Enter the gender-------')
                            console.log()
                            bioData['description'] = descrip
                            bioData['dob'] = dateOfBirth
                            bioData['hobbies'] = hobbies
                            bioData['gender'] = gender
                            obj['profile'] = bioData
                            dataStore['user'].push(obj)
                            let allData = JSON.stringify(dataStore, null, 2)
                            fs.writeFileSync('userdetails.json',allData)
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
            var name = d
            var sex = readData['user'][index]['profile']['gender']
            var Bio = readData['user'][index]['profile']['description']
            var hobb = readData['user'][index]['profile']['hobbies']
            var birth = readData['user'][index]['profile']['dob']
            var p = readData['user'][index]['password']
            if(p == password) {
                break
            }
        }index++
    }if(d == userName && p == password) {
        console.log()
        console.log('congrats '+userName+" You are Logged In Successfully")
        console.log()
        console.log('Profile:')
        console.log('username: '+name)
        console.log('Gender: '+sex)
        console.log('Bio: '+Bio)
        console.log('Hobbies: '+hobb)
        console.log('Dob: '+birth)

    }else{
        console.log("Invalid username and Password")
    }
}
