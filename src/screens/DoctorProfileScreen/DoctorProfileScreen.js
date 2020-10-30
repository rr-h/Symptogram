import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import WelcomeImg from '../../../assets/images/welcomeImg';
import SymptogramLogo from '../../../assets/images/logo';

export default function DoctorProfileScreen({navigation}) {

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
	}
	
	const onGetStarted = () => {
        navigation.navigate('DoctorLogin')
    }
	
    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
				<SymptogramLogo style={styles.logo} />
				<Text style={styles.slogan}>Welcome</Text>
				<WelcomeImg style={styles.welcomeImage} />
                <TextInput
                    style={styles.symptomsButton}
                    placeholder="Write your HerId and Secret Code we sent to you"
                    onChangeText={(text) => setSymptomText(text)}
                    value={symptomText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onGetStarted()}>
                    <Text style={styles.buttonTitle}>Verify</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}