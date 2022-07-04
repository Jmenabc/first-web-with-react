import AppBar from "../components/AppBar";
import StartText from "../components/StartText";
import Card from "../models/Cards";
import { View } from "react-native";
import ImageWithText from "../components/imageWithText";
import { Row } from "react-bootstrap";
function App() {
  //TODO: finalizar el apartado de imagen que no manda la uri
  return (

    <View style={{ backgroundColor: 'grey' }}>
      <AppBar />
      <StartText />
      <Row>
        
        <Card
          imagen={'C:/Users/menaj/first-react/src/images/imgStartText.jpg'}
          text={'ksdoskdoksodksodkmosdosjdosdosjdoskm'} 
        />
        <Card
          imagen='https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg'
          text={'ksdoskdoksodksodkmosdosjdosdosjdoskm'} 
        />
        <Card
          imagen='https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg'
          text={'ksdoskdoksodksodkmosdosjdosdosjdoskm'} 
        />
        <Card
          imagen='https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg'
          text={'ksdoskdoksodksodkmosdosjdosdosjdoskm'} 
        />
      </Row>
      <ImageWithText />
    </View>


  );
}

export default App;
