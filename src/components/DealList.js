import React, {Component} from 'react';
import {FlatList, KeyboardAvoidingView, StyleSheet, Text, View} from "react-native-web";
import PropTypes from 'prop-types';
import DealItem from "./DealItem";

class DealList extends Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired,

    }

    render() {
        return (
            <View style={styles.list}>

                <FlatList
                    data={this.props.deals}
                    renderItem={({item}) => (
                        <DealItem deal={item} onPress={this.props.onItemPress}/>
                        )}
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 0.9,
    },

});

export default DealList;
