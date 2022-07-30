import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../clubhouse/hooks/typedHooks";
import UVSectionList from "../../components/UVSectionList";
import { RootTabScreenProps } from "../../types";
import CONTACTS from "./contacts.strings";
import { TContact } from "./contacts.types";
import cData from "../../../assets/contacts.json";
import { setContacts } from "./redux/contacts.reducer";

const ContactsScreen = ({
  navigation,
  route,
}: RootTabScreenProps<"Contacts">) => {
  const dispatch = useDispatch();
  const contactName = useTypedSelector((state) => state.contacts.name);
  const contactsData = useTypedSelector((state) => state.contacts.contactsData);

  useEffect(() => {
    dispatch(setContacts(cData));
  }, []);

  const handleListItemPress = (contactObj: TContact) => {
    console.debug(`${contactObj.firstName}`);
  };

  const getDisplayName = (contactObj: TContact) => {
    return `${contactObj.firstName}${
      contactObj.lastName ? " " + contactObj.lastName : ""
    }`;
  };

  return (
    <View style={styles.container}>
      {contactsData?.length > 0 ? (
        <UVSectionList
          sectionData={contactsData}
          getItem={getDisplayName}
          handleItemPress={handleListItemPress}
        />
      ) : (
        <Text>{CONTACTS.noData}</Text>
      )}
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
