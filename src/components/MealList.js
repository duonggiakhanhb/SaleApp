import React, {Component} from 'react';
import {FlatList, KeyboardAvoidingView, StyleSheet, Text, View} from "react-native-web";
import PropTypes from 'prop-types';
import ajax from "../ajax";
import MealItem from "./MealItem";

class MealList extends Component {
    static propTypes = {
        fav: PropTypes.bool.isRequired,
        meals: PropTypes.string.isRequired,
        mealsFav: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired,
        setMeal: PropTypes.func.isRequired,
        onback: PropTypes.func.isRequired,
        fil: PropTypes.object.isRequired,
    }
    state = {
        meals: [],
    }


    handleBack = () => {
        this.props.onback();
    }
    async componentDidMount() {
        let fullMeal = await ajax.fetchMealList(this.props.meals, this.props.mealsFav , this.props.fav);
        let ful = [];
        let check = false;
        Object.entries(this.props.fil).map((itemSs) => {
            if(itemSs[1]==true) {
                check=true;
                ful = ful.concat(fullMeal.filter(
                    (meal) => meal[itemSs[0]] == itemSs[1]));
            }
        })
        if (check==false) {
            ful = fullMeal;
        }
        this.setState({
            meals: ful,
        });
        this.props.setMeal(fullMeal);
    }

    render() {
        return (
            <View style={styles.list}>
                <Text onPress={this.handleBack}>Back</Text>
                <FlatList
                    data={this.state.meals}
                    renderItem={({item}) => (
                        <MealItem meal={item}
                                  onPress={this.props.onItemPress}
                        />
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

export default MealList;
