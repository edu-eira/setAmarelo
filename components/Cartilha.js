import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';


export default function Cartilha() {

  return(
    <View style={styles.container}>
      
    <Text>
     1. Transtornos mentais: você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio.
  </Text>
    <Text>
     2. Hisórico pessoal: Tentaiva prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio têm de cinco a seis vezes mais chances de tentar novamente.
  </Text>
  <Text>
     3. Ideação suicida: Comentários que demonstrem desespero, desesperença e desemparo podem ser manifestação de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido", "caso não nos encontremos de novo", "eu preferia estar morto" - são sinais de alerta.
    </Text>
    <Text>
      4. Fatores estressores crônicos e recentes: Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima,além daqueles que levem a prejuízo econômico e social, como falência e perda do emprego, estão associados ao surgimento de pensamentos suicidas.
    </Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: "white",
    alignItems: "left",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 20,
  },

});