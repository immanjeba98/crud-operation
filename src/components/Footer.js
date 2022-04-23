import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import logo from '../asset/img/logo.png'
import fb from '../asset/img/Social1.png'
import insta from '../asset/img/Social2.png'
import twitt from '../asset/img/Social3.png'
import GP from '../asset/img/Googleplay.png'
import PS from '../asset/img/Playstore.png'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <Container className='mt-5  p-5'>
                    <Row>
                        <Col md={3} lg={3} className='cus-footer'>
                            <img src={logo} alt='logo' className="logo-cus" />
                            <p>Book your trip in minute, get full
                                Control for much longer.
                            </p>
                        </Col>
                        <Col md={3} xs={6} lg={2}>
                            <ul className=" footer-menu">
                                <li className='footer-links-heading'>Company</li>
                                <li className='nav-links-footer' style={{ marginTop: '10px' }}>Home</li>


                                <li className='nav-links-footer'>About</li>

                                <li className='nav-links-footer'>Services</li>

                                <li className='nav-links-footer'>Blogs</li>

                                <li className='nav-links-footer'>Contact Us</li>
                            </ul>
                        </Col>
                        <Col md={3} xs={6} lg={2}>
                        <ul className=" footer-menu">
                                <li className='footer-links-heading'>Contact</li>
                                <li className='nav-links-footer' style={{ marginTop: '10px' }}>Home</li>


                                <li className='nav-links-footer'>About</li>

                                <li className='nav-links-footer'>Services</li>

                                <li className='nav-links-footer'>Blogs</li>

                                <li className='nav-links-footer'>Contact Us</li>
                            </ul>
                        </Col>
                        <Col md={3} xs={6} lg={2}>
                        <ul className=" footer-menu">
                                <li className='footer-links-heading'>More</li>
                                <li className='nav-links-footer' style={{ marginTop: '10px' }}>Home</li>


                                <li className='nav-links-footer'>About</li>

                                <li className='nav-links-footer'>Services</li>

                                
                            </ul>
                        </Col>
                        <Col md={4} lg={3} className="text-footer text-center">
                            <div>
                                <img src={fb} />
                                <img src={insta} />
                                <img src={twitt} />
                            </div>
                            <h1 className="mt-2">Discover our app</h1>
                            <div className="mt-4">
                                <img src={GP} className="img-fluid" />
                                <img src={PS} className="ml-footer img-fluid"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='footer-copy'>
                        <p>
                        All rights reserved@Knila.com
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Footer