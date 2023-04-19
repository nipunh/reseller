import React, { useEffect } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import colors from './colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function ImageInput({ img, onChangeImage }) {
    const requesPermission = async () => {
        const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

        if (!granted)
            alert('You need to enable permission to access the library');
    }

    useEffect(() => {
        requesPermission();
    }, [])

    const handlePress = () => {
        if (!img)
            selectImage()
        else
            Alert.alert('Delete', 'Are you sure you want to delet this Image', [{ text: 'Yes', onPress: () => onChangeImage(null) }, { text: 'No' }])

    }

    const selectImage = async () => {
        try {
            const res = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!res.cancelled) onChangeImage(res.uri)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!img && <MaterialCommunityIcons name="camera" size="40" color={colors.medium} />}
                {img && <Image source={{ uri: img }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 100
    },

    image: {
        height: "100%",
        width: "100%",
        borderRadius : 15
    }
})
