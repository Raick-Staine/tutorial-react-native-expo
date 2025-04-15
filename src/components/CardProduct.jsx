import { Image } from "expo-image";
import { View, StyleSheet, Text, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CardUser({ id, avatar, name, description, preco, quantidade, products, setProducts, setProductToEdit }) {
    const editProduct = async () => {
      setProductToEdit(id); // Ensure this is called correctly
    };
    const deleteProduct = async () => {
        const result = await fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        console.log(data)
        setProducts(products.filter((product) => product.id !== id))
    }

    return (
        <View style={styles.card}>
            <Image 
                style={styles.avatar}
                source={avatar}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.preco}>R$ {preco}</Text>
                <Text style={styles.quantidade}>Em estoque: {quantidade}</Text>
            </View>
            <Pressable style={styles.trash} onPress={deleteProduct}>
                <FontAwesome name="trash-o" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.edit} onPress={editProduct}>
                <FontAwesome name="edit" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minWidth: 200,
        height: 150,
        backgroundColor: '#FFF',
        border: '1px solid #CCC',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 30
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 10,
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
    description: {
        color: '#999'
    },
    preco: {
        color: '#02835f',
        fontSize: 18,
    },
    quantidade: {
        color: 'blue'
    },
    trash: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    edit: {
        position: 'absolute',
        right: 40,
        top: 10
    }
})