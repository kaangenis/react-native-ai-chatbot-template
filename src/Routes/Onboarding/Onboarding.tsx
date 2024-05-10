import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import { colors } from '../../Configs/colors'
import OnboardingContent from './components/OnboardingContent'
import OnboardingButtons from './components/OnboardingButtons'

const Onboarding = () => {
    return (
        <SafeAreaView style={styles.main}>
            <OnboardingContent />
            <OnboardingButtons />
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#0E0E0E',
    },
})