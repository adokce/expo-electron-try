import React from "react";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Button,
  Icon
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light as lightTheme } from "@eva-design/eva";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text catetory="h1">HOME</Text>

    <FacebookIcon />
    <LoginButton />
  </Layout>
);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;

export const FacebookIcon = style => <Icon name="facebook" {...style} />;

export const LoginButton = () => (
  <Button icon={FacebookIcon}>Login with Facebook</Button>
);
