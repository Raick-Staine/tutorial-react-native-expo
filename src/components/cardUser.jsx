import { Image } from "expo-image";
import { View, StyleSheet, Text, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CardUser({id, avatar, name, email, users, setUsers, setUserToEdit}) {

    const deleteUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        console.log(data)
        setUsers(users.filter((user) => user.id !== id))
    }

    const editUser = async () => {
        setUserToEdit(id)
    }

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
            <View style={styles.botoes}>
            <Pressable style={styles.edit} onPress={editUser}>
                <FontAwesome name="edit" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.trash} onPress={deleteUser}>
                <FontAwesome name="trash-o" size={24} color="black" />
            </Pressable>
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
    },
    botoes: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'space-between',
        position: 'absolute',
        right: 10,
        top: 10,
    },
})