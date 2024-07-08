import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10,"minimum 10 character is required")
    .max(200,"message not more than 200 character")
})