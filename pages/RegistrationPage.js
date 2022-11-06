import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import Logo from "../components/Logo"

function Registration() {
    return (
        <View style={styles.container}>
            <Logo fontSize={50} />
            <Text style={styles.text}>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
            />
            <TextInput
                style={styles.input}
                placeholder="Prénom"
            />
            <TextInput
                style={styles.input}
                placeholder="Adresse mail"
            />
            <TextInput
                style={styles.input}
                placeholder="Pseudo"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmez votre mot de passe"
            />
            <TextInput
                style={styles.input}
                placeholder="Votre ville de troc"
            />
            <Button
                title="Créer"
                color="#673ab7"
                //disabled
            />
            <Text style={ {marginTop: 50}}>Déjà un compte ?</Text>
            <Text style={ {marginBottom: 20,textDecorationLine: 'underline', color:'#039be5' }}>Connectez-vous !</Text>
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
        height: 35,
        width: 250,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        color: "#b0bec5",
    },
});

export default Registration;