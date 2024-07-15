import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
export default function Card(){
    return(
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View>
                <Text style={styles.bankName}> Bank </Text>
          </View>
          <View style={styles.numberContainer}>
            <View style={styles.number}/>
            <View style={styles.number}/>
            <View style={styles.number}/>
            <View>
                <Text style={styles.LastNumber}>6538</Text>
            </View>
            </View>
            <View style={styles.validityContainer}>
                <View style={styles.validity}/>
                <Text style={styles.slashText}>/</Text>
                <View style={styles.validity}/>
            </View>
            <View style={styles.visaContainer}>
                <Text style={styles.visaText}>VISA</Text>
            </View>
            
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        alignItems: 'center'
    },
    card:{
        backgroundColor: '#00131E',
        width: 280,
        height: 179,
        borderRadius: 10,
        padding: 30,
        margin: 10,
        marginLeft: 20
    },
    bankName:{
        color: '#fff',
        fontSize: 20,
        fontFamily:'Inter_700Bold'
    },
    numberContainer:{
        flexDirection: 'row',
        marginTop: 15,
        alignItems:'center'
    },
    number:{
        height: 19,
        width: 57,
        backgroundColor:'grey',
        marginRight:10,
        borderRadius: 2
    },
    LastNumber:{
        color: 'grey',
        fontSize: 20,
        fontFamily:'Inter_400Regular'
    },
    validityContainer:{
        flexDirection: 'row',
        marginTop: 15,
        alignItems:'center'
    },
    validity:{
        height: 19,
        width: 38,
        backgroundColor:'grey',
        marginRight:10,
        borderRadius: 2
    },
    slashText:{
        color: 'grey',
        fontSize: 20,
        fontFamily:'Inter_400Regular',
        marginRight: 10
    },
    visaText:{
        color: '#fff',
        fontSize: 20,
        fontFamily:'Inter_700Bold' 
    },
    visaContainer:{
        alignSelf:'flex-end'
    }

})