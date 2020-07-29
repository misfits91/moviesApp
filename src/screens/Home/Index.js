import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

/** components */
import MovieList from './components/MovieList'

export default function Home({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    }, [page])

    async function getData() {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=es&page=${page}`
        const request = await fetch(url)
        const response = await request.json()
        setMovies([ ...movies, ...response.results ])
        setLoading(false)
    }

    const handleNavigate = movieId => {
        navigation.navigate('Details', { movieId })
    }

    const handleLoadMore = async () => {
        if (!loading) setPage(page + 1)
    }

    return (
      <View style={styles.container}>
        <MovieList
            data={movies}
            onPress={handleNavigate}
            onEndReached={handleLoadMore}
            loading={loading}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    indicator: {
        marginTop: 30
    }
})