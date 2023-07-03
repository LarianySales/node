const url = require('url')

const address = 'https://www.meusite.com.br/catalo?produtos=cajá'

const parseURL = new url.URL(address)
console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
// console.log(parseURL.)