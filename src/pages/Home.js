import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Banner1 from '../asset/img/Banner.png'
import sec1 from '../asset/img/sec1.png'
import card1 from '../asset/img/italy-rome.jpg'
import card2 from '../asset/img/London.jpg'
import card3 from '../asset/img/europe.jpg'
import vector from '../asset/img/Vector.png'
import img1 from '../asset/img/img1.png'
import img2 from '../asset/img/img2.png'
import img3 from '../asset/img/img3.png'
import img4 from '../asset/img/img4.jpg'
import img5 from '../asset/img/LEAF.png'
import img6 from '../asset/img/map icon.png'
import img7 from '../asset/img/send.png'
import img8 from '../asset/img/img8.png'
import img9 from '../asset/img/img9.png'
import logo1 from '../asset/img/img10.png'
import sec2 from '../asset/img/sec2-img.png'
import sec3 from '../asset/img/sec2-img1.png'
import sec4 from '../asset/img/sec2-img2.png'
import logo2 from '../asset/img/logo1.png'
import logo3 from '../asset/img/logo2.png'
import logo4 from '../asset/img/logo3.png'
import logo5 from '../asset/img/logo4.png'
import { faUser } from 'react-icons'
import Footer from '../components/Footer'
import testi from '../asset/img/testi.png'

 



