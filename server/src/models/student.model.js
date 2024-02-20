import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        enrollmentNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        branch: {
            type: String,
            required: true,
            trim: true,
        },
        graduationYear: {
            type: Number,
            required: true,
        },
        cgpa: {
            type: Number,
            required: true,
        },        
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model('Student', studentSchema);