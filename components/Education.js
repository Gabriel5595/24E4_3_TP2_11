import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Education() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text style={styles.text}>Graduação: Relações Internacionais, ESPM, 2017</Text>
      <Text style={styles.text}>Graduação: Eng. da Computação, INFNET, 2025</Text>
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
