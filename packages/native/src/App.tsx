import "./initialize-firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";

import { CurrentUserContextProvider } from "./auth/current-user-context";
import { SignUp } from "./auth/onboarding/sign-up";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CurrentUserContextProvider>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
            />
          </Stack.Navigator>
        </QueryClientProvider>
      </CurrentUserContextProvider>
    </NavigationContainer>
  );
}
