import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ArticleCard } from '../../components'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    }
})

const Home = () => {
    return (
        <View style={styles.container}>
            <ArticleCard />
        </View>
    )
}

export default Home
