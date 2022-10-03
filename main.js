const btn = document.querySelector('.btn')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')

class User {
    constructor(inp1,inp2) {
        this.inp1 = inp1,
        this.inp2 = inp2

    }
    login() {
            btn.addEventListener('click',function() {
                if (inp1.value == "Maksat" || inp2.value == "12344321") {
                    alert('correct') 
                }else if (inp1.value == "" || inp2.value == "") {
                    alert('заполните все поля')
                }else {
                    alert('Неверный логин или пароль')
                }
            })
    }
}
const user = new User("Maksat",12344321)
user.login()
Answer()
// class User {
//     constructor(name,password) {
//         this.name = name,
//         this.password = password
//     }
//     Login() {
//         btn.addEventListener('click',function() {
//             if (this.name === name) {
//                 inp1.value = "Кто прживает на дне океана?"
//             }
//         })
//     }
// }


// const AllContact = new User('Maksat',13371337)
// AllContact.Login()


// function  Checkform (event) {
//     event.preventDefault ();

//     const event = document.getElementById('mir')

//     let name = event.name.value
// }












