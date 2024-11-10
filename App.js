import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import SoftSkills from './components/SoftSkills';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={PersonalInfo} />
        <Tab.Screen name="Educação" component={Education} />
        <Tab.Screen name="Experiência" component={Experience} />
        <Tab.Screen name="Idiomas" component={Languages} />
        <Tab.Screen name="Soft Skills" component={SoftSkills} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
