import { StyleSheet, Text, View } from "react-native";
import { useTypedSelector } from "../../clubhouse/hooks/typedHooks";
import { RootTabScreenProps } from "../../types";
import CONTACTS from "./contacts.strings";

const ContactsScreen = ({
  navigation,
  route,
}: RootTabScreenProps<"Contacts">) => {
  const contactName = useTypedSelector((state) => state.contacts.name);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contacts of {route?.name} will be here soon
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
