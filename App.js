import {TextInput,TouchableOpacity,View,Text, SafeAreaView, FlatList} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default App=()=> {
  const[todotitle,settodotitle] = useState("")
  const [todolist,settodolist] = useState(inittodolist)
  let inittodolist=[
    {title:"Disiplin",complate:true},
    {title:"Çalışma",complate:true},
    {title:"Azim",complate:true},
    {title:"Başar",complate:true},
  ]
  return (
    <SafeAreaView 
    style=
    {{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
      <View 
      style=
      {{flex:3,
        alignItems:"center",
        justifyContent:"center",
        padding:10,width:"100%"
      }}
        >
        <TextInput
        onChangeText={(value)=>settodotitle(value)}
        value={todotitle}
        style=
        {{
          width:"100%",
          borderColor:"#00f",
          borderWidth:2,
        }}
          >

          </TextInput>
      </View>

      <View style={{flex:1}}>
        {
          todolist.forEach(Element=>{
              <Text style={{}}>

              </Text>
          })
        }
      </View>

      <TouchableOpacity 
      style=
      {{width:60,
        height:60,
        backgroundColor:"#00f",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        //Burada position absolute olması konumlandırmamı manuel yaptı
        position:'absolute',
        right:30,
        bottom:30
      }}>
        <Text 
        style=
        {{color:"#fff",
        fontSize:20,
        }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};