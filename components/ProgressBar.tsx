import {View, StyleSheet} from "react-native";

export default function ProgressBar({progress}: {progress:number}){
    return(
        <View style = {styles.background}>
            <View style = {[styles.fill, {width: `${progress}%`}]}> </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    background:{
        width: "100%",
        height: 20,
        backgroundColor: "Gray",
        borderRadius: 10,
        overflow:"hidden",
        marginTop:20,
    },
    fill:{
        height:"100%",
        backgroundColor:"#1b9e14ff"
    }
})