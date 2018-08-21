
class UserSession {

    static login(username, password) {
        //Conferir se user e password bateme criar sessão no navegador.
        if(username === 'fernando.void@gmail.com' && password === '123456'){
            console.log("login successfull");
            localStorage.setItem('auth_token', 'chaveDoUsuarioFernando');
            localStorage.setItem('user_login', 'Fernando');
            return this.getData();
        } else {
            console.log("login fail")
            throw new Error('Login ou senha incorretos...')
        }
    }

    static logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_login');
        return null;
    }

    static getData() {
        return {
            auth_token: localStorage.getItem('auth_token'),
            user_login: localStorage.getItem('user_login')
        }
    }
    
}

export default UserSession