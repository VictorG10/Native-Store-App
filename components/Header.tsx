import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <View style={styles.buttonView}>
        {/* <TouchableOpacity
          style={[styles.favoriteButton && styles.activeFavoriteButton]}
        >
          <AntDesign name={"heart"} size={20} color={"#333"} />
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.favoriteButton}>
          <MaterialCommunityIcons name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: "center",
    zIndex: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  activeFavoriteButton: {
    backgroundColor: "#ffe6e6",
  },
  buttonView: {
    flexDirection: "row",
  },
});
