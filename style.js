import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    padding:10
  },
  title:{
    fontSize:30,
    textAlign:"center",
  },
  subtitle:{
    fontSize:20,
    textAlign:"center",
    Color:"#666"
  },
  ınput:{
    //backgroundColor:"green",
    borderRadius:7,
    borderWidth:1,
    borderColor:"#ddd",
    paddingTop:10
  },
  BtnContainer:{
    backgroundColor:"lightgreen",
    alignItems:"flex-end",
    alignSelf:"flex-end",
    paddingTop:5,
    borderRadius:7,
    marginTop:10,
  },
  btntxt:{
    fontSize:20,
    borderRadius:4,
    margin:10
    
  },
  divider:{
    height:1,
    backgroundColor:"#ddd",
    //margin vertical**,
    marginVertical:32
  },
  taskcontainer:{
    backgroundColor:"red",
    borderBottomWidth:10,
    borderEndColor:"#ddd",
    flexDirection:"row",
    justifyContent:"space-between",
    //** */
    paddingVertical:12
  },
  taskdelete:{
    fontSize:18,
    backgroundColor:"red",
    width:23,
    height:23,
    borderRadius:13,
    justifyContent:"center",
    alignItems:"center"
  },
  tasktext:{
    fontSize:18
  },

  }
);