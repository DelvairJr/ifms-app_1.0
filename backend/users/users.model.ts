import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'

import { environment } from '../common/environment'

export interface User extends mongoose.Document {
    nome: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlenght: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        select: false,
        required: true
    }
})

const hashPassword = (obj, next) => {
    bcrypt.hash(obj.password, environment.security.saltRounds)
        .then(hash => {
            obj.password = hash
            next()
        }).catch(next)
}

const saveMiddleware = function (next) {
    const user: User = this
    if (!user.isModified('password')) {
        next()
    } else {
        hashPassword(user, next)
    }
}

const updateMiddleware = function (next) {
    if (!this.getUpdate().password) {
        next()
    } else {
        hashPassword(this.getUpdate(), next)
    }
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)


export const User = mongoose.model<User>('User', userSchema)