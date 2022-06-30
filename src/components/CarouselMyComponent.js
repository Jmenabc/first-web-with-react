import React, { Component } from 'react';

class CarouselMyComponent extends Component {
    state = {}
    render() {
        return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselMyComponent;
