import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeMenuIcon from '../../../../assets/svg/homeMenuIcon.svg'
import PremiumIcon from '../../../../assets/svg/premiumIcon.svg'
import AddButton from '../../../../assets/svg/homeAddButton.svg'
import { useNavigation } from '@react-navigation/native'

const HomeTopBar = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.main}>
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                activeOpacity={0.8}>
                <HomeMenuIcon width={32} height={32} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.replace('Premium')}
                activeOpacity={0.8}>
                <PremiumIcon width={80} height={36} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
                <AddButton width={32} height={32} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeTopBar

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 16,
        height: 94,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 16,
        flexDirection: 'row',
    }
})