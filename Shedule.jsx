import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Modal, TextInput, FlatList } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Menu } from "../../Modules/Menu"
import { ModulDZ } from "../../Modules/ModulDZ";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Shedule = () =>{
    const [modalShedule, setModalShedule] = useState('false');
    const [Add, setAdd] = useState('false');


    const [nodes, setNodes] = React.useState('');
    const [notes, setNotes] = useState([]);
    const findNotes = async () =>{
        const result = await AsyncStorage.getItem('dz')
        if (result !== null) setNotes(JSON.parse(result));
    }
    const handleClick = async (nodes) =>{
        const note = {id: Date.now(), title: nodes};
        const updateNotes = [...notes, note]
        setNotes(updateNotes)
        await AsyncStorage.setItem('dz', JSON.stringify(updateNotes))
    }
    useEffect(() => {
        findNotes();
    }, []);




    return(
        <View>
            <Modal
            animationType="slade"
            transparent={true}
            visible={modalShedule}
            onRequestClose={() => {
                setModalShedule(!modalShedule);
            }}>
                <TouchableOpacity style={styles.modalClose} onPress={()=>{setModalShedule(!modalShedule)}}></TouchableOpacity>
                <View style={styles.modalContainer}><Text style={styles.textRasp}>Домашнее задание</Text><FlatList style={{height: '30%',}} data={notes} keyExtractor={item=> item.id.toString()} renderItem={
                ({item}) => <ModulDZ
                notes = {notes} setNotes={setNotes} item={item}
                />
                }/></View>
            </Modal>
            <Modal
            animationType="slade"
            transparent={true}
            visible={Add}
            onRequestClose={() => {
                setAdd(!Add);
            }}>
                <TouchableOpacity style={styles.modalClose} onPress={()=> {setAdd(!Add)}}></TouchableOpacity>
                    <LinearGradient style={styles.modal} colors={['#74e', 'white' ]}>
                        <TextInput style={styles.input}
                        multiline
                        value={nodes}
                        onChangeText={nodes => setNodes(nodes)} />
                        <TouchableOpacity style={styles.buttonPost} onPress={() => handleClick(nodes)}>
                            <Text style={styles.textButton}>Добавить</Text>
                        </TouchableOpacity>
                        </LinearGradient>
            </Modal>
            <LinearGradient style={styles.container} colors={['#74e', 'white' ]}>
                <Menu/>
                <View style={styles.calendar}>
                    <Text style={styles.month}>Пн</Text>
                    <Text style={styles.month}>Вт</Text>
                    <Text style={styles.month}>Ср</Text>
                    <Text style={styles.month}>Чт</Text>
                    <Text style={styles.month}>Пт</Text>
                    <Text style={styles.month}>Сб</Text>
                    <Text style={styles.month}>Вс</Text>

                </View>
                <View style={styles.calendarText}>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalShedule(!modalShedule)}} style={{backgroundColor: '#74e', width: '8%', height: 40, borderRadius: 20,}}>
                        <Text style={{color: "white", marginBottom: 'auto',marginTop: 'auto',marginRight: 'auto',marginLeft: 'auto'}}>7</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>{setAdd(!Add)}}><Text style={styles.text}>Добавить</Text></TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }

const styles = StyleSheet.create({
    modalClose:{
        width: '100%',
        height: '50%',
    },
    container:{
        width: '100%',
        height: '100%',
    },
    calendar:{
        width: '90%',
        height: '5%',
        marginLeft: '5%',
        marginTop: '5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    calendarText:{
        width: '90%',
        height: '5%',
        marginLeft: '5%',
        marginTop: '1%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    month:{
        fontSize: 16,
    },
    button:{
        width: '50%',
        height: '5%',
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 100,
    },
    text:{
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    modal:{
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
        borderColor: '#74e',
    },
    buttonPost:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '50%',
        height: '20%',
        borderRadius: 20,
        backgroundColor: '#74e'
    },
    textButton:{
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    modalContainer:{
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'white',
    },
    textRasp:{
        color: 'black',
        fontSize: 28,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        fontWeight: '400',
    }
})