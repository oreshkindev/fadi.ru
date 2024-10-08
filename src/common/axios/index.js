import axios from 'axios'

// создаем новый инстанс
const service = axios.create({
    // забираем путь
    baseURL: import.meta.env.VITE_API,
    // переопределяем таймаут
    timeout: 1000,
})

// перехватываем запрос
service.interceptors.request.use(
    (config) => {
        // что-нибудь делаем перед отправкой запроса
        // const key = import.meta.env.VITE_API_KEY // достаем токен их хранилища
        const storage = JSON.parse(sessionStorage.getItem('fadi.pub_data'))
        if (storage) {
            config.headers['Authorization'] = `token ${storage.token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

// обрабатываем ответ
service.interceptors.response.use(
    (response) => {
        // что-нибудь делаем с ответом
        let res = {}
        res.status = response.status
        res.data = response.data
        return response
    },
    (error) => Promise.reject(error)
)

export default service
