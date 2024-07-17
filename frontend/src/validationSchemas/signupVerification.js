import * as yup from 'yup';

export const validationSchema = yup
    .object()
    .shape({
        code: yup.string().required('Verification code is required')
            .min(7, 'Verification code should be 6 characters long')
            .max(7, 'Verificaiton could sould be 6 characters long')
            .matches(/^\d+$/, 'Verification code should be numbers only')
    })
    .required();