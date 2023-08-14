let pwdLength = 10
let firstPwd = document.getElementById("first-pwd")
let secondPwd = document.getElementById("second-pwd")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function randomCharacters() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function password(){
    let passwordOne = ""
    for (i = 0; i < pwdLength; i++){
        passwordOne += randomCharacters()
    }
    firstPwd.textContent  = passwordOne
    
    let passwordTwo = ""
    for (i = 0; i < pwdLength; i++){
        passwordTwo += randomCharacters()
    }
    secondPwd.textContent  = passwordTwo
}

