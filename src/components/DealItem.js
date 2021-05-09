import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import PropTypes from 'prop-types';

class DealItem extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    handlePress = () => {
        this.props.onPress(this.props.deal.id);
    }

    render() {
        const {deal} = this.props;
        console.log( deal.media);
        return (
            <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
                <Image source={{uri: deal.media}} style={[styles.image, deal.media ?? { background: deal.color }]}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12
    },
    image: {
        width: '100%',
        height: 150,
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

export default DealItem;
