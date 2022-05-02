import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const localRestaurants = [
  {
    name: "Oceanside Bar",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.0
  },
  {
    name: "Benihana",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["Japanese", "Bar"],
    price: "$$$",
    reviews: 7200,
    rating: 4.5
  },

]
export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1.0} style={{marginBottom:30}}>
      {localRestaurants.map((restaurant, index) => (
        <View key={index} style={{marginTop:10, padding:15, backgroundColor:"white"}}>
          <RestaurantImage image={restaurant.image_url}/>
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image 
      source={{ 
        uri: props.image
      }}
      style={{width:"100%", height:180}}
    />
    <TouchableOpacity style={{position: 'absolute', right:20, top:20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color='#ffff'></MaterialCommunityIcons>
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View 
    style={{
      flexDirection:"row", 
      justifyContent: "space-between",
      alignItems:"center",
      marginTop:10, 
    }}>
    <View>
      <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
      <Text style={{ fontSize: 13, color:"gray" }}>30-45 min</Text>
    </View>
    <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:'center',justifyContent:"center",borderRadius:15}}>
      <Text>{props.rating}</Text>
    </View>
  </View>
  
)