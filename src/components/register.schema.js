import {z} from "zod";

const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters long" });


export const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .refine((val) => val.toLowerCase().endsWith("@gmail.com"), {
            message: "Only Gmail addresses are allowed",
        }),
    password: passwordSchema,
    confirmPassword: passwordSchema
}).refine(data=>data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});



