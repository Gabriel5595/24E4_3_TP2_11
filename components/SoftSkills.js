import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SoftSkills() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Soft Skills</Text>
      <Text style={styles.text}>Comunicação</Text>
      <Text style={styles.text}>Trabalho em equipe</Text>
      <Text style={styles.text}>Resolução de problemas</Text>
      <Text style={styles.text}>Gestão do tempo</Text>
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
