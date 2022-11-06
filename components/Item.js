import { StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native';

const DATA = [
    {
        id: '1',
        description: 'Bon marché'

    },
    {
        id: '2',
        description: 'Prix intermédiaire'
    },
    {
        id: '3',
        description: 'Prix élevé'
    },
    {
        id: '4',
        description: 'Luxe'
    },

];

const renderItem = () => (
    <Image
        style={styles.icon}
        source={require('../icons/euro.png')}
    />
);


const Item = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.item}
                source={require('../items/sweatshirt.jpg')}
            />
            <Text>Sweatshirt gris</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />

        </View>

    );
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 4 / 3) * 0.35;
const imageWidth = dimensions.width*0.35;

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 20
    },
    item: {
        height: imageHeight, width: imageWidth
    },
    icon: {
        width: 15,
        height:15,
        margin: 1,
        color: 'rgba(0,0,0,0)'
    }

});

export default Item;