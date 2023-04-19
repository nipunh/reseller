import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';

export default function FormImagePicker({ name }) {

    const {setFieldValue, values, errors, touched} = useFormikContext();

    const handleAdd = uri => {
        setFieldValue( name , [...values[name], uri]);
      }
    
      const handleRemove = uri => {
        setFieldValue(name, values[name].filter((img) => img != uri));
      }

    return (
        <>
            <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onRemoveImage={handleRemove} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    image: {
        marginRight: 10,
    }
})