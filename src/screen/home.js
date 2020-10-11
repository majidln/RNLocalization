import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { withTranslate } from './../context/languageContext'

function Home({ translate }) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.text}>
                {translate.welcome}
            </Text>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 22
    }
})

export default withTranslate(Home)