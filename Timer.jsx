import React, { useState } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "../Modules/Menu";

export const Timer = () =>{
    const [second, setSeconds] = useState(false);

    const timer = () =>{
        if (second == true){

            return true
        }
        if (second == false){
            return false
        }
    }

    const timerTxt = () =>{
        if (second == true){
            const text = 'Стоп'
            return [text]
        }
        if (second == false){
            const text = 'Старт'
            return [text]
        }
    }

    return(
        <View>
            <LinearGradient style={styles.background} colors={['#74e', 'white' ]}>
                <Menu/>
                <View style={styles.container}>

                    <View style={styles.timer}>
                    <CountdownCircleTimer
                        strokeWidth = {20}
                        isPlaying = {timer()}
                        size = {200}
                        duration={2700}
                        colors={['#74e', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}>
                            {({ remainingTime }) => <Text style={styles.timerTxt}>{remainingTime}</Text>}
                    </CountdownCircleTimer>
                    </View>
                    <LinearGradient style={styles.button} colors={['#74e', 'white' ]}>
                        <TouchableOpacity onPress={()=>{setSeconds(!second)}} ><Text style={styles.text}>{timerTxt()}</Text></TouchableOpacity>
                    </LinearGradient>
                </View>
                </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        marginTop: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    timer:{
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button:{
        width: '50%',
        height: '7%',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
    },
    text:{
        color: 'white',
        fontSize: 27,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '9%',
    },
    timerTxt:{
        color: 'white',
        fontSize: 32,
        fontWeight: '600',
    },
})