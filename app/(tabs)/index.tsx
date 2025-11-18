import{View,Text,StyleSheet, Pressable} from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> My Budget App </Text>
            <Text style={styles.points}>Points: 0</Text>
            <Pressable style={styles.button}>
                <Text style = {styles.buttonText}>Go to Tasks</Text>
            </Pressable>
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
    title:{
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    points:{
        fontSize: 20,
        marginLeft: 10,
    },
    button:{
        backgroundColor:"#4A90E2",
        padding:16,
        borderRadius:10,
        marginTop:20,
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        textAlign:"center",
        fontWeight:600,
    }
})