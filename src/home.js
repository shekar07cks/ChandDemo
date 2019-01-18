import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Container, Button, Text, Icon, Content, Form, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles/style';
import ChartsLayout from "./components/chartsLayout";
// import BarChart from "./components/charts/barChart";

export default class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        apple: [2, 4, 7, 2],
        organ: [6, 9, 9, 2],
    }

}
    render() {
        return (
            <React.Fragment>
                <View> 
                    <ChartsLayout optionsType={"barChart"} data={[this.state.organ, this.state.apple]} height={300} />
                </View> 
            </React.Fragment> 
        );
    }
}
