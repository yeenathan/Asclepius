import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

export const CustomButton = (): React.ReactElement => (
  <Layout style={styles.container} level='1'>

    {/* Small Buttons */}
    <View style={styles.row}>
      <Button style={styles.smallButton} textStyle={styles.buttonText}>View info</Button>
      <Button style={styles.smallButtonB} textStyle={styles.buttonText} appearance='outline'>
        Cancel
      </Button>
      <Button style={styles.smallButton} textStyle={styles.buttonText}>Info</Button>
    </View>

    {/* Medium Buttons */}
    <View style={styles.row}>
      <Button style={styles.mediumButtonOrange} textStyle={styles.buttonText}>Edit Med Info</Button>
      <Button style={styles.mediumButtonB} textStyle={styles.buttonText}>Archive This Med</Button>
    </View>

    {/* Large Buttons */}
    <View style={styles.row}>
      <Button style={styles.largeButtonOrange} textStyle={styles.buttonText}>Confirm</Button>
      <Button style={styles.largeButtonB} textStyle={styles.buttonText}>Scan Med again</Button>
      <Button style={styles.largeButtonGreen} textStyle={styles.buttonText}>Confirm</Button>
    </View>
    
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  smallButton: {
    backgroundColor: '#89CCC8',
    borderRadius: 15,
    width: '7%',
    borderWidth: 0,
  },
  smallButtonB: {
    backgroundColor: 'white',
    borderColor: '#89CCC8',
    borderRadius: 15,
    width: '7%',
    borderWidth: 3,
  },
  mediumButtonOrange: {
    backgroundColor: '#FDC26A',
    borderRadius: 15,
    width: '10%',
    borderWidth: 0,
  },
  mediumButtonB: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '10%',
    borderColor: '#FDC26A',
    borderWidth: 3,
  },
  largeButtonOrange: {
    backgroundColor: '#FDC26A',
    borderRadius: 15,
    width: '13%',
    borderWidth: 0,
  },
  largeButtonB: {
    backgroundColor: 'white',
    borderColor: '#FDC26A',
    borderRadius: 15,
    width: '13%',
    borderWidth: 3,
  },
  largeButtonGreen: {
    backgroundColor: '#89CCC8',
    borderRadius: 15,
    width: '13%',
    borderWidth: 0,
  },
  buttonText: {
    color: '#000000', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
