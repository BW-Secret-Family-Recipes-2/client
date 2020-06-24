import* as Yup from 'yup'//needs * to work without error


const formSchema=Yup.object().shape({
    username:Yup
        .string()
        .min(' 3 ')
        .required('Must include a username'),
    password:Yup
        .string()
        .min(6,'Passwords must be at least 6 characters long')
        .required('Password is Required')
})

export default formSchema