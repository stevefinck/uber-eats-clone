import React, { useState, useEffect } from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";

export default function Home() {

  let [restaurantData, setRestaurantData] = useState(localRestaurants);

  useEffect(() => {
    setRestaurantData(otherRestaurants);
  }, []);
 
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor:"white", padding:15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

export const otherRestaurants = [
  {
    name: "Oceanside Bar",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 1.5
  },
  {
    name: "Benihana",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["Japanese", "Bar"],
    price: "$$$",
    reviews: 7200,
    rating: 0.5
  },

]