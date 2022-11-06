import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, StatusBar, Image, ScrollView } from 'react-native';
import Logo from "../components/Logo"
import Item from "../components/Item"

const DATA = [
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },
    {
        id: '1',

    },


];

const renderItem = () => (
    <Item />
);

function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo fontSize={35} />
                <TextInput
                    style={styles.input}
                    placeholder="Saisir une ville"
                />
                <Image
                    style={{
                        width: 25,
                        height: 25,
                        marginTop: 10
                    }}
                    source={require('../icons/filter.png')}/>
            </View>
            <ScrollView style={styles.body}>
                <FlatList
                    style={styles.itemsRow}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </ScrollView >

            <View style={styles.footer} >
                <View  style={styles.iconsFooter}>
                    <Image
                        style={styles.icon}
                        source={require('../icons/home.png')}/>
                    <Text>Accueil</Text>
                </View>
                <View  style={styles.iconsFooter}>
                    <Image
                        style={styles.icon}
                        source={require('../icons/plus.png')}/>
                    <Text>Troquer</Text>
                </View>
                <View  style={styles.iconsFooter}>
                    <Image
                        style={styles.icon}
                        source={require('../icons/user.png')}/>
                    <Text>Profil</Text>
                </View>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    input: {
        marginTop: 10,
        height: 30,
        width: 200,
        borderWidth: 1,
        padding: 5,
        color: "#b0bec5",
    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    body: {
        flex: 0.9,

    },
    footer: {
        flex: 0.1,
        //backgroundColor: 'gold',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconsFooter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    itemsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});


export default HomePage;
