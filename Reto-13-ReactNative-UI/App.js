import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardPost from './components/CardPost';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import data from './data';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleProject}>My first UI</Text>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardPost {...item} />}
          keyExtractor={(item) => `card-${item.id}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    maxWidth: 450,
  },
  list: {
    marginTop: 25,
  },
  titleProject: {
    marginTop: 15,
    fontSize: 40,
    fontFamily: 'Nunito_500Medium',
  },
});
