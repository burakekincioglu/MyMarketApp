import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, Button } from 'react-native';
import CardSection from './CardSection';
//import { Button } from './Button';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Sepet = ({ sepetData, navigation }) => {

  //////////////////////////////////////
  const [toplam, setToplam] = useState("");
  var toplama = 0;

  useEffect(() => {
    for (var i = 0; i < sepetData.length; i++) {
      toplama += sepetData[i].price;
    }
    setToplam(toplama);
  });
  ///////////////////////////////////////

  return (
    <View style={styles.container}>

      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}

        data={sepetData} // set edilen datayı alıyor
        horizontal={false}
        numColumns={1}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator} />
          )
        }}
        renderItem={(post) => {
          const item = post.item;
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

              </View>
            </View>

          )
        }}
      />
      <CardSection>
        <View style={styles.buttonView}>
          <Text>
            Toplam Fiyat: {toplam}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.buttonView} >
          <Button title={"Satın Al"} onPress={() => navigation.navigate('SatinAl')} />
        </View>
      </CardSection>

    </View>
  );

}


const styles = StyleSheet.create({
  buttonView: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    flexDirection: 'row'
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
    alignItems: 'center',

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
    width: 300
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
    fontSize: 22,
    color: "green",
    marginTop: 5,
    fontWeight: 'bold'
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
  //const { sepetUrunCount } = sepetResponse;
  return { // return dediğim anda artık bu değerler props'a dahil oluyor
    sepetData: sepetResponse.sepetData,
    toplam: sepetResponse.toplam
    // sepetUrunCount
  };
}


export default connect(mapStateToProps)(Sepet);