import React, {Component} from 'react';
import { StyleSheet, TextInput } from "react-native-web";
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { StickyContainer, Sticky } from 'react-sticky';

class SeachBar extends Component {
    static propTypes = {
        seachDeals: PropTypes.func.isRequired,
        //initialSearchTerm: PropTypes.string.isRequired,
    }
    state = {
        searchTerm: '',
        //this.props.initialSearchTerm,
    }
    deboucedSearchDeals = debounce(this.props.seachDeals, 300);

    handleChange = (searchTerm) => {
        this.setState({ searchTerm }, () => {
            this.deboucedSearchDeals(this.state.searchTerm);
            console.log('change searchTerm');
        });
    }

    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder="Search All Deals"
                onChangeText={this.handleChange}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 15,
        flex: 0.1,
        fixed: 'top',
    },

});

export default SeachBar;
