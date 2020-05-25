const habitsModel = require('../Models/habitsModel');

module.exports = {
    async showAll(req, res) {
        const habits = await habitsModel.find().sort('-createdAt');

        return res.json(habits);
    },

    async show(req, res) {
        const habits = await habitsModel.findById(req.params.id);
        
        return res.json(habits);
    },

    async create(req, res) {
        const { name, description } = req.body;

        const habit = await habitsModel.create({ 
            name,
            description
         });  

        return res.json(habit);
    },

    async delete(req, res) {
        await habitsModel.findByIdAndRemove(req.params.id);

        return res.json({ "deleted": "ok" })
    }

}
