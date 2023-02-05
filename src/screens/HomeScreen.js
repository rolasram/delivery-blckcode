import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
/*react-native es un framework de desarrollo de aplicaciones móviles que permite crear aplicaciones móviles nativas para iOS y Android.*/
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {colors, parameters} from '../global/styles';
import {filterData, restaurantData} from '../global/Data';
import FoodCard from '../components/FoodCard';
import Countdown from 'react-native-countdown-component'
import RestaurantMapScreen from './RestaurantMapScreen'
//import {ScrollView} from 'react-native-virtualized-view';
/*react-native-virtualized-view es un paquete adicional que proporciona una implementación de ScrollView optimizada para grandes cantidades de datos y 
mejora el rendimiento al hacer solo los cálculos necesarios para mostrar los elementos visibles en la pantalla en lugar de todos los elementos en su totalidad.*/ 


//Se utiliza para calcular el tamaño de la pantalla
const SCREEN_WIDTH = Dimensions.get('window').width;

/* FlatListEs un componente de la biblioteca de React Native que se usa para mostrar una lista de datos de forma eficiente. 
Es una alternativa mas eficiente que el componente 'ScrolView' cuando se tieneuna gran cantidad de elementos de una lista. 
FlatList utiliza un enfoque "virtual rendering" para renderizar solo los elementos visibles en pantalla, lo que reduce significativamente
el uso de memoria y mejora el rendimiento de la aplicacion, ademas proporciona funciones utiles como la paginacion, la carga infinita y el desplazamiento suave*/

/*Dimensions Es un objeto de React Native que proporciona informacion sobre las dimensiones de la pantalla en la
que se esta ejecutando la aplicacion. Esto es util si deseas adaptar la apariencia de tu aplcacion
en funcion del tamaño de la pantalla*/

/*ScrollView es un componente de la biblioteca de React Native que permite crear una vista de desplazamiento en la aplicación. 
Es útil para mostrar contenido que excede el tamaño de la pantalla, como listas largas, imágenes o texto. ScrollView permite 
desplazar el contenido hacia arriba o hacia abajo y seguir viendo el contenido que está fuera de la pantalla.*/

/* Countdown Es un componente o librería que se utiliza para crear un contador de tiempo regresivo en aplicaciones web o móviles. 
Es decir, permite mostrar en pantalla la cantidad de tiempo restante para un evento o tarea específica. 
Por ejemplo, se puede utilizar para contar hacia una fecha límite, como una cuenta regresiva para un lanzamiento de producto o un evento en vivo.*/

