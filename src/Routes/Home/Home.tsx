import React from 'react'
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { colors } from '../../Configs/colors'
import HomeTopBar from './components/HomeTopBar'
import HomeContent from './components/HomeContent'
import HomeBottom from './components/HomeBottom'
import { useDrawerStatus } from '@react-navigation/drawer'

const Home = () => {
    const isDrawerOpen = useDrawerStatus()
    return (
        <SafeAreaView style={styles.main}>
            {
                isDrawerOpen === 'open'
                    ? <View>
                        <HomeTopBar />
                        <HomeContent />
                        <HomeBottom />
                    </View>
                    : <KeyboardAvoidingView behavior='padding'>
                        <HomeTopBar />
                        <HomeContent />
                        <HomeBottom />
                    </KeyboardAvoidingView>
            }
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.softBlack,
    }
})