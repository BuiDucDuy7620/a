const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const mangas = [
    { id: 1, name: "ma2" },
    { id: 2, name: "ma2" },
    { id: 3, name: "ma2" },
]
function validateManga(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(manga)
}

app.get('/api/manga', (req, res) => {
    res.send(mangas)
})

app.post('/api/manga', (req, res) => {
    const { error, value } = validateManga(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const manga = {
        id: mangas.length + 1,
        name: req.body.name
    }
    mangas.push(manga)
    res.send(mangas)
})

app.listen(3030, (req, res) => { console.log('server listening on port 3030'); })