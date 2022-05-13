import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  CardEcomOne,
  CardTen,
  CardFive,
  CardSeven,
} from "react-native-card-ui";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

<<<<<<< HEAD
<<<<<<< HEAD
export const Cards = ({navigation,name,des,img}) => {
=======
export const Cards = ({navigation,name,des,img, time}) => {
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
    const saveCard = async (key,value) => {
        try {
            await AsyncStorage.setItem(key, value)
          } catch (e) {
              console.log(e);
          }
    }
    return(
        <View>
            <Card style = {styles.cardStyle} elevation = {2} onPress = {() => {
                navigation.navigate("SeeMore", {t: name, d: des, pic: img});
            }} onLongPress = {() => {
<<<<<<< HEAD
                const jsonValue = JSON.stringify({t: name, d: des, pic: img});
=======
                const jsonValue = JSON.stringify({t: name, d: des, pic: img, timeStamp: time});
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
                saveCard(name, jsonValue);
                Toast.show({
                    type: 'success',
                    text1: 'Digest Saved! 💾',
                    text2: name
                  });
            }}>
                <Card.Cover source={{ uri: img }} style={styles.test}/>
                <Card.Content>
                    <Title>{name}</Title>
                    <Paragraph>{des.slice(0,50).replace(/(\r\n|\n|\r)/gm, "") + "..."}</Paragraph>
<<<<<<< HEAD
=======
                    <Paragraph>{Date(time).toString().slice(0,11)}</Paragraph>
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
                </Card.Content>
            </Card>
        </View>
    );
}
=======
export const Cards = ({ navigation, name, des, img, time }) => {
  const saveCard = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Card
        style={styles.cardStyle}
        elevation={2}
        onPress={() => {
          navigation.navigate("SeeMore", { t: name, d: des, pic: img });
        }}
        onLongPress={() => {
          const jsonValue = JSON.stringify({
            t: name,
            d: des,
            pic: img,
            timeStamp: time,
          });
          saveCard(name, jsonValue);
          Toast.show({
            type: "success",
            text1: "Digest Saved! 💾",
            text2: name,
          });
        }}
      >
        <Card.Cover source={{ uri: img }} style={styles.test} />
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>
            {des.slice(0, 50).replace(/(\r\n|\n|\r)/gm, "") + "..."}
          </Paragraph>
          <Paragraph>{new Date(time).toString().slice(0, 11)}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};
>>>>>>> upstream/master

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  test: {
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
