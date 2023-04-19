import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from './PickerItem';


export default function AppPicker({ icon, items, selectedItem, onSelectItem, placeholder, numberofColumns, PickerItemComponent = PickerItem, width = "100%", ...otherProps }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible) }}>

                <View style={[styles.container, { width: width,}]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />}
                    {selectedItem ? <AppText style={styles.text}> {selectedItem.label} </AppText> :
                        <AppText style={styles.placeholder}> {placeholder} </AppText>
                    }
                    <MaterialCommunityIcons style={styles.icon} name="chevron-down" size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns = {numberofColumns}
                        renderItem={({ item }) => 
                        <PickerItemComponent 
                            item={item}
                            label={item.label}
                            onPress={() => { 
                                setModalVisible(false); 
                                onSelectItem(item); 
                            }}
                        />
                        }
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        marginVertical: 10,
        padding: 25
    },
    icon: {
        marginRight: 10
    },

    text: {
        flex: 1,
    },

    placeholder : {
        color : defaultStyles.colors.medium,
        flex : 1
    }
});
