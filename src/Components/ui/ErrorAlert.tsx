import { Alert } from "@chakra-ui/react";

const ErrorAlert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Title>{message}</Alert.Title>
    </Alert.Root>
  );
};

export default ErrorAlert;
