import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from "../components/Logo"

function Welcome() {
    return (
        <View style={styles.welcome}>
            <Logo fontSize={50}/>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor:'#673ab7',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Welcome;