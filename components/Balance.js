import React from "react";
import { View, Text,StyleSheet, Pressable, onPress } from "react-native";
import { useState, useCallback } from "react";

export default function Balance(){
    const [, regenerateRadomData] = useState();
    const updateData = useCallback(() => regenerateRadomData({}), []);

    return(
        <View style={styles.balanceContainer}>
            <View style={styles.balanceBox}>
                <Text style={styles.currentBalance}>Current Balance</Text> 
                <Pressable onPress= {updateData}><Text style={styles.balance}>${(Math.random() * 1000).toFixed(2)}</Text></Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    balanceContainer:{
        alignItems: 'center'
    },
    balanceBox:{
        width: 280,
        borderWidth:.6,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 20,
        marginLeft: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: 'space-around'

    },
    currentBalance:{
        fontSize: 20,
        fontFamily:'Inter_700Bold'
    },
    balance:{
        fontSize: 20,
        fontFamily:'Inter_700Bold'
    },
    containerLeft:{
        alignSelf: 'flex-start'
    },
    containerRight:{
        alignSelf: 'flex-end'
    }
})