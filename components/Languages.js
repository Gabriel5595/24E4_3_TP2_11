import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Languages() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <Text style={styles.text}>Inglês: Avançado</Text>
      <Text style={styles.text}>Espanhol: Avançado</Text>
      <Text style={styles.text}>Francês: Intermediário</Text>
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
