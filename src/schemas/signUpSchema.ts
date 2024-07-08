import {z} from "zod";

export const userNameValidation= z
     .string()
     .min(2, "minimum 2 characher is mandatory")
     .max(2, "username not more than 15 characters")
     .regex(/^[a-zA-Z0-9._]+$/,"special characyer not allowed")

     export const signUpSchema= z.object({
        username: userNameValidation,
        email: z.string().email({message:"Invalid email address"}),
        password: z.string().min(6,     {message:"password atleast 6 charachter"})
     })