import { SerializedStyles } from "@emotion/react";
import { removeHyphen, updateHyphen } from "@utils/phoneFormatter";
import Input from "../Input";
import { Size } from "../types";

type PhoneProps = {
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent) => void;
  size: Size;
  isError?: boolean;
  css?: SerializedStyles;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "onChange"
>;

const Phone = ({ value, onChange = () => null, ...props }: PhoneProps) => {
  const formatPhone = (phone: string) => {
    console.log(phone);
    const withoutHyphenPhoneNumber = removeHyphen(phone);

    if (withoutHyphenPhoneNumber.length <= 3) {
      return phone;
    }

    return updateHyphen(phone);
  };

  return (
    <Input
      type="tel"
      maxLength={13}
      value={value}
      onChange={(event) => onChange(formatPhone(event.target.value), event)}
      {...props}
    />
  );
};

export default Phone;
