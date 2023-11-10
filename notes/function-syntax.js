const testFunc01 = (param) => {
    return (
        `success: ${param}`
    )
}
console.log('01', testFunc01('arg')) // success

const testFunc02 = (param) => {
    return
    `01 success: ${param}`

}
console.log('02', testFunc02('arg')) // undefined

const testFunc03 = (param) => {
    return `success: ${param}`

}
console.log('03', testFunc03('arg')) // success

const testFunc04 = (param) => { `success: ${param}` }
console.log('04', testFunc04('arg')) // undefined

const testFunc05 = (param) => `success: ${param}`
console.log('05', testFunc05('arg')) // success

const testFunc06 = param => `success: ${param}`
console.log('06', testFunc06('arg')) // succes

const testFunc07 = (param01, param02 = 'default02') => `success: ${param01} ${param02}`
console.log('07', testFunc07('arg01')) // success