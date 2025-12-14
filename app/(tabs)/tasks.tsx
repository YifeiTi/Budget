import {View, Text, StyleSheet, Pressable, FlatList} from "react-native";
import {useRouter} from "expo-router";
import {useState} from "react";
import { useRoute } from "@react-navigation/native";

type Task = {
    id: string;
    title: string;
    points: number;
}

const[tasks] = useState<Task[]>([
    {id: "2", title: "Go to the Gym", points: 10},
    {id: "2", title: "Cook a Meal", points: 5},
    {id: "3", title: "Finish Project", points: 15},
]);

export default function Tasks(){
    const router = useRouter;

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize:28,
        fontWeight: "bold",
        marginBottom:20,
    }
})