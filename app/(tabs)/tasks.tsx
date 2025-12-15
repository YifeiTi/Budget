import {View, Text, StyleSheet, Pressable, FlatList} from "react-native";
import {useRouter} from "expo-router";
import {useState} from "react";


type Task = {
    id: string;
    title: string;
    points: number;
    completed: boolean;
}



export default function Tasks(){
    const router = useRouter();

    const[tasks] = useState<Task[]>([
        {id: "1", title: "Go to the Gym", points: 10, completed: false},
        {id: "2", title: "Cook a Meal", points: 5, completed: false},
        {id: "3", title: "Finish Project", points: 15, completed: false},
        {id: "4", title: "Walk the Dog", points:3, completed: false},
    ]);
    const handleTaskPress = ( task: Task) =>{
        console.log("Pressed:", task.title);
        
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Tasks</Text>
            <FlatList 
                data= {tasks}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) =>( 
                <Pressable style = {styles.taskItem} onPress ={()=> handleTaskPress(item)}>
                    <Text style = {styles.taskTitle}> {item.title}</Text>
                    <Text style = {styles.taskPoints}>{item.points} pts</Text>
                </Pressable>
            )}/>
        </View>
        

        
    );
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
    },
    taskItem:{
        backgroundColor: "beige",
        padding: 16,
        borderRadius: 10,
        marginBottom:12,
    },
    taskTitle:{
        fontSize: 16,
        fontWeight: "600"
    },
    taskPoints:{
        marginTop:5,
        color: "#4A90E2",
        fontWeight:"600",
    },
   
})