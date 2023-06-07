import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Modal, TextInput, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Menu } from "../Modules/Menu";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotesBack } from "../Components/Notes/NotesBack";


export const Notes = () =>{
    const [nodes, setNodes] = React.useState('');
    const [notes, setNotes] = useState([]);
    const [modalShedule, setModalShedule] = useState(false)
    const findNotes = async () =>{
        const result = await AsyncStorage.getItem('notes')
        if (result !== null) setNotes(JSON.parse(result));
    }
    const handleClick = async (nodes) =>{
        const note = {id: Date.now(), title: nodes};
        const updateNotes = [...notes, note]
        setNotes(updateNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(updateNotes))
    }
    useEffect(() => {
        findNotes();
    }, []);
    return(
        <View>
            <LinearGradient style={styles.container} colors={['#74e', '#8fb4ff' ]}>
                <Menu/>
                
                <Text style={styles.text}>Заметки</Text>
                <Modal
                animationType="fade" 
                transparent={true}
                visible={modalShedule}
                onRequestClose={() => {
                    setModalShedule(!modalShedule);
                }}
                >
                    <TouchableOpacity style={styles.modalClose} onPress={()=> {setModalShedule(!modalShedule)}}></TouchableOpacity>
                    <LinearGradient style={styles.modal} colors={['#74e', 'white' ]}>
                        <TextInput style={styles.input} 
                        multiline 
                        value={nodes}
                        onChangeText={nodes => setNodes(nodes)} />
                        <LinearGradient style={styles.buttonPostGradient} colors={['#74e', '#74e' ]}>
                            <TouchableOpacity style={styles.buttonPost} onPress={() => handleClick(nodes)}>
                                <Text style={styles.textButton}>Добавить</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        </LinearGradient>
                </Modal> 
                <Text></Text>
               <FlatList style={{height: '30%',}} data={notes} keyExtractor={item=> item.id.toString()} renderItem={
                ({item}) => <NotesBack
                notes = {notes} setNotes={setNotes} item={item}
                />
                }/>
                <TouchableOpacity style={styles.buttonCircle} onPress={()=> {setModalShedule(!modalShedule)}}>
                    <Image style={styles.img} source={require('../UI/Img/add.png')}/>
                </TouchableOpacity>
            </LinearGradient>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
    },
    text:{
        fontSize: 32,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '1%',
    },
    input:{
        width: '80%',
        height: 50,
        marginTop: '5%',
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingTop: '2%',
        paddingBottom: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '##74e',
    },
    buttonPostGradient:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',
        height: '12%',
        backgroundColor: 'black',
        borderRadius: 20,
        marginTop: '50%',
    },  
    buttonPost:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    textButton:{
        fontSize: 32,
        fontWeight: '600',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    buttonCircle:{
        width:  50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        marginBottom: '15%',
        marginTop: '5%',
        marginLeft: 'auto',
        marginRight: '5%',
        borderColor: '#74e',
        borderWidth: 2,
    },
    modal:{
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalClose:{
        width: '100%',
        height: '50%',
    },
    img:{
        width: 35,
        height: 35,
        marginTop: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 'auto',
    }
})