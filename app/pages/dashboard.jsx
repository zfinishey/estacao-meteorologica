import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

import {
  LineChart,
  PieChart
} from 'react-native-chart-kit';

export default function DashBoard() {

  const screenWidth = Dimensions.get('window').width;

  const dadosGraficoLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [20, 30, 45, 66, 77, 99]
      }
    ]
  };

  const dadosGraficoPizza = [
    {
      name: 'Aeroporto',
      temp: 23,
      color: '#4FC3F7',
      legendFontColor: '#333',
      legendFontSize: 13
    },
    {
      name: 'Centro',
      temp: 35,
      color: '#E53935',
      legendFontColor: '#333',
      legendFontSize: 13
    },
    {
      name: 'Jardim Esplanada',
      temp: 27,
      color: '#FB8C00',
      legendFontColor: '#333',
      legendFontSize: 13
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,

    color: (opacity = 1) =>
      `rgba(33, 150, 243, ${opacity})`,

    labelColor: (opacity = 1) =>
      `rgba(0, 0, 0, ${opacity})`,

    style: {
      borderRadius: 16
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Dashboard Meteorológica
      </Text>


      {/* CARDS 

      <View style={styles.cardsContainer}>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Temperatura</Text>
          <Text style={styles.cardValor}>27°C</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Umidade</Text>
          <Text style={styles.cardValor}>65%</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Vento</Text>
          <Text style={styles.cardValor}>12 km/h</Text>
        </View>

      </View>
      */}

      {/* GRÁFICO DE LINHA */}

      <View style={styles.graficoContainer}>
        <Text style={styles.graficoTitulo}>
          Temperatura nos Bairros de Mirandópolis
        </Text>

        <LineChart
          data={dadosGraficoLinha}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.grafico}
        />
      </View>

      {/* GRÁFICO DE PIZZA */}

      <View style={styles.graficoContainer}>
        <Text style={styles.graficoTitulo}>
          Temperatura nos Bairros de Mirandópolis
        </Text>

        <PieChart
          data={dadosGraficoPizza}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          absolute
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F9'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#1E293B'
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    width: '30%',
    padding: 15,
    borderRadius: 15,
    elevation: 4
  },

  cardTitulo: {
    fontSize: 14,
    color: '#666'
  },

  cardValor: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#2196F3'
  },

  graficoContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    padding: 10,
    elevation: 4
  },

  graficoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  grafico: {
    borderRadius: 15
  }

});