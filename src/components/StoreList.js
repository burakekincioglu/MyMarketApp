import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { sepeteEklendi } from '../actions/SepetActions';
import { pickerSelected } from '../actions/PickerActions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import CardSection from './CardSection';


const StoreList = ({ addCart, navigation }) => {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [sayi, setSayi] = useState(0);
  const [searchText, setSearch] = useState("");
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20') // 20 tane örnek ürün geldi  
      .then(res => res.json())
      .then((json) => {
                        setData(json);
                        setCopyData(json);
                      })
    setSearch("");
    setFiltredData([]);
    
  }, []);

  const searchProduct = (searchtext) => {
    setData(copyData);
    console.log(searchtext);
    setFiltredData([]);
    //setSearch(searchtext);
    for (var i = 0; i < data.length; i++) {
      if (data[i].title.includes(searchtext)) {
        filtredData.push(data[i]);
      }
    }
    //filtredData && filtredData.length > 0 ? filtredData : data;
    if(filtredData && filtredData.length > 0)
    {
      setData(filtredData);
    }
    else{
      setData(copyData);
    }
    //setFiltredData(filtredData);
    console.log(data);

  }

  // const showProducts = () => {
  //   return filtredData && filtredData.length > 0 ? filtredData : data;
  // }

  const sepeteEkle = (item) => {
    setSayi(sayi + 1);
    addCart(item);
  }

  const artanListele = () => {
    let numbersCopy = [...data];
    numbersCopy.sort((a, b) => a.price - b.price);
    setData(numbersCopy);
  }

  const updateListData = (fiyatFiltreTuru) => {
    switch (fiyatFiltreTuru) {
      case "artan":
        artanListele();
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchView}>
      <SearchBar
        round={true}
        lightTheme={true}
        placeholder="Search..."
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={searchText => setSearch(searchText)}
        value={searchText}
      />
      <Button title={"Ara"} onPress={() => searchProduct(searchText)} />
      </View>

      <View>
        <Picker selectedValue={"free"} onValueChange={fiyatFiltreTuru => updateListData(fiyatFiltreTuru)}>
          <Picker.Item label="Ürünleri Sırala" value="Unknown" />
          <Picker.Item label="Fiyata Göre Artan" value="artan" />
        </Picker>
      </View>


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
          const singleProduct = post.item; // gelen data ile doldurulan item kendisi
          return (
            <View style={styles.card}>

              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{singleProduct.title}</Text>
                  <Text style={styles.price}>{singleProduct.price} TL</Text>
                </View>
              </View>

              <Image style={styles.cardImage} source={{ uri: singleProduct.image }} />

              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton} onPress={() => sepeteEkle(singleProduct)}>
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png' }} />
                      <Text style={[styles.socialBarLabel, styles.buyNow]}>Sepete Ekle</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/50/000000/hearts.png' }} />
                      <Text style={styles.socialBarLabel}>{Math.floor((Math.random() * 100) + 1)}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </View>

          )
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sepet')}
      >
        <Text>Sepete Git </Text>
        <View style={{ backgroundColor: 'red', borderRadius: 50, padding: 5 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>{sayi}</Text></View>
      </TouchableOpacity>
      {/* <Button title={"Sepete Git"} onPress={() => navigation.navigate('Sepet')} /> */}
    </View>
  );
};



const styles = StyleSheet.create({
  searchView: {
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center'
  },
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
    marginLeft: 5
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



const mapStateToProps = ({ sepetResponse, pickerResponse }) => {
  const { sepetData } = sepetResponse;
  const { filtreTuru } = pickerResponse;
  return { // return dediğim anda artık bu değerler props'a dahil oluyor
    //sepetData : sepetResponse.sepetData,
    sepetData,
    filtreTuru
  };
}

function mapDispatchToProps(dispatch) { // 
  return {
    addCart: (item) => dispatch(sepeteEklendi(item)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreList);