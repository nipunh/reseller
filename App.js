import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://07add04aae7844ad26d275d8976a68f5@o4508507428749312.ingest.us.sentry.io/4508507835203584",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  // profilesSampleRate is relative to tracesSampleRate.
  // Here, we'll capture profiles for 100% of transactions.
  profilesSampleRate: 1.0,
});



const app = function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator /> 
      
    </NavigationContainer>
  );
}

export default Sentry.wrap(app);

