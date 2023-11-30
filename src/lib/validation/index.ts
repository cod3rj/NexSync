import * as z from "zod"

export const RegisterValidation = z.object({
    name: z.string().min(2, {message: 'Name must contain at least 2 characters'}),
    username: z.string().min(2, {message: 'Username must contain at least 2 characters'}),
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(8, {message: 'Password must contain at least 8 characters'}),
})