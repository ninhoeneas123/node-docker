let express = require('express')
let app = express()

app.get('/', (req, res)=>{
    res.send('I have a dream!')
})

app.listen(3000, ()=>{
    console.log('connected in port 3000')
})