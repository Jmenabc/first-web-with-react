import React, { Component } from 'react';

export class AppBar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand">
                    <img src="https://www.jose-aguilar.com/blog/wp-content/uploads/2014/05/bootstrap.png" width="40" height="40" class="d-inline-block align-top" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link">Profile</a>
                        <a class="nav-item nav-link">Info</a>
                        <a class="nav-item nav-link disabled">Register</a>
                        
                    </div>
                </div>
            </nav>
        );
    }
}

export default AppBar;