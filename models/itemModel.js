const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({

    name: { type: String, require },
    category: {
        type: String,
        require
    },
    prices: [],
    varients: [],
    description: { type: String, require },
    image: { type: String, require }

}, {
    timestamps: true,
})

const itemModel = mongoose.model('items', itemSchema)

module.exports = itemModel