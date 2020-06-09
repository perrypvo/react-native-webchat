import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends Component {
    state = {
        messages: []
    }

    get user () {
        return {
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        // TODO:
    }

    componentWillUnmount() {
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} user={this.user} />;

        if (Platform.OS === "android") {
            return (
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding"
                keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }
        return <SafeAreaView style={{ flex: 1}}>{chat}</SafeAreaView>
    }
}

