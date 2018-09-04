
class UserSession {

    // static login(username, password) {

    //     const dados = fetch(`http://localhost:8080/login/${username}`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw new Error('Não foi possivel efetuar login...')
    //             }
    //         })

    //     return dados.then(json => {
    //         localStorage.setItem('user_name', json.userData.name)
    //         localStorage.setItem('auth_token', json.userData.token)
    //         return json;
    //     })
    // }

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



    static login(payload) {

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: new Headers({ //Estudar em fetch API
                'Content-Type': 'application/json'
            })
        }

        const dados = fetch(`http://localhost:8008/v1/auth`, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Não foi possivel efetuar login...')
                }
            })

        return dados.then(json => {

            localStorage.setItem('auth_token', json.access_token)

            //localStorage.setItem('user_name', json.access_token)

            localStorage.setItem('user_name', 'Nome temporario')

            return json;
        })
        
    }

}

export default UserSession