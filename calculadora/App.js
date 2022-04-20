import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Row from "./components/row";
import Button from "./components/button";

import React from 'react';
import {actions, initialState, reducer} from './reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return ( //view se adapta según el tipo de dispositivo (Android o iOS)
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.text}> {state.currentValue} </Text>
        <Row> 
          <Button text="C" theme="secondary" onPress={()=>dispatch({type: actions.CLICK_C})}/>
          <Button text="+/-" theme="secondary"/>
          <Button text="%" theme="secondary"/>
          <Button text="/" theme="accent"/>
        </Row>

        <Row> 
          <Button text="7" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:7})}/>
          <Button text="8" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:8})}/>
          <Button text="9" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:9})}/>
          <Button text="*" theme="accent"/>
        </Row>

        <Row> 
          <Button text="4" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:4})}/>
          <Button text="5" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:5})}/>
          <Button text="6" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:6})}/>
          <Button text="-" theme="accent"/>
        </Row>

        <Row> 
          <Button text="1" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:1})}/>
          <Button text="2" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:2})}/>
          <Button text="3" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:3})}/>
          <Button text="+" theme="accent" onPress={()=>dispatch({type: actions.CLICK_OPERATOR, value:'+'})}/>
        </Row>

        <Row> 
          <Button text="0" onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:0})}/>
          <Button text="." onPress={()=>dispatch({type: actions.CLICK_NUMBER, value:"."})}/>
          <Button text="=" theme="accent" onPress={()=>dispatch({type: actions.CLICK_EQUAL})}/>
        </Row>
      </SafeAreaView>
    </View>
  );
}
//lo que hay enca da etiqueta son los children
//SafeAreaViewpara saltarse la barra de notificaciones
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 20,
    //alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: "#fff",
    fontSize: 40,
    textAlign:"right"
  },
});
