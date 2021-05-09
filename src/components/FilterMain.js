import React, {Component} from 'react';
import {Text, Touchable,StyleSheet, View} from "react-native-web";
import PropsTypes from "prop-types";
import {Switch} from "react-native";
import FilterNavabar from "./FilterNavabar";
class FilterMain extends Component {

    static propTypes = {
        onPress: PropsTypes.func.isRequired,
        prop: PropsTypes.object.isRequired,
        onBack: PropsTypes.func.isRequired,
    };
    state = {
        filterState: this.props.prop,
    }
    componentWillUnmount() {
        this.props.onPress(this.state.filterState);
    }

    changeState(item) {
        let fil = Object.assign({}, this.state.filterState);
        fil[item] = !fil[item];
        this.setState({
            filterState: fil,
        });
    }
    render() {
        const { filterState } = this.state;
        return (
            <View style={styles.main} >
                <FilterNavabar onPress={this.props.onBack} />
                <View style={styles.fil}>
                    <Text style={styles.text}>Gluten Free</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={filterState.isGlutenFree ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.changeState('isGlutenFree')}
                        value={filterState.isGlutenFree}
                    />
                </View>
                <View style={styles.fil}>
                    <Text style={styles.text}>Vegan</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={filterState.isVegan ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.changeState('isVegan')}
                        value={filterState.isVegan}
                    />
                </View>
                <View style={styles.fil}>
                    <Text style={styles.text}>Vegetarian</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={filterState.isVegetarian ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.changeState('isVegetarian')}
                        value={filterState.isVegetarian}
                    />
                </View>
                <View style={styles.fil}>
                    <Text style={styles.text}>Lactose Free</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={filterState.isLactoseFree ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.changeState('isLactoseFree')}
                        value={filterState.isLactoseFree}
                    />
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
   main: {
       width: '100%',
       textAlign: 'center',
   },
    fil: {
       marginTop: 12,
        flexDirection: 'row',
    },
    text: {
      flex: 0.2,
    },
    switch: {
    }
});

export default FilterMain;
