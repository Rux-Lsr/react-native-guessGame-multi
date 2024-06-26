import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    width: 25,
    height: 25,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  element2: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    position: 'absolute',
  },
  element3: {
    width: 25,
    height: 25,
    backgroundColor: 'orange',
    position: 'absolute',
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container2FootMenu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
