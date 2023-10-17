import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FC, useState } from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import { useMutation } from "react-query";

import { useCurrentUser } from "../current-user-context";

const auth = getAuth();

interface FormData {
  email: string;
  password: string;
}

const useSignUp = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    },
  });
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export const SignUp: FC = () => {
  const { mutate: signUp } = useSignUp();
  const [formState, setFormState] = useState<FormData>({
    email: "",
    password: "",
  });

  const currentUser = useCurrentUser();

  const onSave = () => {
    signUp(formState);
  };
  return (
    <View>
      <Text>{JSON.stringify(currentUser ?? {}, null, 2)}</Text>
      <TextInput
        style={styles.input}
        value={formState.email}
        onChangeText={(email) => setFormState((cur) => ({ ...cur, email }))}
      />
      <TextInput
        style={styles.input}
        value={formState.password}
        onChangeText={(password) =>
          setFormState((cur) => ({ ...cur, password }))
        }
      />
      <Button onPress={onSave} title="Sign Up" color="#841584" />
    </View>
  );
};
