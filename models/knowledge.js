import mongoose from "mongoose";

const KnowledgeSchama = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const knowledge = mongoose.model("knowledge", KnowledgeSchama);

export default knowledge;