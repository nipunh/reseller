import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

export default function MessageScreen() {

  const init = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/chair.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/couch.jpg"),
    },
  ]

  const [messages, setMessage] = useState(init);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete message from messages
    //call the server

    setMessage(messages.filter((msg) => msg.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent = {ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {setMessage(init)}}
      />
    </Screen>
  );
}
