import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Text, StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import { GamePlatform } from './types'
import { RectButton } from 'react-native-gesture-handler';

type Props = {
    platForm: GamePlatform;
    onChange: (platform: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}
const PlatformCard = ({ 
    platForm, 
    onChange, 
    icon,
    activePlatform
}: Props) => {

    const isActive = platForm === activePlatform;
    const backgroundColor = isActive ? '#fad7c8' : '#fff'
    const textColor = isActive ? '#ed7947' : '#9e9e9e'
    return (
        <RectButton
            style={[styles.platformCard, { backgroundColor: backgroundColor }]}
            onPress={() => onChange(platForm)}
        >
            <Icon name={icon} size={60} color={textColor} />
            <Text style={[styles.platformCardText, {color: textColor}]}>
                {platForm === 'PLAYSTATION' ? 'PS' : platForm}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    platformCard: {
        paddingTop: 30,
        paddingBottom: 20,
        width: '30%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    platformCardText: {
        marginTop: 40,
        color: '#9E9E9E',
        fontSize: 24,
        fontFamily: "Play_700Bold",
        textAlign: 'center'
    },
});

export default PlatformCard;