import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Must be a valid email address")
        .required("Must include email address"),
    username: Yup
        .string()
        .min(1, "Must use a valid username")
        .required("Username is required"),
    password: Yup
        .string()
        .min(6, "Password must be 6 characters long")
        .required("Password is required")
})

export default formSchema