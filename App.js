import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Button, Image } from 'react-native';
import Logo from "./components/Logo"

function Welcome() {
    return (
        <View style={styles.welcome}>
            <Logo fontSize={50}/>
            <ActivityIndicator size="large" color="white" />
            <StatusBar style="auto" />
        </View>
    );
}

function Connection() {
    return (
        <View style={styles.container}>
            <Logo fontSize={30} />
            <Text style={ {paddingBottom: 10}}>Connexion</Text>
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
            />
            <Text style={ {paddingTop: 100}}>Pas encore de compte ?</Text>
            <Text style={ {paddingTop: 5,textDecorationLine: 'underline', color:'#039be5' }}>Inscrivez-vous !</Text>
        </View>
    );
}

function Registration() {
    return (
        <View style={styles.container}>
            <Logo fontSize={30} />
            <Text style={ {paddingBottom: 10}}>Connexion</Text>
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
            />
            <Text style={ {paddingTop: 100}}>Déjà un compte ?</Text>
            <Text style={ {paddingTop: 5,textDecorationLine: 'underline', color:'#039be5' }}>Connectez-vous !</Text>
        </View>
    );
}

function HomePage() {
    return (
        <View style={styles.homepage}>
            <Logo fontSize={20} />
            <TextInput
                style={styles.input}
                placeholder="Saisir une ville"
            />
            <Image
                style={styles.icon}
                source={require('./icons/filter.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        flex: 1,
        backgroundColor:'#673ab7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#b0bec5",
    },
    homepage: {
        flexDirection: 'row',
        justifyContent: 'baseline'
    },
    icon: {
        width: 20,
        height: 20,
    }

});


export default HomePage;

