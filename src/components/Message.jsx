import {Image} from 'expo-image'
import {StyleSheet, Text, View} from 'react-native'

export default function Message({avatar, children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{children}</Text>
            <Image 
                style={styles.avatar}
                source={avatar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
        justifyContent: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    message: {
        backgroundColor: '#f1efe6',
        borderRadius: 20,
        width: '70%',
        padding: 16
    }
})