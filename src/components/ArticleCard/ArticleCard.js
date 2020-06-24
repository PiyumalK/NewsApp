import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../utils/constants'

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 200,
    },
    image: {
        width: '100%',
        borderRadius: 5,
        aspectRatio: 16 / 9,
    },
    title: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const ArticleCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1592967528387-049114892b49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80' }} style={styles.image} />
            <Text style={styles.title}>Article</Text>
            <View style={styles.bottomTextContainer}>
                <Text>New York Times</Text>
                <Text>4 hours ago</Text>
            </View>
        </View>
    )
}

export default ArticleCard
