import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';

export default function AppFormField({name, width, ...otherprops }) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                {...otherprops}
                onBlur={() => setFieldTouched(name)}
                onChange={handleChange(name)}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}