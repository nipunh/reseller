import React from 'react'
import { StyleSheet } from 'react-native';
import AppText from '../AppText'

export default function ErrorMessage({error, visible}) {

 if(!visible || !error) return null;

  return (
        <AppText>
            {error}
        </AppText>
    );
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