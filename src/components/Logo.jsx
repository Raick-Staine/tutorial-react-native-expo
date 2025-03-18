import {Image} from 'expo-image'
import {StyleSheet, Text, View} from 'react-native'

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            />
            <Text>Meu Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 90
    }
})