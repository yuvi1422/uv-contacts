/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

/**
 * linking is used to open app using an url.
 * When we click on url, app's corresponding screen open
 */
import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Bengaluru: {
            screens: {
              ContactsScreen: "Bengaluru",
            },
          },
          Sangli: {
            screens: {
              ContactsScreen: "Sangli",
            },
          },
          Pune: {
            screens: {
              ContactsScreen: "Pune",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
