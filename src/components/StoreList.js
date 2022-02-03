import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { sepeteEklendi } from '../actions/SepetActions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const StoreList = ({ addCart, navigation }) => {
  const [data, setData] = useState([]);
  const [sepetData, setSepetData] = useState([]);
  const [sepetUrunCount, setUrunCount] = useState();
  //const navigation = useNavigation();
  //const navigation = actions.navigation;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20') // 20 tane örnek ürün geldi
      .then(res => res.json())
      .then(json => setData(json))
  }, []);

  const sepeteEkle = (item) => {
    addCart(item);
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}

        data={data} // set edilen datayı alıyor
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator} />
          )
        }}
        renderItem={(post) => {
          const item = post.item; // gelen data ile doldurulan item kendisi
          return (
            <View style={styles.card}>

              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>

              <Image style={styles.cardImage} source={{ uri: item.image }} />

              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton} onPress={() => sepeteEkle(item)}>
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png' }} />
                      <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/50/000000/hearts.png' }} />
                      <Text style={styles.socialBarLabel}>25</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </View>

          )
        }}
      />
      <Button title={"Sepet"} onPress={() => navigation.navigate('Sepet')} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});



const mapStateToProps = ({ sepetResponse }) => {
  const { sepetUrunCount } = sepetResponse;
  return { // return dediğim anda artık bu değerler props'a dahil oluyor
    sepetData : sepetResponse.sepetData,
    sepetUrunCount
  };
}

function mapDispatchToProps(dispatch, ownProps) { // 
  return {
    addCart: (item) => dispatch(sepeteEklendi(item, ownProps.sepetUrunCount)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreList);