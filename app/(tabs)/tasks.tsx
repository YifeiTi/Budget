import {View, Text, StyleSheet, Pressable, FlatList} from "react-native";
import {useRouter} from "expo-router";
import {useState} from "react";
import ProgressBar from "@/components/ProgressBar";


type Task = {
    id: string;
    title: string;
    points: number;
    completed: boolean;
}



export default function Tasks(){
    const router = useRouter();
    const placeHolderPoints = 100;

    const[tasks, setTasks] = useState<Task[]>([
        {id: "1", title: "Go to the Gym", points: 30, completed: false},
        {id: "2", title: "Cook a Meal", points: 10, completed: false},
        {id: "3", title: "Finish Project", points: 50, completed: false},
        {id: "4", title: "Walk the Dog", points:10, completed: false},
    ]);
    const handleTaskPress = ( task: Task) =>{
        const updatedTasks = tasks.map((t) =>{
            if (t.id === task.id){
                return{
                    ...t,//expands the component t into its individual components
                    completed: !t.completed, //change completed to the opposite of what it was
                };
            }
            return t;
        });
        setTasks(updatedTasks);
    };

    const totalPoints = tasks //the filter gets rid of Task items that aren't complete
        .filter((task) => task.completed).reduce((sum, task) => sum + task.points, 0);

    const progress = Math.min((totalPoints/placeHolderPoints)*100, 100)
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Tasks</Text>
            <Text style = {styles.points}> Total Points: {totalPoints}</Text>
                {totalPoints >= placeHolderPoints && <Text style = {styles.taskDone} >Budget Unlocked!!</Text>}
            <ProgressBar progress={progress}/>
            <FlatList 
                data= {tasks}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) =>( 
                <Pressable style = {[styles.taskItem, item.completed && styles.taskCompleted]} onPress ={()=> handleTaskPress(item)}>
                    <Text style = {[styles.taskTitle, item.completed && styles.taskTitleCompleted]}> {item.title}</Text>
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
    taskCompleted:{
        backgroundColor: "#d3f9d8",
    },
    taskTitleCompleted:{
        textDecorationLine: "line-through",
        color: "#777",
    },
   points:{
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 16,
   },
   taskDone:{
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 16,
        display: "flex",
   },
   
})