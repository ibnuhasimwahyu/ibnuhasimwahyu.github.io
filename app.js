const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000


//gunakan ejs 
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts)
app.use(morgan('dev'))

//built-in middleware
app.use(express.static('public'));

//application level meddleware
app.use((req, res, next) => {
  console.log('time: ', Date.now())
  next()
})


app.get('/', (req, res) => {
    //res.sendFile('./index.html', { root: __dirname});
const mahasiswa = [
  {
    nama: 'wahyu',
    email: 'dwahyu@gmail.com' ,
  },
  {
    nama: 'Tsabita',
    email: 'tsabita@gmail.com' ,
  },
  {
    nama: 'Yaqub',
    email: 'yaqub@gmail.com' ,
  },
    

]

res.render('index', { 
    nama: 'ibnuhasim', 
    title: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layout',
    })
})


app.get('/about', (req, res) => {
    //res.send('ini adalah halaman about')
    res.render('about', {
      layout: 'layouts/main-layout',
      title: 'Halaman About'})
      
      })  



app.get('/contact', (req, res) => {
    //res.send('ini adalah halaman contact')
    res.render('contact', {layout: 'layouts/main-layout',
    title: 'Halaman Contact'})
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use((req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


