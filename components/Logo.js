import {Text} from 'react-native';

const Logo = (props) => {
    return(
        <Text style={{
            color: 'orange',
            fontWeight: 'bold',
            fontSize: props.fontSize,
            margin: 5,
        }}>SwApp</Text>

    )
}
export default Logo;