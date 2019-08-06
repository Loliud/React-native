import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import home from '../assets/Home.png';


const onTapButton = () =>{
    Alert.alert('You tapped the button');
}


export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.box}>
                <Text style={styles.textContent}>{category.title}</Text>
                <Image style={styles.image} source={category.image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        elevation: 10,
        marginBottom: 16
    },

    textContent: {
        fontWeight: "700",
        paddingBottom: 10,
        textTransform: "uppercase",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1
    },
    image: {
        height: 64,
        width: 64
    }
});

