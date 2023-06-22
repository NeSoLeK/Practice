const axios = require('axios');
const express = require("express")
const cors = require('cors')

const app = express()
const jsonParser = express.json()

app.use(cors())
app.use(express.static("static"));

const urls = new Map();
urls.set("одежда", ["https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0", "https://www.kant.ru/catalog/clothes/", "https://incity.ru/incity/"])
urls.set("рецепт", ["https://vkuso.ru/", "https://1000.menu/", "https://www.gastronom.ru/recipe"])
urls.set("спорт", ["https://www.sports.ru/", "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%BE%D1%80%D1%82", "https://sportrbc.ru/"])

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")

})

app.post("/search", jsonParser, function (req, res){
    if(!req.body) return res.sendStatus(400)

    res.json(urls.get(req.body.key))


})

app.post("/download",jsonParser, function (req, res){


    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: req.body.link
    };

    axios.request(config)
        .then((response) => {

            res.json(response.data)
        })
        .catch((error) => {
            console.log(error);
        });


})

app.get("/loaded", function (req, res){
    res.sendFile(__dirname + "/public/loaded.html")
})

app.get("/keys", function (req, res){
    res.sendFile(__dirname + "/public/keys.html")


})

app.get("/getkeys", function (req, res){
    res.json(Object.fromEntries([...urls]))
})

app.listen(3000, console.log("Сервер доступен по адресу: 127.0.0.1:3000")
)
