import React from 'react';
import {
  Page,
  View,
  Text,
  Document,
  Image,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import './ZpdfCertificateSent.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class ZpdfCertifacteSent extends React.Component {
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
      hash: props.match.params.hash,
      certificateSettings: {},
      error: false,
    };
  }

  //fetch data for certificate
  componentDidMount() {
    let urlCertificate = `https://zertify-server.herokuapp.com/api/certificate/${
      this.state.hash
    }`;
    fetch(urlCertificate)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({
          certificateSettings: JSON.parse(data.certificate.settings),
        });
      })
      .catch(error => {
        console.log('error: ', error);
        this.setState({error: true});
      });
  }

  render() {
    console.log('settings', this.state.certificateSettings);
    if (this.state.error) {
      return (
        <section className='flex-certificate-final'>
          <h1>Something went wrong...</h1>
          <h2>
            The link seems to be invalid, please contact Edera at
            <a href='mailto:info@ed-era.com'> info@ed-era.com </a>
          </h2>
          <img
            src='https://media.giphy.com/media/Bp3dFfoqpCKFyXuSzP/source.gif'
            alt='GIF of someone lost'
          />
        </section>
      );
    } else if (Object.keys(this.state.certificateSettings).length === 0) {
      return (
        <div style={styles.spinner}>
          <CircularProgress style={{width: '100px'}} />
        </div>
      );
    } else {
      return (
        <PDFViewer style={styles.document}>
          <Document>
            <Page
              size='A4'
              orientation='landscape'
              style={{backgroundColor: this.state.certificateSettings.color}}>
              <View style={styles.container}>
                <View
                  style={[
                    styles.sectionLeft,
                    {backgroundColor: this.state.certificateSettings.color},
                  ]}>
                  <Image
                    style={styles.image}
                    src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LWNQxQf-dm-dr94dDMj%2Favatar.png?generation=1547672003797954&alt=media'
                  />
                  <View style={styles.bottom}>
                    <Text style={styles.pLight}>Edera </Text>
                    <Text style={styles.pLight}>Online course company</Text>
                    <Text style={styles.pLight}>https://www.ed-era.com/</Text>
                  </View>
                </View>
                <View style={styles.sectionRight}>
                  <Text style={styles.h1}> Certificate of completion</Text>
                  <Text style={styles.p}>
                    issued by EDERA on {this.state.date}
                  </Text>
                  <Text style={styles.p}> states that </Text>
                  <Text style={styles.h2}>
                    {this.state.certificateSettings.firstName}{' '}
                    {this.state.certificateSettings.lastName}
                  </Text>
                  <Text style={styles.p}>
                    has successfully completed the online course:
                  </Text>
                  <Text style={styles.h2}>
                    {this.state.certificateSettings.name}
                  </Text>
                  <Text style={styles.p}>
                    {this.state.certificateSettings.hours} hours
                  </Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      );
    }
  }
}

export default ZpdfCertifacteSent;

const styles = StyleSheet.create({
  // page + sectionLeft : background color defined in inline style with props
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
    flexDirection: 'column',
    width: '25%',
    padding: 10,
    paddingRight: 20,
    '@media max-width: 400': {
      width: '100%',
    },
    position: 'relative',
  },
  sectionRight: {
    backgroundColor: '#E2EDF5',
    padding: 60,
    flexDirection: 'column',
    width: '75%',
    '@media max-width: 400': {
      width: '100%',
    },
  },
  image: {
    padding: 20,
  },
  pLight: {
    fontSize: 14,
    color: 'white',
    paddingBottom: 10,
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

  document: {
    height: '100vh',
    width: '100vw',
  },
  spinner: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
