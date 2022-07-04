import { Text, Image, StyleSheet } from "react-native";
import { Col } from "react-bootstrap";

const Cards = ({ imagen, text }) => {
    return (
        <Col style={styles.cardImg}>
            <Image
                source={{ uri: { imagen } }}
                style={styles.card} />
            <Text style={styles.test}>{text}</Text>
        </Col>

    )
}

const styles = StyleSheet.create({

    card: {
        height: 150,
        width: '70%',
        marginHorizontal: 60,
        backgroundColor: 'white',
        marginTop: 32,
        borderRadius: 16,
    },
    test: {
        height: 100,
        width: '70%',
        marginHorizontal: 60,
        fontSize: 16,
        color: 'white'

    },
    cardImg: {
        marginBottom: 30
    }

})

export default Cards
