import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import Logo from "../components/Logo"


function Connection() {
    return (
        <View style={styles.container}>
            <Logo fontSize={50} />
            <Text style={styles.text}>Connexion</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse mail"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
            />
            <Button
                title="Se connecter"
                color="#673ab7"
                //disabled="true"
            />
            <Text style={ {paddingTop: 100}}>Pas encore de compte ?</Text>
            <Text style={ {paddingTop: 5,textDecorationLine: 'underline', color:'#039be5' }}>Inscrivez-vous !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        height: 40,
        width: 200,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        color: "#b0bec5",
    }
});

export default Connection;