const Home = () => {


    return (
        <div>
            <div className='banner-home'>
                <Container >
                    <Row className='d-flex align-items-center'>
                        <Col lg={6} sm={12} className="banner-text mt-5">
                            <h5 className='mt-5'>
                                Best Destinations around the world
                            </h5>
                            <h1 className='mt-4'>
                                Travel, enjoy
                                and live a new
                                and full life
                            </h1>
                            <p className='mt-4'>
                                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                            </p>
                            <div>
                                <Row>
                                    <Col md={4} sm={5} xs={6} className='mt-3 justify-content-center' >
                                        <button className='btn-find-more'>Find out more</button>
                                    </Col>
                                    <Col md={8} sm={5} xs={6} className='mt-3 d-flex'>
                                        <button class="btn-play">
                                            <span class="play"></span>
                                        </button>
                                        <p className='mt-2 play-text'>Play Demo</p>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className='mt-5  align-items-center justify-content-center'>
                            <img
                                src={Banner1}
                                alt='banner'
                                className='img-fluid mt-lg-5'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section-2-test */}
            <div className='mt-5 '>
                <Container className='mt-5 sec-2-mob '>
                    <Row className=''>
                        <Col className='text-center mt-5 pt-5 sec2-heading box-bg-img'>
                            <p>CATEGORY</p>
                            <h1>We Offer Best Services</h1>
                        </Col>
                    </Row>
                </Container>
                <Container className='mt-5 p-5 '>
                    <Row>
                        <Col lg={3} sm={12} className='text-center section2-box p-2'>

                            <img src={sec1} alt='sec1' />
                            <h1>
                                Calculated Weather
                            </h1>
                            <p>
                                Built Wicket longer admire do barton vanity itself do in it.
                            </p>

                            <div className='hover-effect'></div>

                        </Col>
                        <Col lg={3} sm={12} className='text-center section2-box p-2'>

                            <img src={sec2} alt='sec1' className='img-cust' />
                            <h1>
                                Best Flights
                            </h1>
                            <p>
                                Engrossed listening. Park gate sell they west hard for the.
                            </p>

                        </Col>
                        <Col lg={3} sm={12} className='text-center section2-box p-2'>

                            <img src={sec3} alt='sec1' />
                            <h1>
                                Local Events
                            </h1>
                            <p>
                                Barton vanity itself do in it. Preferd to men it engrossed listening.
                            </p>

                        </Col>
                        <Col lg={3} sm={12} className='text-center section2-box  p-2'>

                            <img src={sec4} alt='sec1' />
                            <h1>
                                Customization
                            </h1>
                            <p>
                                We deliver outsourced
                                aviation services for
                                military customers
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section3-top desitination */}
            <div className=''>
                <Container className='mt-5 '>
                    <Row className=''>
                        <Col className='text-center  pt-5 sec2-heading'>
                            <p>Top Selling</p>
                            <h1>Top Destinations</h1>
                        </Col>
                    </Row>
                </Container>
                <Container className='p-5'>
                    <Row>
                        <Col lg={4} sm={12}>
                            <Card className='border-rounded-cus mt-2 section3-box'>
                                <Card.Img variant="top" src={card1} />
                                <Card.Body>
                                    <Row>
                                        <Col className='d-flex justify-content-start box-sec3'>
                                            <p>Rome, Italty</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end box-sec3'>
                                            <p>$5,42k</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='d-flex mt-3 box-sec3'>
                                            <img src={vector} width='23' height='23' />
                                            <p className='' style={{ marginLeft: "15px" }}>10 Days Trip</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Card className='border-rounded-cus mt-2 section3-box'>
                                <Card.Img variant="top" src={card2} />
                                <Card.Body>
                                    <Row>
                                        <Col className='d-flex justify-content-start box-sec3'>
                                            <p>Rome, Italty</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end box-sec3'>
                                            <p>$5,42k</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='d-flex mt-3 box-sec3'>
                                            <img src={vector} width='23' height='23' />
                                            <p className='' style={{ marginLeft: "15px" }}>10 Days Trip</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Card className='border-rounded-cus mt-2 section3-box'>
                                <Card.Img variant="top" src={card3} />
                                <Card.Body>
                                    <Row>
                                        <Col className='d-flex justify-content-start box-sec3'>
                                            <p>Rome, Italty</p>
                                        </Col>
                                        <Col className='d-flex justify-content-end box-sec3'>
                                            <p>$5,42k</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='d-flex mt-3 box-sec3'>
                                            <img src={vector} width='23' height='23' />
                                            <p className='' style={{ marginLeft: "15px" }}>10 Days Trip</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* section4 book trip */}
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col md={6} lg={6} sm={12} className='sec4-text-cus'>
                            <p>
                                Easy and Fast
                            </p>
                            <h1>
                                Book your next trip
                                in 3 easy steps
                            </h1>
                            <div className='mt-4'>
                                <Row >
                                    <Col lg={2} sm={2} xs={2} className="text-center" >
                                        <img src={img1} />
                                    </Col>
                                    <Col lg={10} sm={10} xs={10} className='inside-sec4-cus'>
                                        <h2>
                                            Choose Destination
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </Col>

                                </Row>
                                <Row className='mt-2' >
                                    <Col lg={2} sm={2} xs={2} className="text-center" >
                                        <img src={img2} />
                                    </Col>
                                    <Col lg={10} sm={10} xs={10} className='inside-sec4-cus'>
                                        <h2>
                                            Make Payment
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </Col>

                                </Row>
                                <Row className='mt-2'>
                                    <Col lg={2} sm={2} xs={2} className="text-center" >
                                        <img src={img3} />
                                    </Col>
                                    <Col lg={10} sm={10} xs={10} className='inside-sec4-cus'>
                                        <h2>
                                            Reach Airport on Selected Date
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        <Col md={6} lg={6} sm={12} className=' p-xs-1-cus  d-flex justify-content-center '>
                            <div className='sec4-boxshadow background-shadow inside-box-sec5 sec-4-text p-3  mt-2'>
                                <img
                                    src={img4}
                                    className="text-center  img-fluid"
                                />
                                <h5 className='mt-5'>Trip To Greece</h5>
                                <p>14-29 June | by Robbin joseph</p>
                                <div className='d-inline mt-5'>
                                    <img src={img5} />
                                    <img src={img6} className="ml-10" />
                                    <img src={img7} className="ml-10" />
                                </div>
                                <div className='d-flex justify-content-between mt-5'>
                                    <div className='d-flex '>
                                        <img src={img8} width='16' height='16' />
                                        <p className="ml-8">24 people going</p>
                                    </div>
                                    <div className=''>
                                        <img
                                            src={img9}
                                        />
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* section5 testimonial */}
            <div className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className='sec4-text-cus'>
                           <p>
                                Testimonials
                            </p>
                            <h1>
                                What people say
                                about Us.
                            </h1>
                            
                        </Col>
                        <Col lg={6} sm={12} className="testi-cust ">
                            <img src={testi}/>
                            <div className='sec4-boxshadow testi-cust  p-5' style={{marginTop:"-40px",marginLeft:"10px"}}>
                            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            
                            <h6>Mike taylor</h6>
                            <p>Lahore, Pakistan</p>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* section6-logo */}
            <div className='pt-5 pb-5' >
                <Container>
                    <Row  >
                        <Col lg={1} className='col-1 col-lg-1'></Col>
                        <Col xs={12} lg={2} className='m-1 box-shadow-sec6 d-flex  justify-content-center text-center'>
                            <img src={logo1} alt='logo1' className='img-filter img-fluid' />

                        </Col>
                        <Col xs={12} lg={2} className='m-1  col-lg-2 col-md-2 col-2 box-shadow-sec6 d-flex justify-content-center align-items-center text-center'>
                            <img src={logo2} alt='logo2' className='img-filter img-fluid' />

                        </Col>
                        <Col xs={12} lg={2} className='m-1  col-2 col-lg-2 col-md-2 d-flex box-shadow-sec6 justify-content-center align-items-center text-center'>
                            <img src={logo3} alt='logo3' className='img-filter img-fluid' />

                        </Col>
                        <Col xs={12} lg={2} className='m-1  col-2 col-lg-2 col-md-2 d-flex box-shadow-sec6 justify-content-center align-items-center text-center'>
                            <img src={logo4} alt='logo4' className='img-filter img-fluid' />

                        </Col>
                        <Col xs={12} lg={2} className='m-1  col-2 col-lg-2 col-md-2 d-flex box-shadow-sec6 justify-content-center align-items-center text-center'>
                            <img src={logo5} alt='logo5' className='img-filter img-fluid' />

                        </Col>
                        <Col lg={1} className='col-1  col-md-1 col-lg-1'></Col>
                    </Row>
                </Container>
            </div>

            {/* section7-subscribe */}
            <div className='mt-5 mb-5 bg-sec7'>
                <Container className='pt-5 pb-5'>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="sec7-subscribe p-5 pt-5 pb-5 ">
                            <div className='d-flex justify-content-center  pb-5 align-items-center sec7-text'>
                                <h1 className='text-center p-2'>
                                    Subscribe to get information, latest news and other
                                    interesting offers about Cobham
                                </h1>


                            </div>

                            <div className='d-flex justify-content-center  pb-5 align-items-center sec7-text-bg'>
                                <input type='text' className="input-sub" placeholder='your mail'/>

                                <button className='btn-sub ml-10'>Subscribe</button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Home