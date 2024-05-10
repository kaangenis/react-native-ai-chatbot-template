import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../../Configs/colors'
import LoadingIcon from '../../../../assets/svg/loadingIcon.svg'
import { useNavigateHook } from '../../../Hooks/useNavigateHook'

const LoadingPage = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0)
    const { reset } = useNavigateHook()

    useEffect(() => {
        const timer = setInterval(() => {
            setLoadingPercentage(prev => {
                if (prev === 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        reset('Home');
                    }, 500);
                    return 100;
                } else {
                    return prev + 10;
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.main}>
            <LoadingIcon width={200} height={200} />
            <Text style={styles.title}>Oluşturuluyor</Text>
            <Text style={styles.percentage}>%{loadingPercentage}</Text>
        </View>
    )
}

export default LoadingPage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.softBlack,
    },
    title: {
        color: colors.pureWhite,
        fontSize: 16,
        marginTop: 28,
        fontWeight: '400'
    },
    percentage: {
        color: colors.pureWhite,
        fontSize: 32,
        marginTop: 12,
        fontWeight: '800'
    }
})