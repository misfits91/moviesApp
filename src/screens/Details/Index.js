import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
import moment from 'moment'
import 'moment/locale/es'

export default function Details({ route }) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        async function getDetails() {
            const { movieId } = route.params
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=634b49e294bd1ff87914e7b9d014daed&language=es`
            const request = await fetch(url)
            const respose = await request.json()
            console.log(respose)
            setData(respose)
            setLoading(false)
        }

        getDetails()
    }, [])

    return (
        loading
        ? <ActivityIndicator style={styles.indicator} />
        : <ScrollView
            bounces={false}
            style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}` }}
                    style={styles.image}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Duración:</Text>
                    <Text>{`${data.runtime} min`}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Fecha de estreno:</Text>
                    <Text>{moment(data.release_date).format('D MMMM YYYY')}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Califición:</Text>
                    <Text>{`${data.vote_average} min`}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Géneros:</Text>
                    <View style={styles.genresContainer}>
                        {data?.genres.map((x, i) => (
                            (data?.genres.length - 1) === i
                            ? <Text key={x.id}>{x.name}</Text>
                            : <Text key={x.id}>{`${x.name}, `}</Text>
                        ))}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Descripción:</Text>
                    <Text>{data.overview}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    indicator: {
        marginTop: 30
    },
    imageContainer: {
        height: 250
    },
    image: {
        flexGrow: 1
    },
    body: {
        flex: 1,
        padding: 4
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        paddingVertical: 20
    },
    section: {
        marginBottom: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: 'black'
    },
    genresContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})