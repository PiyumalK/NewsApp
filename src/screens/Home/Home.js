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
            <ArticleCard 
                imageUrl="https://images.unsplash.com/photo-1592967528387-049114892b49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
                title="News Title"
                source="ABC"
                publishedAt="2020-06-24T19:38:14Z"
            />
        </View>
    )
}

export default Home
