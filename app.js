const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const ejs = require('ejs')

require('./connectDB')
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
app.use('/axios', express.static(path.join(__dirname, 'node_modules/axios/dist')))
app.use(express.json())
app.use(bp.urlencoded({extended: true}))
fs.readdirSync(path.join(__dirname, 'routes')).forEach((routerPath) => {
    const router = require(`./routes/${routerPath}`)
    app.use(router)
})

app.listen(3000, () => {
    console.log("Tokyo ICT Server is running at port 3000")
})
