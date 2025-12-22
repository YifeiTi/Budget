import {Text, View, StyleSheet, Pressable, FlatList} from "react-native";
import {useTask} from "@/context/TasksContext"
import { useRedeem } from "@/context/RedeemContext";

export default function Stats(){
    const {tasks} = useTask();

    const completedTasks = tasks.filter(t => t.completed).length;

    const totalPoints = tasks.filter(t=>t.completed).reduce((sum,t)=> sum+t.points, 0)

    const {currentPoints, redemptions, redeem} = useRedeem();

    return(
        <View style = {styles.background}>
            <Text style = {styles.title}> Stats:</Text>
            <Text> Completed Tasks: {completedTasks}</Text>
            <Text> Total Points: {totalPoints}</Text>
            <Pressable style = {StyleSheet.redeemButton} onPress={()=> {
                const success = redeem(50);
                if(!success){
                    alert("Not enough points");
                }
            }}><Text style = {styles.redeemText}> Redeem 50 Points! </Text> </Pressable>

            <FlatList
                data = {redemptions}
                keyExtractor={(item)=> item.id}
                renderItem = {({item}) => (<View style = {styles.redemptionItem}> <Text> Redeemed {item.cost} pts</Text>
                <Text>{item.date}</Text></View>)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        backgroundColor: "gray",
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
    },
})