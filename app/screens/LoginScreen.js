import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import * as Yup from 'yup';
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/Forms';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

export default function LoginScreen({navigation}) {

    const [loginFailed, setLoginFailed] = useState(false);

    const defaultUser = {
        email  :"nipunhedaoo@gmail.com",
        password : "test123"
    }
    const handleSubmit = ({email, password}) => defaultUser.email ===  email && defaultUser.password === password ? navigation.navigate(routes.FEED): setLoginFailed(true); 
    
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: '', password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                
            >
                 <ErrorMessage
                    error="Invalid email and/or password."
                    visible={loginFailed}
                />

                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    
                    
                />

                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="key"
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="Login"/>

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
