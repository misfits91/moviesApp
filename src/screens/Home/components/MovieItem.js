import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import 'moment/locale/es'

const MovieItem = ({
    path,
    title,
    date,
    average,
    onPress
}) => (
    <TouchableOpacity
        style={styles.item}
        onPress={onPress}>
        <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/w500/${path}` }}
            style={styles.image}
            borderRadius={10}>
            <View
                opacity={0.7}
                style={styles.dataContainer}>
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.text}>
                    {title}
                </Text>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.text}>{moment(date).format('D-MMM-YYYY')}</Text>
                    <View style={styles.flexHorizontal}>
                        <Icon
                            name='star-border'
                            color='yellow'
                            size={16}
                        />
                        <Text style={styles.text}>{average}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
        flex: 1 / 2,
        height: 300,
        borderRadius: 10,
        margin: 4
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    dataContainer: {
        height: 70,
        backgroundColor: 'black',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexHorizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default MovieItem