/*TouchableOpacity es un componente en React Native que permite a los usuarios interactuar con la aplicación al tocar un 
elemento en la pantalla. Este componente es una envoltura alrededor de la View y proporciona la capacidad de ajustar la 
opacidad cuando se toca, lo que permite que los usuarios sepan que han presionado un elemento. Al proporcionar una sensación 
táctil para los elementos en la pantalla, TouchableOpacity puede mejorar la experiencia del usuario.
*/
export default function HomeScreen({navigation}) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0 ');

  /*"stickyHeaderIndices" es una propiedad que permite hacer que un encabezado se mantenga fijo en la parte superior de la pantalla mientras se desplaza el contenido. 
      En este caso, se establece que el primer encabezado debe ser fijo en la parte superior.

        "showsVerticalScrollIndicator" es una propiedad que indica si se debe mostrar o no el indicador de desplazamiento vertical en la pantalla. 
        En este caso, se establece en "true", lo que significa que se mostrará el indicador de desplazamiento.*/

  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView 
      stickyHeaderIndices={[0]} 
      showsVerticalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.cardbackground, paddingBottom: 10}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurantMapScreen")
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>22 Bessie Street</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now </Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            //Por default viene en vertical, aqui se pone horizontal en true
            horizontal={true}
            //Quita el indicador que aparece abajo
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                //Al presionar cualquier alli lo ubica y cambia de color seleccionado
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    //Carga las imagenes que estan alamcenadas en Data.js y abajo con su respectivo nombre
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelected}
                          : styles.smallCardText
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>

        <View>

          <View style = {{flexDirection: 'row', alignItems:"center", marginTop:10}}>
            <Text style = {{marginLeft: 15, fontSize:16, marginTop: -10, marginRight:5}}>Options changing in</Text>
            <Countdown
              until = {3600}
              size = {14}
              digitStyle = {{backgroundColor:colors.lightgreen, borderRadius:10}}
              digitTxtStyle = {{color:colors.cardbackground}}
              timeToShow = {['M','S']}
              timeLabels = {{m:'Min', s:'Sec'}}
            />
          </View>

          <FlatList
            /*"style" es una propiedad en "FlatList" de React Native que se utiliza para definir el estilo de la lista. 
             Esta propiedad se pasa como un objeto de estilo que define las propiedades CSS para la lista, como el ancho, 
            la altura, el margen, el padding, etc.*/
            style={{marginTop: 10, marginBottom: 10}}
            //Por default viene en vertical, aqui se pone horizontal en true
            horizontal={true}
            //Quita el indicador que aparece abajo
            showsHorizontalScrollIndicator={false}
            /*La propiedad "data" en "FlatList" en React Native es una propiedad requerida que especifica los datos que se deben mostrar en la lista. 
            Estos datos pueden ser cualquier cosa, desde una simple matriz de números hasta objetos complejos con múltiples propiedades.*/
            data={restaurantData}
            /*El keyExtractor es una propiedad de la FlatList que es una función que permite extraer una clave única de cada item en la lista. 
            La clave es utilizada por el componente FlatList para identificar de manera única cada item en la lista, lo que mejora el rendimiento y la optimización de la lista. 
            Sin una clave única, FlatList puede no funcionar correctamente.
            
            En este ejemplo, "renderItem" toma un objeto con dos propiedades: "item" y "index". "Item" es el elemento actual en la lista y "index" es su posición en la lista.*/
            keyExtractor={(item, index) => index.toString()}
            /*"renderItem" es una propiedad en "FlatList" en React Native que se utiliza para renderizar cada elemento en la lista. 
            Se trata de una función que se invoca para cada elemento en los datos especificados en la propiedad "data".
            La función "renderItem" recibe un argumento que incluye información sobre el elemento actual, incluyendo el elemento en sí y su índice en la lista. 
            La función debe devolver un componente que se renderiza para el elemento actual.*/
            renderItem={({item}) => (
              <View style={{marginRight: 10}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  numberofReviewm={item.numberOfReview}
                  businessAddress={item.bussinessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            /*"style" es una propiedad en "FlatList" de React Native que se utiliza para definir el estilo de la lista. 
             Esta propiedad se pasa como un objeto de estilo que define las propiedades CSS para la lista, como el ancho, 
            la altura, el margen, el padding, etc.*/
            style={{marginTop: 10, marginBottom: 10}}
            //Por default viene en vertical, aqui se pone horizontal en true
            horizontal={true}
            //Quita el indicador que aparece abajo
            showsHorizontalScrollIndicator={false}
            /*La propiedad "data" en "FlatList" en React Native es una propiedad requerida que especifica los datos que se deben mostrar en la lista. 
            Estos datos pueden ser cualquier cosa, desde una simple matriz de números hasta objetos complejos con múltiples propiedades.*/
            data={restaurantData}
            /*El keyExtractor es una propiedad de la FlatList que es una función que permite extraer una clave única de cada item en la lista. 
            La clave es utilizada por el componente FlatList para identificar de manera única cada item en la lista, lo que mejora el rendimiento y la optimización de la lista. 
            Sin una clave única, FlatList puede no funcionar correctamente.
            
            En este ejemplo, "renderItem" toma un objeto con dos propiedades: "item" y "index". "Item" es el elemento actual en la lista y "index" es su posición en la lista.*/
            keyExtractor={(item, index) => index.toString()}
            /*"renderItem" es una propiedad en "FlatList" en React Native que se utiliza para renderizar cada elemento en la lista. 
            Se trata de una función que se invoca para cada elemento en los datos especificados en la propiedad "data".
            La función "renderItem" recibe un argumento que incluye información sobre el elemento actual, incluyendo el elemento en sí y su índice en la lista. 
            La función debe devolver un componente que se renderiza para el elemento actual.*/
            renderItem={({item}) => (
              <View style={{marginRight: 10}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  numberofReviewm={item.numberOfReview}
                  businessAddress={item.bussinessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurant in your Area</Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {
          restaurantData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                numberofReviewm={item.numberOfReview}
                businessAddress={item.bussinessAddress}
                farAway={item.farAway}
                averageReview={item.averageReview}
              />
            </View>
          )
          )
          }
        </View>
        
      </ScrollView>

{ delivery &&
      <View style = {styles.floatButton}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('RestaurantMapScreen')
          }}>
          <Icon
            name = 'place'
            type='material'
            size = {32}
            color = {colors.buttons}
            />

          <Text style={{color:colors.grey2}}>Map</Text>

        </TouchableOpacity>
      </View>
}
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },

  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },

  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },

  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },

  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  //Cuando esta seleccionado cambia a color Anaranjado la categoria
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  //Estilo de texto cuando esta seleccionado el item
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  //Estilo de texto cuando no esta seleccionado
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },

  floatButton:{
    position:'absolute',
    bottom:10,
    right:15,
    backgroundColor: 'white',
    elevation:10,
    width: 60,
    eight:60,
    borderRadius: 30,
    alignItems: 'center'
  }
});
