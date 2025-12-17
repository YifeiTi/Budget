import {Text, View, StyleSheet} from "react-native";

export default function Stats(){
    return(
        <View style = {styles.background}>
            <Text style = {styles.title}> Stats:</Text>
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