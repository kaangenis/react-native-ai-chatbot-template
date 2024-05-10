import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { colors } from '../Configs/colors'

interface AuthButtonProps {
    title: string
    icon: any
    onPress: () => void
    style?: any
};

const AuthButton = ({
    title,
    icon,
    onPress,
    style
}: AuthButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.main, style]}>
            {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AuthButton

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width - 40,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.pureWhite,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    }
})