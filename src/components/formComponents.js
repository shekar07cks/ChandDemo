import React from 'react';
import { Label, TextInput } from 'react-native';

export class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <Text>User Name</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your username!"
                onChangeText={(text) => this.setState({ text })}
                value={this.props.value}
            />
        </React.Fragment>
    }
}