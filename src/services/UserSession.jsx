
class UserSession {

    static login(username, password) {
        //Conferir se user e password batem e criar sessão no navegador.
        return new Promise(Resolve => {
            if(username === 'fernando.void@gmail.com' && password === '123456'){
                console.log("login successfull Session")
                localStorage.setItem('auth_token', 'A1B2C3D4E5F6G7H8I9J0')
                localStorage.setItem('user_login', 'Fernando')
                Resolve(this.getData())
            } else {
                console.log("login fail Session")
                throw new Error('Login ou senha incorretos...')
            }
        })

    }

    static logout() {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_login')
    }

    static getData() {
        return {
            auth_token: localStorage.getItem('auth_token'),
            user_login: localStorage.getItem('user_login')
        }
    }
    
}

export default UserSession