import { Input, FormInputLabel, Group } from "./form-input.styles";

type FormInputTypes = {
  label: string;
  [otherProps: string]: any
}

const FormInput = ({ label, ...otherProps }: FormInputTypes) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
