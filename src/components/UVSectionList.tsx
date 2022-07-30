import React from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { TSectionListProps } from "./uvsectionlist.types";

const UVSectionList = ({
  sectionData,
  getItem,
  handleItemPress,
}: TSectionListProps) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={sectionData}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              handleItemPress?.(item);
            }}
            style={[styles.wrapperCustom, styles.item]}
          >
            <Text style={styles.text}>{getItem(item)}</Text>
          </Pressable>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `uv-${item + index}`}
      />
    </View>
  );
};

export default UVSectionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: "100%",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
