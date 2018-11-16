const { Subject } = require('rxjs')

const subject = new Subject()
module.exports.subject = subject
subject.subscribe(v => console.log(v))