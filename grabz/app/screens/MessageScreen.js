import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList } from "react-native";
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import SafeAreaScreen from '../components/SafeAreaScreen';


const data = [
    {
      id: "1",
      title: "First Item",
      subTitle: "python",
      image: require('../assets/mosh.jpg')
    },
    {
        id: "2",
        title: "Second Item",
        subTitle: "Java",
        image: require('../assets/mosh.jpg')
    },
    {
        id: "3",
        title: "Third Item",
        subTitle: "CSharp",
        image: require('../assets/mosh.jpg')
    },
  ];


function MessageScreen(props) {
    const [messages, setMessages] = useState(data);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        // Delete the message from messages
        console.log(message);
        const newMessages = messages.filter(m => m.id !== message.id);
        console.log(newMessages);
        setMessages(newMessages);
        // Call the server to delete

    }
    return (
        <SafeAreaScreen>
            <FlatList 
            data={messages} 
            keyExtractor={message => message.id.toString()} 
            renderItem={({item}) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                    onPress={() => console.log("Message Selected", item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages(
                    [
                        {
                            id: "3",
                            title: "Third Item",
                            subTitle: "CSharp",
                            image: require('../assets/mosh.jpg')
                        }
                    ]
                )

            }}
                />
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    listView:{
        padding: 30,
        paddingTop: 60,
    }
})
export default MessageScreen;