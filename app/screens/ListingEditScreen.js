import React, { useEffect, useState } from 'react'
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/Forms';
import * as Yup from 'yup';
import AppFormPicker from '../components/Forms/AppFormPicker';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/Forms/FormImagePicker';
import * as Location from 'expo-location';
import useLocation from '../hooks/useLocation';
import { StyleSheet } from 'react-native';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images : Yup.array().min(1, "Please Select at least one Image")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor : "red", icon :"apps" },
    { label: "Clothing", value: 2, backgroundColor : "blue", icon :"mail"  },
    { label: "Cameras", value: 3, backgroundColor : "green", icon :"camera"  },
]

export default function ListingEditScreen() {

    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images : []
                }}

                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField maxLength={8} keyboardType="numeric" name="price" placeholder="Price" />
                <AppFormPicker 
                    name = "category"
                    // PickerItemComponent={CategoryPickerItem} 
                    items={categories}
                    placeholder="Category" 
                    // numberofColumns={3} 
                    // width="70%" 
                    />
                <AppFormField maxLength={255} multiline numberOfLines={3} name="description" placeholder="Description" />
                <FormImagePicker name="images"  />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
  