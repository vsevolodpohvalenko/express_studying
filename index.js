import express, {request} from 'express'
import path from 'path'
import {logger, requestTime} from './middlewares.js'
import serverRoutes from './routes/server.js'

const __dirname = path.resolve()

const app = express()

app.use(express.static(path.resolve(__dirname, "static")))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.set('view engine', 'ejs')

app.set('views', path.resolve(__dirname, 'ejs'))
app.get('/', (req, res) => {
    res.render('index', {title: 'Main page'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page'})
})
console.log(app.get('views'))

const port = process.env.port ?? 3002

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/features', (req, res) =>   {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

app.get('/download', (req, res) => {
    console.log(req.requestTime)
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
