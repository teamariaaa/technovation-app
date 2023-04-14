import React, {  } from "react";
import { Card, Paragraph } from "react-native-paper";
import { StyleSheet, Image } from "react-native";

export interface FoodItem {
    id : number
    name: string,
    photo : any,
    calories : number,
    protein : number,
    fat : number,
    carbs : number,
}

const styles = StyleSheet.create({
    container: {
        marginTop: "3%",
        marginBottom: "3%",
        marginLeft: "3%",
        marginRight: "3%"
    },
});

const FoodItemCard = ({ foodItem }: {foodItem : FoodItem}) => {
    
    return (
        <Card key = {foodItem.id} style={styles.container}>
            <Paragraph> {foodItem.name}</Paragraph>
            <Image style={{width: 85, height: 70}} source = {foodItem.photo} />
        </Card>
    )
}

export default FoodItemCard;