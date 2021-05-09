import React, {Component} from 'react';
import {Text, Touchable,StyleSheet, View} from "react-native-web";
import PropsTypes from "prop-types";

class FilterNavabar extends Component {

    static propTypes = {
        onPress: PropsTypes.func.isRequired,
    }
    handleClick = () => {
        this.props.onPress();
    }
    render() {
        return (
            <View style={styles.main} >
                <Text onPress={this.handleClick}>Filter</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
   main: {
       marginVertical: '12',
       flex: 0.3
   }
});

export default FilterNavabar;
