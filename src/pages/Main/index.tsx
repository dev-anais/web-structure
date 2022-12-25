import { MainProvider } from "@contexts/Main";
import ExampleComponentOne from "./components/ExampleComponentOne";
import ExampleComponentTwo from "./components/ExampleComponentTwo";

import * as styles from "./styles";
const Main = () => {
  return (
    <MainProvider>
      <div css={styles.container}>
        <ExampleComponentOne />
        <ExampleComponentTwo />
      </div>
    </MainProvider>
  );
};

export default Main;
