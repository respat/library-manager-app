const express = require('express')
const router = express.Router()
const User = require('../models/user')
const csvtojson = require('csvtojson')

//Összes lekérdezése
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch(err) {
        res.status(500).json({ message: err.message})
    }
})

//Egy lekérdezése
router.get('/:id', getUser, (req, res) => {
    res.send(res.user)
})

//Létrehozás
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        birthDate: req.body.birthDate,
        class: req.body.class,
        studentId: req.body.studentId
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Importálás
router.post('/import', async (req, res) => {
    csvtojson()
    .fromFile("./mintaCSV.csv")
    .then(async csv => {
        let newData = 0;
        let existingData = 0;
        for (const record of csv) {
            /* Megnézzük hogy az adatbázisban már szerepel-e a jelenleg beimportált adat */
            const existingUser = await User.findOne({ studentId: record.studentId });
            if (existingUser) {
                existingData++;
                if (record.name !== existingUser.name) {
                    existingUser.name = record.name;
                }

                if (record.birthDate !== existingUser.birthDate) {
                    existingUser.birthDate = record.birthDate;
                }

                if (record.class !== existingUser.class) {
                    existingUser.class = record.class;
                }

                // Ha volt változás a már meglévő felhasználó adataiban, frissíti
                if (
                    existingUser.isModified('name') ||
                    existingUser.isModified('birthDate') ||
                    existingUser.isModified('class')
                ) {
                    await existingUser.save();
                }
            } else {
                //Ha nem létezik az adott user, akkor hozzáadjuk és megszámoljuk
                newData++
                await User.create(record);
            }

        }
        res.json({ success: 'Importálás sikeres (' + newData + ') elem hozzáadva. ' + existingData + ' elem már szerepelt az adatbázisban.' });
    })
    .catch(function (error) {
        console.log(error)
    })
})

//Módosítás
router.patch('/:id', getUser, async (req, res) => {
    if(req.body.name != null) {
        res.user.name = req.body.name
    }
    if(req.body.birthDate != null) {
        res.user.birthDate = req.body.birthDate
    }
    if(req.body.class != null) {
        res.user.class = req.body.class
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Törlés
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.deleteOne()
        res.json({message: "Felhasználó törölve!"})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "Felhasználó nem található."})
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

module.exports = router