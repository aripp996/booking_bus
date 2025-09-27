import z from "zod";

export const formSchema = z.object({
    email: z.string().nonempty("Email harus di isi!").email({ message: "Email tidak valid" }),
    password: z.string().nonempty("Password harus di isi!").min(6, { message: "Password minimal 6 karakter" }),
});