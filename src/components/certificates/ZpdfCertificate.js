import React from 'react';
import {
  Page,
  View,
  Text,
  Document,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

class ZpdfCertificate extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getUTCDate();
    this.state = {
      date: date,
    };
  }
  render() {
    return (
      <Document>
        <Page size='A4' orientation='landscape' style={styles.page}>
          <View style={styles.container}>
            <View style={styles.sectionLeft}>
              <Image
                style={styles.image}
                src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LWNQxQf-dm-dr94dDMj%2Favatar.png?generation=1547672003797954&alt=media'
              />
              <View style={styles.bottom}>
                <Text style={styles.pLight}>Edera - Online course company</Text>
                <Text style={styles.pLight}> https://www.ed-era.com/</Text>
              </View>
            </View>
            <View style={styles.sectionRight}>
              <Text style={styles.h1}> Certificate of completion</Text>
              <Text style={styles.p}>issued by EDERA on {this.state.date}</Text>
              <Text style={styles.p}> states that </Text>
              <Text style={styles.h2}>
                {this.props.selectedStudent.firstName}{' '}
                {this.props.selectedStudent.lastName}
              </Text>
              <Text style={styles.p}>
                has successfully completed the online course:
              </Text>
              <Text style={styles.h2}>
                {this.props.selectedStudent.courses[0].name}
              </Text>
              <Text style={styles.p}>
                {this.props.selectedStudent.courses[0].hours} hours
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
}

export default ZpdfCertificate;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#db3d44',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  sectionLeft: {
    backgroundColor: '#db3d44',
    flexDirection: 'column',
    width: '25%',
    padding: '10',
    paddingRight: '20',
    '@media max-width: 400': {
      width: '100%',
    },
    position: 'relative',
  },
  sectionRight: {
    backgroundColor: '#E2EDF5',
    padding: '80',
    flexDirection: 'column',
    width: '75%',
    '@media max-width: 400': {
      width: '100%',
    },
  },
  image: {
    padding: '20',
  },
  //   imageBackground: {
  //     position: 'absolute',
  //     right: '0',
  //     top: '0',
  //     zIndex: '3',
  // minWidth: "100%",
  //   minHeight: "100%",
  //   display: "block",
  //   },
  pLight: {
    fontSize: '14',
    color: 'white',
    paddingBottom: '10',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  h1: {
    fontSize: '35',
    color: '#0f5180',
    paddingBottom: '40',
  },
  h2: {
    fontSize: '30',
    color: '#0f5180',
    paddingBottom: '30',
    paddingTop: '20',
  },
  p: {
    fontSize: '20',
    paddingBottom: '10',
  },
});
