import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect, use } from 'react';
import CardUser from './src/components/CardProduct';

export default function App() {

  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [avatar, setAvatar] = useState('')

  const [productToEdit, setProductToEdit] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch('http://localhost:3000/product/list')
      const data = await result.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  //muda o produto a ser editado
  useEffect(() => {
    console.log('productToEdit', productToEdit)
    if (productToEdit !== null) {
      const product = products.find((product) => product.id === productToEdit)
      setName(product.name)
      setDescription(product.description)
      setPreco(product.preco)
      setQuantidade(product.quantidade)
      setAvatar(product.avatar)
    }
  }, [productToEdit])

  const handleCreateProducts = async () => {
    const result = await fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        preco,
        quantidade,
        avatar
      })
    })
    const data = await result.json()
    console.log(data)
    setProducts([...products, data.product]) // Adiciona o novo produto no final da lista
    setName('')
    setDescription('')
    setPreco('')
    setQuantidade('')
    setAvatar('')
  }

  const handleEditProducts = async () => {
    const result = await fetch(`http://localhost:3000/product/${productToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        preco,
        quantidade,
        avatar
      })
    })
    const data = await result.json()
    console.log(data)
    const productsEdited = products.map((product) => {
      if (product.id === productToEdit) {
        return data.product
      }
      return product
    })
    setProducts(productsEdited)
    setProductToEdit(null)
    setName('')
    setDescription('')
    setPreco('')
    setQuantidade('')
    setAvatar('')
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.listUser}>
        {
          products.map((product) => {
            return <CardUser
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            preco={product.preco}
            quantidade={product.quantidade}
            avatar={product.avatar}
            products={products}
            setProducts={setProducts}
            setProductToEdit={setProductToEdit}
          />
          })
        }
      </View>
      <View>
        <Text style={styles.h1}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />
        <TextInput style={styles.input} placeholder="Preço" value={preco} onChangeText={setPreco} />
        <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} />
        <TextInput style={styles.input} placeholder="Avatar" value={avatar} onChangeText={setAvatar} />
        <View style={styles.boxButtons}>
          <Button title="Cadastrar" onPress={handleCreateProducts} />
          <Button title="Editar" onPress={handleEditProducts} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  listUser: {
    gap: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  boxButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    marginBottom: 40
  }
});