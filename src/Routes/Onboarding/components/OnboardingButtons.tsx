import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { useOnboardingHook } from '../useOnboardingHook'
import AuthButton from '../../../GlobalComponents/AuthButton'
import GoogleIcon from '../../../../assets/svg/googleIcon.svg'
import AppleIcon from '../../../../assets/svg/appleIcon.svg'

const OnboardingButtons = () => {
    const { navigateToHome } = useOnboardingHook();
    return (
        <View style={styles.mb_16}>
            <AuthButton
                icon={<GoogleIcon width={24} height={24} />}
                onPress={navigateToHome}
                title="Google ile devam et" />
            <AuthButton
                icon={<AppleIcon width={24} height={24} />}
                style={styles.mt_16}
                onPress={navigateToHome}
                title="Apple ile devam et" />
        </View>
    )
}

export default OnboardingButtons

const styles = StyleSheet.create({
    mb_16: {
        marginBottom: 16,
    },
    mt_16: {
        marginTop: 16,
    }
})