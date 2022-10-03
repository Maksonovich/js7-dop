const btn = document.querySelector('.btn')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')

const first = "Maksat"
const second = 12345678;


class User {
    constructor(inp1,inp2) {
        this.inp1 = inp1,
        this.inp2 = inp2
    }
}

class pass extends User {
    constructor(inp1,inp2) {
        super (inp1,inp2)
    }
    login() {
        btn.addEventListener('click',function() {
            if (inp1.value === first || inp2.value === second) {
                alert('correct') 
            }else if (inp1.value === "" || inp2.value === "") {
                alert('заполните все поля')
            }else if (inp1.value != first) {
                alert('Неверно')
            }else if (inp2.value != second) {
                alert('Неверно')
            }
        })
    }
} 
const banw = new pass('das','asdsa')
banw.login()