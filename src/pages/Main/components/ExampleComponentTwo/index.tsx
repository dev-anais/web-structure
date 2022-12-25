import Input from "@components/forms/Input";
import { useState } from "react";
import * as styles from "./styles";

const ExampleComponentTwo = () => {
  const [message, setMessage] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  return (
    <div css={styles.container}>
      <p>This is ExampleComponentTwo. This is for only Main page.</p>
      <div>
        <label>Message: </label>
        <Input
          size="small"
          css={styles.input}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div>
        <label>Contact: </label>
        <Input.Phone
          size="small"
          css={styles.input}
          value={contact}
          onChange={(value) => setContact(value)}
        />
      </div>
      <div>
        <p>YOU WRITE : {message}</p>
        <p>YOUR CONTACT : {contact}</p>
      </div>
    </div>
  );
};

export default ExampleComponentTwo;
