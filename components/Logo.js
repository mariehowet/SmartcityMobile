import {Text} from 'react-native';

const Logo = (props) => {
    return(
        <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: props.fontSize,
        }}>SwApp</Text>

    )
}
export default Logo;