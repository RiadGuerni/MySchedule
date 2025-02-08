import { z } from "zod"

const SignupFormSchema = z.object({
    email: z.string().email("Invalid Email !"),
    password: z.string().min(6, "Invalid Password (at least 6 characters) !"),
    repeatPassword: z.string()
})

export async function signup(_, formData) {
    const validationResult = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        repeatPassword: formData.get('repeatPassword'),
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors
        }
    }

    const { password, repeatPassword } = validationResult.data

    if (password !== repeatPassword) return {
        errors: {
            email: undefined,
            password: undefined,
            repeatPassword: "Mot de passes differents !",
        }
    }

}

const LoginFormSchema = z.object({
    email: z.string().email("Email invalide !"),
    password: z.string().min(1, "Mot de passe invalide !")
})

export async function login(_, formData) {
    const validationResult = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors
        }
    }


}