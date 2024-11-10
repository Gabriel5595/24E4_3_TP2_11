import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Experience() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.text}>Cargo: Support Manager - C4T, 2024 - Até o momento</Text>
      <Text style={styles.text}>Descrição: Overseeing end-to-end processing of import and export declarations, meticulously addressing any errors and promptly responding to CAS alerts. Offering strategic guidance to users, proactively upholding seamless client operations. Timely upkeep and availability of critical data. Proficiently documenting and resolving reported queries. Leveraging advanced tools and technologies such as JIRA, CAS System, VS Code, and FileZilla. Collaborating closely with the rest of the Customer Service and development teams to identify and address issues effectively.</Text>
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
