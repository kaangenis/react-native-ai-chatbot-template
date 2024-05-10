import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { usePremiumHook } from './usePremiumHook'
import { colors } from '../../Configs/colors'
import CloseButton from '../../../assets/svg/closeButton.svg'
import PremiumWideIcon from '../../../assets/svg/premiumWideIcon.svg'
import PremiumComponentHDIcon from '../../../assets/svg/premiumComponentHDIcon.svg'
import PremiumComponentStarIcon from '../../../assets/svg/premiumComponentStarIcon.svg'
import PremiumComponentDiamondIcon from '../../../assets/svg/premiumComponentDiamondIcon.svg'


const Premium = () => {
    const { isCloseButtonActivated, closePremium } = usePremiumHook()
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.closeButtonArea}>
                <TouchableOpacity
                    onPress={closePremium}
                    disabled={!isCloseButtonActivated}
                    activeOpacity={0.65}>
                    <CloseButton width={32} height={32} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconArea}>
                <PremiumWideIcon width={200} height={200} />
            </View>
            <View style={styles.premiumContent}>
                <Text style={styles.title}>Plus</Text>
                <Text style={styles.description}>Gelişmiş akıl yürütme ve yaratıcılık kapasitesine sahip en güçlü modelimiz</Text>
            </View>
            <View style={styles.componentArea}>
                <View style={styles.componentRower}>
                    <PremiumComponentHDIcon width={48} height={48} />
                    <View style={styles.componentTextArea}>
                        <Text style={styles.componentTextHeader}>Yüksek Çözünürlükte Video</Text>
                        <Text style={styles.componentTextDescription}>Videoları Full HD çözünürlükte indirin.</Text>
                    </View>
                </View>
                <View style={styles.componentRower}>
                    <PremiumComponentStarIcon width={48} height={48} />
                    <View style={styles.componentTextArea}>
                        <Text style={styles.componentTextHeader}>Kalite İçin Üretildi</Text>
                        <Text style={styles.componentTextDescription}>Ücretsiz versiyona oranla 2 kat daha iyi sonuçlar.</Text>
                    </View>
                </View>
                <View style={styles.componentRower}>
                    <PremiumComponentDiamondIcon width={48} height={48} />
                    <View style={styles.componentTextArea}>
                        <Text style={styles.componentTextHeader}>Plus Kullanıcılarına Özel</Text>
                        <Text style={styles.componentTextDescription}>Plus kullanıcıları beta özelliklerine erken erişim elde ederler.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.absoluteBottom}>
                <Text style={styles.priceText}>₺399,00 / Ay</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.plusButton}>
                    <Text style={styles.plusText}>Plus'a Yükselt</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Premium

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.softBlack,
    },
    closeButtonArea: {
        marginTop: 20,
        marginLeft: 16,
    },
    iconArea: {
        width: '100%',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    premiumContent: {
        width: '100%',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
        color: colors.pureWhite,
        fontWeight: '700',
    },
    description: {
        color: '#BABABA',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 12,
    },
    componentArea: {
        width: '100%',
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    componentRower: {
        width: '90%',
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    componentTextArea: {
        width: '75%',
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    componentTextHeader: {
        color: colors.pureWhite,
        fontSize: 16,
        fontWeight: '700',
    },
    componentTextDescription: {
        color: '#BABABA',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 2,
    },
    absoluteBottom: {
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 30,
        backgroundColor: colors.softBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText: {
        color: colors.pureWhite,
        fontSize: 14,
        fontWeight: '400',
    },
    plusButton: {
        backgroundColor: '#6F07D7',
        width: Dimensions.get('window').width - 32,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 9,
    },
    plusText: {
        color: colors.pureWhite,
        fontSize: 16,
        fontWeight: '700',
    },
    scrollCenterer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})