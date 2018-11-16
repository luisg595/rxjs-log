const fs = require('fs')
const { subject } = require('../rxjs/subjects/Log')

subject.subscribe(
    data => fs.appendFile(
        'log.txt', 
        '\n' + data, 
        function (err) {
            if (err) throw err
            console.log('Saved')
        }
    )
)

module.exports.fs = function(data) {
    fs.appendFile(
        'log.txt', 
        '\n' + data, 
        function (err) {
            if (err) throw err
            console.log('Saved')
        }
    )
}