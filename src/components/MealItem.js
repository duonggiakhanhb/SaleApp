import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import PropTypes from 'prop-types';

class MealItem extends Component {
    static propTypes = {
        meal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    handlePress = () => {
        this.props.onPress(this.props.meal.id, this.props.meal);
    }

    render() {
        const {meal} = this.props;
        return (
            <TouchableOpacity style={styles.meal} onPress={this.handlePress}>
                <Image source={{uri: meal.imageUrl}} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    meal: {
        marginHorizontal: 12,
        marginTop: 12
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 2,

    },
    price: {
        flex: 1,
        textAlign: 'right',
    },

});

export default MealItem;
