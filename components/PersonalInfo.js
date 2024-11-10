import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PersonalInfo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text style={styles.text}>Nome: Gabriel Carvalho</Text>
      <Text style={styles.text}>Idade: 30</Text>
      <Text style={styles.text}>Localização: Mechelen, Bélgica</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});
