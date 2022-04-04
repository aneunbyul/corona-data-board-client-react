import React from "react";
import ReactDOM from "react-dom";
import {
  BlobProvider,
  Document,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import PSPDFKit from "./PSPDFKit";


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => {

  ReactDOM.render(
    <BlobProvider document={MyDocument}>
      {({blob, url, loading, error}) => {
        if (blob) {
          return <PSPDFKit blob={blob}/>;
        }

        if (error) {
          return error;
        }

        return <div>The PDF is rendering...</div>;
      }}
    </BlobProvider>,
    window.document.getElementById("root")
  )


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.section}>
          <Text>We're inside a PDF!</Text>
        </View>
      </Page>
    </Document>
  )
}
export default MyDocument
