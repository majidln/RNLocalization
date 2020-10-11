import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { withTranslate } from './../context/languageContext'

function Home({ translate, setLanguage }) {
    const changeLang = (lang = 'en') => {
        setLanguage(lang)
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>
                    {translate.welcome}
                </Text>
            </View>
            <View style={styles.operationWrapper}>
                <TouchableOpacity onPress={() => changeLang('fa-IR')} style={styles.button}>
                    <Text style={styles.buttonText}>Fa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeLang('en')} style={styles.button}>
                    <Text style={styles.buttonText}>EN</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 22
    },
    operationWrapper: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    }
})

export default withTranslate(Home)