import React from 'react'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';

export default function AppFormPicker({items, name, PickerItemComponent, width, placeholder, numberofColumns = 1 }) {

    const {setFieldValue, values, errors, touched} = useFormikContext();

    return (
        <>
            <AppPicker
                items = {items}
                placeholder = {placeholder}
                numberofColumns = {numberofColumns}
                PickerItemComponent = {PickerItemComponent}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
                width = {width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}