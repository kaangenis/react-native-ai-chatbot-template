import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeContent = () => {
    return (
        <View style={styles.main}>
            <ScrollView>
                <Text>Home Content</Text>
            </ScrollView>
        </View>
    )
}

export default HomeContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})