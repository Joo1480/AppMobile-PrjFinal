import { StyleSheet } from "react-native";

export default StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'column',
  },
  Cabeçalho: {
    height: 85,
    backgroundColor: '#d41e73',
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 15,
    elevation: 10,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
  CabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  CabBotao: {
    marginRight: 15,
  },
  Menu: {
    paddingTop: 25,
  },
  MenuColuna: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  MenuItem: {
    borderWidth: 3,
    borderColor: '#d41e73',
    borderRadius: 5,
    margin: 15,
    padding: 10,
    height: 115,
    width: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
  MenuLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d41e73',
    marginTop: 5,
  },

});