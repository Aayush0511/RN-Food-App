import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onTermSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e0e0e0',
        height: 40,
        borderRadius: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        marginVertical: 16
    },
    inputStyle: {
        flex: 1,
        fontSize: 16
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 28,
        marginHorizontal: 8
    }
});

export default SearchBar;