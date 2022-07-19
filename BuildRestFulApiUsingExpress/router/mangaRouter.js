const express = require('express')
const mangaRouter = express.Router();
const app=express()
const Joi = require('joi')
// dnah sach cac loai truyen
const mangas = [
    { id: '1', name: 'trinh tham 1' },
    { id: '2', name: 'ma1' },
    { id: '3', name: 'lang man1' }
] 
//handling  manga
app.get('/', (req, res) => {
    res.send(mangas)
});
app.post('/', (req, res) => {
    const { error, value } = validateMangas(req.body);
    console.log(error);
    console.log(value);
    const manga = {
        id: mangas.length + 1,
        name: req.body.name}
    mangas.push(manga)
    res.send(mangas)
});
function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(manga);
}
module.exports = mangaRouter;