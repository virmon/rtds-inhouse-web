import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components';

// const Heading = styled.Text`
//   margin: 10px;
//   font-size: 22px;
//   font-family: 'Helvetica';
// `;

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
    <Document title="Invoice">
      <Page size="A4" style={styles.page}>
      <Text>Section #2</Text>
      {/* <Heading>Invoice</Heading> */}
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
);

class Pdf extends Component {
    render() {
        return(
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
        );
    }
}

export default Pdf;