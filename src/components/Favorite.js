import React, {Component} from 'react';
import {Text, Touchable,StyleSheet, View} from "react-native-web";
import PropsTypes from "prop-types";

class Favorite extends Component {

    static propTypes = {
        onPress: PropsTypes.func.isRequired,
    }
    handleClick = () => {
        this.props.onPress();
    }
    render() {
        return (
            <View style={styles.main} >
                <Text onPress={this.handleClick}>Favorite</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
   main: {
       flex: 0.5,
       textAlign: 'right',
   }
});

export default Favorite;
