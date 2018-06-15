const loginMessages = {
  200: 'login-successfull',
  401: 'login-failed',
}

export const login = async (payload) => {
  const response = await fetch('https://localhost/v1/auth', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(payload),
  })
  return (loginMessages[response.status] || 'server-error')
}
