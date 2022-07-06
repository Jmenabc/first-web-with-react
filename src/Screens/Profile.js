import { Text, StyleSheet, View } from "react-native";
import { Row, Col } from "react-bootstrap";
import BannerImgGradientColor from '../components/bannerImgGradientColor';
import { Divider } from "antd";
import "antd/dist/antd.css";

export function Profile() {
    return (
        <View>
            <BannerImgGradientColor />
            <View style={styles.viewStyle}>
                <Text style={styles.textUserHead}>
                    Datos del Usuario
                </Text>
                <Divider type="horizontal" style={styles.horizontalDivider} />
                {/* <Text numberOfLines={1} style={styles.divider}>
                    ________________________________________________________________________________________________________________________________
                </Text> */}
                <Row>
                    <Col>

                    </Col>

                    <Col>

                    </Col>
                </Row>
            </View>



        </View>
    );

}

const styles = StyleSheet.create({

    horizontalDivider: {
        margin:50,
        borderColor:'red'
    },

    viewStyle: {
        marginTop: 24,
    },

    divider: {
        textAlign: 'center'
    },

    textUserHead: {
        fontSize: 32,
        textAlign: 'center'
    },

})

export default Profile