import React from 'react'
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/Forms';
import * as Yup from 'yup';
import AppFormPicker from './Forms/AppFormPicker';
import Screen from './Screen';
import CategoryPickerItem from './CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("description"),
    category: Yup.object().required().nullable().label("Category"),

});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
]

export default function ListingEditScreen() {

    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null
                }}

                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField maxLength={8} keyboardType="numeric" name="pice" placeholder="Price" width="50%" />
                <AppFormPicker PickerItemComponent={CategoryPickerItem} items={categories} name="category" placeholder="Category" width="70%" />
                <AppFormField maxLength={255} multiline numberOfLines={3} name="description" placeholder="Description" />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}
