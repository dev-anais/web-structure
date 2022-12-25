import Button from "@components/forms/Button";
import * as styles from "./styles";
const ExampleComponentOne = () => {
  return (
    <div css={styles.container}>
      <p>This is ExampleComponentOne. This is for only Main page.</p>
      <Button styleType="primary" css={styles.smallButton}>
        EXAMPLE BUTTON
      </Button>
    </div>
  );
};

export default ExampleComponentOne;
