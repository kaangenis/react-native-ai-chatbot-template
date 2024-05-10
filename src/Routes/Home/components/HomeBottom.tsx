import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CameraIcon from '../../../../assets/svg/cameraIcon.svg'
import ShineIcon from '../../../../assets/svg/shineIcon.svg'
import { colors } from '../../../Configs/colors'
import { useHomeHook } from '../useHomeHook'

const HomeBottom = () => {
    const [prompt, setPrompt] = useState('')
    const { navigateToLoading } = useHomeHook()
    return (
        <View style={styles.main}>
            <View style={styles.chatArea}>
                <TouchableOpacity activeOpacity={0.8}>
                    <CameraIcon width={50} height={50} />
                </TouchableOpacity>
                <View>
                    <TextInput
                        value={prompt}
                        onChangeText={(text) => setPrompt(text)}
                        style={styles.textInputArea}
                        placeholder="Enter prompt"
                        placeholderTextColor={'#BABABA'}
                    />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={navigateToLoading}
                disabled={prompt === '' ? true : false}
                style={prompt === '' ? styles.buttonDisabled : styles.buttonEnabled}>
                <ShineIcon style={styles.mr_8} width={20} height={20} />
                <Text style={styles.buttonTitle}>Oluştur</Text>
            </TouchableOpacity>
        </View >
    )
}

export default HomeBottom

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: 165,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatArea: {
        width: Dimensions.get('window').width - 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInputArea: {
        width: Dimensions.get('window').width - 74,
        marginLeft: 8,
        marginRight: 16,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#212121',
        color: '#BABABA'
    },
    buttonDisabled: {
        width: Dimensions.get('window').width - 16,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#787878',
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonEnabled: {
        width: Dimensions.get('window').width - 16,
        height: 50,
        borderRadius: 12,
        backgroundColor: colors.pureWhite,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonTitle: {
        color: '#0E0E0E',
        fontSize: 16,
        fontWeight: '700',
    },
    mr_8: {
        marginRight: 8,
    }
})