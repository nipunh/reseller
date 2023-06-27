import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';

export default function AppFormField({name, width, ...otherprops }) {

    const {setFieldTouched, setFieldValue, values, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                {...otherprops}
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}