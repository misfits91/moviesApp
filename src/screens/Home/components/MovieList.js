import React from 'react'
import {
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native'
import MovieItem from './MovieItem'

const MovieList = ({
    data = [],
    onPress,
    onEndReached,
    loading
}) => {
    
    const RenderActivityIndicator = () => {
        if (!loading) return null
        return <ActivityIndicator style={{ paddingVertical: 30 }}/>
    }

    return <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.wrap}
        renderItem={({ item }) => (
            <MovieItem
                average={item.vote_average}
                date={item.release_date}
                path={item.poster_path}
                title={item.title}
                onPress={() => onPress(item.id)}
            />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={RenderActivityIndicator}
    />
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 5
    },
    wrap: {
        justifyContent: 'space-between'
    }
})

export default MovieList
