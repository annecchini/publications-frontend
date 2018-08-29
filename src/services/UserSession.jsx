
class UserSession {

    static login(username, password) {

        const dados = fetch(`http://localhost:8080/login/${username}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Não foi possivel efetuar login...')
            }
        })

        return dados.then(json => {
            localStorage.setItem('user_name', json.userData.name)
            localStorage.setItem('auth_token', json.userData.token)
            return json;
        })
    }

    static logout() {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_name')
    }

    static get data() {
        return {
            auth_token: localStorage.getItem('auth_token'),
            user_name: localStorage.getItem('user_name')
        }
    }

}

export default UserSession