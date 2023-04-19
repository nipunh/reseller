import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import * as Yup from 'yup';
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/Forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).max(12).label("Password")

});

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: '', password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email"
                    autoCorrect="false"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />

                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="key"
                    autoCorrect="false"
                    autoCapitalize="none"
                    keyboardType=""
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="Login" />

            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50
    }

})
