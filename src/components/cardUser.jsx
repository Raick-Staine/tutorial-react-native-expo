import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";

export default function CardUser({avatar, name, email}) {

    return (
        <View style={styles.card}>
            <Image 
                style={styles.avatar}
                source={avatar}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minWidth: 200,
        height: 90,
        backgroundColor: '#FFF',
        border: '1px solid #CCC',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#EEE'
    },
    info: {
        gap: 5
    },
    name: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    email: {
        color: '#999'
    }
})