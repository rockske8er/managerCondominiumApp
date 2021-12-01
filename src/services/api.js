import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = 'https://api.b7web.com.br/devcond/api'

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase()
  let fullUrl = `${baseUrl}${endpoint}`
  let body = null

  switch (method) {
    case 'get':
      let query = new URLSearchParams(params).toString()
      fullUrl += `?${query}`
      break;
    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params)
      break;
  }

  const headers = {
    'Content-Tyṕe': 'Application/json'
  }

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  let req = await fetch(fullUrl, {
    headers,
    method,
    body
  })

  let json = await req.json()

  return json
}


const getToken = async () => {
  return await AsyncStorage.getItem('@ManagerCondominium:token')
}

const validateToken = async () => {
  const token = await AsyncStorage.getItem('@ManagerCondominium:token')
  let json = await request('post', '/auth/validate', {}, token)
  return json
}

export {
  getToken, validateToken
}