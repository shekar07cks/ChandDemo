import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Button, Text, Icon, Content, Form, Item, Input, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles/style';
import { TextBox } from "./components/formComponents";
// import FBLogin from './components/fbLogin'

export default class Login extends React.Component {
    render() {
        return ( <View>
            <TextBox />
        </View>
            // <Container>
            //     <Content>
            //         <Form>
            //             <Item>
            //                 <Input placeholder="Username" />
            //             </Item>
            //             <Item last>
            //                 <Input placeholder="Password" />
            //             </Item>
            //             <Button onPress={() => this.props.navigation.navigate('Home')}>
            //                     <Icon name='home' />
            //                     <Text>Login</Text>
            //                 </Button>
            //             <Button>
            //                 <Icon name='home' />
            //                 <Text>
            //                     SignUp
            //             </Text>
            //             </Button>
            //         </Form>
            //     </Content>       
            // </Container>
        );
    }
}
