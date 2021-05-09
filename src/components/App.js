import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ajax from '../ajax';
import DealList from "./DealList";
import MealList from "./MealList";
import MealDetail from "./MealDetail";
import FilterNavabar from "./FilterNavabar";
import FilterMain from "./FilterMain";
import Favorite from "./Favorite";

class App extends Component {
    state = {
        deals: [],
        meals: [],
        mealsFav: [],
        currentMealId: null,
        dealsFromSearch: [],
        filterState: {
            isGlutenFree: false,
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false,
        },
        activeFilter: false,
        activeFavorite: false,
        categoryCurr: null,
    }

    async componentDidMount() {
        let deals = await ajax.fetchInitialDeals();
        this.setState({deals});
    }
    setCategoryId = (categoryCurr) => {
        this.setState({
            categoryCurr
        });

    }
    unsetCategoryId = () => {
        this.setState({
            categoryCurr: null,
        });
    }

    setCurrentId = (dealId) => {
        this.setState({
            currentMealId: dealId,
        });
    };

    unsetCurrentId = () => {
        this.setState({
            currentMealId: null,
        });
    };
    setMeal = (meals) => {
        this.setState({
            meals
        });
    };
    changeActiveFilter = () => {
        this.setState({
            activeFilter: !this.state.activeFilter,
            }
        );
        console.log('app change ', this.state.activeFilter)
    }
    changeActiveFavorite = () => {
        this.setState({
            activeFavorite: !this.state.activeFavorite,
            }
        );
        console.log('app change ', this.state.activeFavorite)
    }

    getMeal = (mealId) => {
        const meal = this.state.meals.find((meall) =>
            meall.id === mealId
        )
        return meal;
    }

    setFilter = (prev) => {
        this.setState({
            filterState: prev,
        });
    }
    favortite = (id) => {
        let mealsFav = this.state.mealsFav;
        const check = mealsFav.indexOf(id);
        console.log('favorite ', check, id);
        if(check != -1) mealsFav.splice(check,1);
        else mealsFav = mealsFav.concat(id);
        this.setState({mealsFav});
    }
    selectFav = (id) => {
        let check = this.state.mealsFav.indexOf(id);
        console.log('main return ', check);
        if (check != -1 ) return true;
        return false;
    }

    render() {
        if(this.state.activeFilter) {
            return <FilterMain onPress={this.setFilter}
                               prop={this.state.filterState}
                               onBack={this.changeActiveFilter}
            />
        }

        if (this.state.currentMealId) {
            return (
            <View>
                <MealDetail initDealData={this.getMeal(this.state.currentMealId)}
                            fav={this.favortite}
                            selectFav={this.selectFav}
                            onBack={this.unsetCurrentId} />
            </View>
            )
        }
        if(this.state.activeFavorite){
            return (
                <View style={styles.main}>
                    <MealList meals={this.state.categoryCurr ?? 'c1'} onItemPress={this.setCurrentId}
                              setMeal={this.setMeal}
                              fav={false}
                              mealsFav={this.state.mealsFav}
                              onback={this.changeActiveFavorite}
                              fil={this.state.filterState}
                    />
                </View>
            )        }
        if (this.state.categoryCurr) {
            return (
                <View style={styles.main}>
                    <MealList meals={this.state.categoryCurr} onItemPress={this.setCurrentId}
                              setMeal={this.setMeal}
                              fav={true}
                              mealsFav={this.state.mealsFav}
                              onback={this.unsetCategoryId}
                              fil={this.state.filterState}
                    />
                </View>
            )
        }
        const dealsToDisplay = this.state.deals;
        if (dealsToDisplay.length > 0) {
            return (
                <View style={styles.main}>
                    <View style={styles.navabar}>
                        <FilterNavabar onPress={this.changeActiveFilter}/>
                        <Favorite onPress={this.changeActiveFavorite}/>
                    </View>
                    <DealList deals={dealsToDisplay} onItemPress={this.setCategoryId}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text styles={styles.header}>Adam</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        marginTop: 12,
        flex: 1,
    },
    header: {
        fontSize: 40,
    },
    navabar: {
        textAlign: 'center',
        flexDirection: 'row',
    }
});
export default App;
