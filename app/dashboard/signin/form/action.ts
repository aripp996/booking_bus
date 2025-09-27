"use server"

import { redirect } from "next/dist/server/api-utils"
import { formSchema } from "./validation"

export interface ActionResult {
    errorTitle: string | null
    errorDesc: string | null
}

export async function handleSignIn(formData: FormData): Promise<ActionResult> {
    console.log(formData.get('email'), formData.get('password'))

    const values = formSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!values.success) {
        const errorDesc = values.error.issues.map((issues) => issues.message)

        return {
            errorTitle: "Validasi Gagal",
            errorDesc: errorDesc.join(", ")
        }
    }

    return redirect('/dashboard')

}
