const { from } = require('rxjs')
const axios = require('axios')
const { subject } = require('../rxjs/subjects/Log')
const { fs } = require('../utilities/Utilities')

function store(data) {
    const storeFrom = from(storeLog(data))
    storeFrom.subscribe(res => fs(JSON.stringify(res)))
}

subject.subscribe(
    data => store(data)
)

function storeLog(data) {
    return new Promise((resolve, reject) => {
        axios.post('http://172.17.0.4:3000/logs', {log: data})
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            })
    })
}