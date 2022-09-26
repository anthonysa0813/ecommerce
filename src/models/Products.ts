import {Schema, model, models} from "mongoose"

const ProductSchema = new Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength: 256,
        required: [true, "the title is required"],
        trim: true,
    },
    price: {
        type: String,
        min: 0,
        required: [true, "the price is required"]
    },
    discount: {
        type: String,
        min: 0,
        required: [true, "the discount is required"]
    },
    starts: {
        type: String,
        min: 0,
        required: [true, "the starts is required"]
    },
    description: {
        type: String,
        required: [true, "the description is required"]
    },
    image :{
        type: String,
        required: [true, "the image is required"]
    }
})

export default models.Product  || model("Product", ProductSchema)