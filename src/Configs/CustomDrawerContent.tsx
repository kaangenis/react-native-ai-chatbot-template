import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import ThreeDot from '../../assets/svg/threeDot.svg'

const CustomDrawerContent = ({ navigation }: any) => {
    const [search, setSearch] = useState<string>('')
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView scrollEnabled={false}>
                <View style={styles.main}>
                    <Text style={styles.logo}>Logo</Text>
                    <TextInput
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        style={styles.textInputArea}
                        placeholder="Search"
                        placeholderTextColor="#BABABA"
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.profileContainer}>
                <View style={styles.rower}>
                    <Image
                        source={require('../../assets/svg/defaultProfileImage.png')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Earnest Kiehn</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <ThreeDot />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
    textInputArea: {
        width: Dimensions.get('window').width * 0.565,
        height: 50,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#212121',
        color: '#BABABA'
    },
    profileContainer: {
        position: 'absolute',
        bottom: Dimensions.get('window').height * 0.025,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderColor: '#212121',
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 5.75
    },
    rower: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 12,
    },
    threeDot: {

    },
})