import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native'
import { colors } from '../../../Configs/colors'

const OnboardingContent = () => {
    return (
        <View style={styles.styleContainer}>
            <Text style={styles.title}>React Native AI Chatbot Template</Text>
        </View>
    )
}

export default OnboardingContent

const styles = StyleSheet.create({
    styleContainer: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.1,
    },
    title: {
        fontSize: 64,
        fontWeight: '700',
        color: colors.pureWhite,
        textAlign: 'center',
    }
})