import { View, Text, Image, StyleSheet } from "react-native";
import { Row, Col } from "react-bootstrap";
import React, { Component } from 'react';

class ImageWithText extends Component {
    state = {}
    render() {
        let { imageContainer, textContainer } = styles;
        return (

            <Row style={{marginBottom: 32}}>
                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }}
                    style={imageContainer} />

                <Text style={textContainer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tincidunt enim, quis congue felis placerat non. Phasellus sapien lacus, rutrum quis finibus quis, ultrices et tellus. Vivamus id libero ut erat semper hendrerit. Integer dolor ipsum, eleifend sed efficitur sit amet, condimentum eu lectus. Nulla sit amet est tortor. Integer condimentum, felis tincidunt egestas aliquet, eros sapien tincidunt ex, in feugiat elit urna id dolor. Duis hendrerit mollis nunc, nec feugiat dolor posuere accumsan. Praesent finibus egestas imperdiet. Phasellus tincidunt lectus tincidunt, hendrerit neque eget, lobortis nulla.

                    Mauris euismod turpis ante, in fringilla libero eleifend id. Quisque velit nibh, tincidunt at imperdiet et, scelerisque egestas magna. Aliquam erat volutpat. Aliquam ac porttitor erat. Maecenas vulputate mauris ut ante tincidunt, eu faucibus erat vulputate. Morbi ullamcorper neque vel tortor scelerisque facilisis. Curabitur blandit vitae justo sed malesuada. Etiam ac gravida diam, tincidunt porttitor tortor. Donec imperdiet magna velit.
                    Nunc ultricies elit in tortor ultricies, et consequat lectus efficitur. Integer dapibus malesuada massa et congue. Curabitur volutpat tortor et nunc volutpat euismod. Morbi elementum tortor et orci vehicula, eget efficitur diam molestie. Fusce dapibus ipsum ac nibh rhoncus, quis tincidunt metus ultrices. Curabitur suscipit purus id nisl interdum, eget venenatis velit maximus. Curabitur sodales, metus eu dignissim rutrum, magna magna elementum nibh, ut blandit enim ligula a elit. Cras et nisi quis elit suscipit tincidunt. In tincidunt velit sit amet ante interdum imperdiet. Curabitur pretium consequat dui.

                    Nunc vitae quam quis quam tincidunt accumsan. Nulla laoreet ultricies interdum. Nunc nec tempor felis. Pellentesque cursus consequat commodo. In porta velit sapien, sit amet condimentum nisi facilisis eget. Donec vulputate, tellus nec commodo interdum, urna augue lacinia erat, eu molestie nibh mauris nec urna. Quisque ornare leo ut efficitur pretium. Sed lorem dui, elementum a facilisis non, condimentum et lectus. Cras et ornare nisi. Phasellus nec ex posuere, varius erat vel, luctus urna.

                </Text>
            </Row>


        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '60%',
        height: 500,
        marginTop: 30,
        marginHorizontal: 70,
        borderRadius: 16
    },

    textContainer: {
        marginTop: 50,
        width: '30%',
        height: 500,
        borderRadius: 16,
        color: 'white',
    }

})

export default ImageWithText;

