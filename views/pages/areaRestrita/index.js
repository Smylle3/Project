import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { Profile, Edicao, Cadastro } from "../../bridge.js";
import styles from "./styles.js";

export default function AreaRestrita({ navigation }) {
  const Tab = createMaterialBottomTabNavigator();

  async function exitProfile() {
    navigation.navigate("Login");
    await AsyncStorage.clear();
  }

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#b2772c"
      inactiveColor="#ffe6c1"
      barStyle={styles.areaTab}
    >
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="person" size={19} color="#b2772c" />,
        }}
      />
      <Tab.Screen
        name="Editar"
        component={Edicao}
        options={{
          tabBarIcon: () => <Icon name="create" size={20} color="#b2772c" />,
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastro}
        options={{
          tabBarIcon: () => <Icon name="add-circle" size={20} color="#b2772c" />,
        }}
      />
    </Tab.Navigator>
  );
}
