import React, { useCallback } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const MenuAll = () =>{
    const navigation = useNavigation();

    const handleLinkPress = useCallback(async (URL) => {
        const supported = await Linking.canOpenURL(URL);
        if (supported) {
          await Linking.openURL(URL);
        } else {
          Alert.alert(`Don't know how to open this URL: ${URL}`);
        }
      }, []);

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../UI/Img/schoolPhoto.png')}/>
            <View>
            {/* https://docs.google.com/spreadsheets/d/1aGSif0iX5IwPfK-kEXizX0RH0IYdoks92nYOshfXt44/edit#gid=0 */}
                <TouchableOpacity style={styles.buttonMenu} onPress={() =>
                handleLinkPress('https://docs.google.com/spreadsheets/d/1aGSif0iX5IwPfK-kEXizX0RH0IYdoks92nYOshfXt44/edit#gid=0')}>
                <Text style={styles.buttonMenuTxt}>Расписание</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Timer')}><Text style={styles.buttonMenuTxt}>Таймер</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Shedule')}><Text style={styles.buttonMenuTxt}>Домашнее задание</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Assets')}><Text style={styles.buttonMenuTxt}>Справочник</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Notes')}><Text style={styles.buttonMenuTxt}>Заметки</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Teachers')}><Text style={styles.buttonMenuTxt}>Персонал</Text></TouchableOpacity>
                {/* https://www.gismeteo.ru */}
                <TouchableOpacity style={styles.buttonMenu} onPress={() => handleLinkPress('https://www.gismeteo.ru')}>
                <Text style={styles.buttonMenuTxt}>Погода</Text></TouchableOpacity>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        width: '70%',
        height: '100%',
        backgroundColor: '#74e',
    },

    img:{
        width: '100%',
        height: '18%',

    },
    buttonMenu:{
        width: '100%',
        height: '11%',
        borderColor: 'white',
        borderWidth: 0.7,
    },
    buttonMenuTxt:{
        color: 'white',
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    viewNumber:{
        paddingBottom: '20%',
    },
    buttonMenuNumber:{
        color: 'white',
        fontSize: 16,
        marginTop: 'auto',
        marginBottom: '5%',
        marginLeft: '5%',
    },
})