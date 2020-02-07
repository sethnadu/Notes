const express = require('express')
const router = express.Router();
const uuid = require("uuid")

// const users = require("../../users/01-users")

// Gets all users
router.get('/', (req, res) => {
    res.json(users)
});

// Get single member
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
      res.json(users.filter(user => {
        return user.id === parseInt(req.params.id)
    }));  
    } else {
        res.status(400).json({message: `No member with the id of ${req.params.id}`})
    }
    
})

// Create Member
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email

    }
    if(!newUser.name || !newUser.email){
        return res.status(400).json({ message: 'Please include a name'})
    } 

    users.push(newUser);
    res.json(users);
})

// Update Member
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found){
        const updateUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name: user.name;
            }
            res.json({message: `User was updated`, user})
        })

    } else {
        res.status(400).json({message: `No member with the id of ${req.params.id}`})
    }   
})

// Delete single member
router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
      res.json({
        message: "User Deleted", 
        users: users.filter(user => user.id !== parseInt(req.params.id))
    });  
    } else {
        res.status(400).json({message: `No user with the id of ${req.params.id}`})
    }
    
})

module.exports = router