import {TextInput,TouchableOpacity,View,Text, SafeAreaView, FlatList} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default App=()=> {
  //usestate bazında ikinci parametre içinde ilk parametreyi tutuyorum
  const [text, settext] = useState("")
  const [tasks,setTasks] = useState([])

  //Var olanın içine daha sonra ekleme yapacağımdan dolayı sistem bu şekikde oldu
  const addPress=()=>{
    setTasks([...tasks,text]);
    setTasks("");
  }

  const addDelete=(index)=>{
     const newTasks=[...tasks];
     newTasks.splice(index,1);
     setTasks(newTasks);
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>To Do App</Text>
        
        <Text style={styles.subtitle}>Listeye veri ekleme işlemi</Text>

        <TextInput 
        style={styles.ınput} 
        placeholder="İlgili alanı doldurunuz"
        onChangeText={(value)=>{}}
        >
        </TextInput>

        <TouchableOpacity 
        style={styles.BtnContainer}
        onPress={addPress}
        >
          <Text style={styles.btntxt}>Ekle</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        {/*Burada flatlist etiketi liste görüntüleme de kullanılıyor*/}
        {/* İlk prop göstermek istediğimiz data */}
        {/* İkinci prop ise datayı nasıl göstermek istediğimiz */}
        <FlatList 
        data={tasks}
        renderItem={({item,index})=>(
          <View style={styles.taskcontainer}>
            <Text style={styles.tasktext}></Text>
            <TouchableOpacity 
            style={styles.taskdelete}
            onPress={()=>addDelete(index)}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item=>item+Date.now()+Math.random()}
        >
 
        </FlatList>
      </View>
    </SafeAreaView>
  );
};