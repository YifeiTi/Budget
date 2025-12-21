import {Text, View, StyleSheet} from "react-native";
import {useTask} from "@/context/TasksContext"

export default function Stats(){
    const {tasks} = useTask();

    const completedTasks = tasks.filter(t => t.completed).length;

    const totalPoints = tasks.filter(t=>t.completed).reduce((sum,t)=> sum+t.points, 0)

    return(
        <View style = {styles.background}>
            <Text style = {styles.title}> Stats:</Text>
            <Text> Completed Tasks: {completedTasks}</Text>
            <Text> Total Points: {totalPoints}</Text>
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