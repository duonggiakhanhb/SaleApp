import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Button, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import {ListItem} from 'react-native-elements';
import PropTypes from 'prop-types';
import priceDisplay from "../util";
import ajax from "../ajax";

class MealDetail extends Component {
    static propTypes = {
        initDealData: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired,
        fav: PropTypes.func.isRequired,
        selectFav: PropTypes.func.isRequired,
    }
    state = {
        meal: this.props.initDealData,
        fav: false,
    }

    componentDidMount() {
        console.log('start ', this.state.fav);
        this.setState({fav: this.props.selectFav(this.state.meal.id)});
        console.log('end ', this.state.fav);
    }

    handleFav = () => {
        this.props.fav(this.state.meal.id);
        this.setState({
            fav: !this.state.fav,
        });
    }

    render() {
        const { meal } = this.state;
        console.log('render ', this.state.fav);
        return (
            <View style={styles.meal}>
                <View>
                    <TouchableOpacity onPress={this.props.onBack}>
                        <Text style={styles.backLink}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleFav}>
                        <Text style={[styles.fav, this.state.fav
                            ? styles.favT : styles.favF]}>Favorite</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                    <View style={styles.details}>
                        <Text>{meal.duration.toString().toUpperCase()}m</Text>
                        <Text>{meal.complexity.toString().toUpperCase()}</Text>
                        <Text>{meal.affordability.toString().toUpperCase()}</Text>
                    </View>
                    <Text style={styles.title}>Ingredients</Text>
                    <View>
                    {meal.ingredients.map(ingredient => (
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                    ))}
                    </View>
                    <Text style={styles.title}>Steps</Text>
                    {meal.steps.map(step => (
                        <ListItem key={step}>{step}</ListItem>
                    ))}

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    fav: {
        margin: 'right',
    },
    favT: {
        color: 'green',
    },
    favF: {
        color: '#0c0c0c',
    }

});

export default MealDetail;
