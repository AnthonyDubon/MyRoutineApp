
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = {
  title: string;
};

export default function CustomButton({ title }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'navy',
    padding: 12,
    marginTop: 10,
    width: 180,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});
