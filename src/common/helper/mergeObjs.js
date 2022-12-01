// let a = {
//     a: [1,9],
//     b: 1,
//     c: 1
// }
// let b = {
//     a: 2,
//     b: 2
// }
// let c = {
//     b: 3,
//     c: 3,
//     d: 5
// }

// getMergedObjs(a,b,c); // { a: [ 1, 9, 2 ], b: [ 1, 2, 3 ], c: [ 1, 3 ], d: 5 }

const mergeObjs = (...objs) =>
    Object.fromEntries(
        Object.entries(
            [{}, ...objs].map((e, i, a) =>
                i ? Object.entries(e).map((f) => (a[0][f[0]] ? a[0][f[0]].push(...[f[1]].flat()) : (a[0][f[0]] = [f[1]].flat()))) : e
            )[0]
        ).map((e) => e.map((f, i) => (i ? (f.length > 1 ? f : f[0]) : f)))
    )

export default mergeObjs
