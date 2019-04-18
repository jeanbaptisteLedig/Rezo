// Footer.js

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../assets/css/Footer.css';

class Footer extends Component {

    render() {
        return(
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© 2018 Copyright
                    <h6> Jean-Baptiste Ledig</h6>
                </div>
            </footer>
        )
    }
}

export default Footer;