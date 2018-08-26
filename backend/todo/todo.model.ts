import * as mongoose from 'mongoose'

export interface Todo extends mongoose.Document {
    description: string,
    done: boolean,
    createdAt: Date
}

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now }
})

export const Todo = mongoose.model<Todo>('Todo', todoSchema)