// import { customRef } from 'vue'

// принимаем уникальный ключ и значение по умолчанию, возвращаем ссылку, которая будет обновлять локальное хранилище по мере его обновления.
// например:
// import storage from './starage'
// const publicKey = storage('app-public-key', 'default value')

// export default function (key, defaultValue) {
//     return customRef((track, trigger) => ({
//         get: () => {
//             track()
//             const value = localStorage.getItem(key)
//             return value ? JSON.parse(value) : defaultValue
//         },
//         set: (value) => {
//             if (value === null) {
//                 localStorage.removeItem(key)
//             } else {
//                 localStorage.setItem(key, JSON.stringify(value))
//             }
//             trigger()
//         },
//     }))
// }
/**
 * Manage your storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 *
 * Import this instace and then call it // storage.get('name').key or  // storage.set('name', {'key':'value', etc...})
 **/

export default {
    get: (name) => (localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : false),

    set: (name, object) =>
        localStorage.getItem(name)
            ? localStorage.setItem(name, JSON.stringify(Object.assign(JSON.parse(localStorage.getItem(name)), object)))
            : localStorage.setItem(name, JSON.stringify(object)),

    remove: (name) => localStorage.removeItem(name),
}
