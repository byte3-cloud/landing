/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import dalle from '../assets/images/dalle_2.png';

const FeatureComponent = () => {
	return (
		<div id="services">
			<div className="spacer feature4">
				<Container>
					<Row className="justify-content-center">
						<Col md="7" className="text-center">
							<h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
							<h6 className="subtitle">
								At byte3 we support industry experts so they are better equipped to discover and
								collaborate on connected products <b>from the cloud to the edge</b>.
							</h6>
						</Col>
					</Row>
					<Row className="m-t-40">
						<Col md="6" className="wrap-feature4-box">
							<Card>
								<CardBody>
									<div className="icon-round bg-light-info">
										<i className="fa fa-users"></i>
									</div>
									<h5 className="font-medium">Consultancy</h5>
									<p className="m-t-20">
										We offer 10+ years of exeperience in software architecture, mainly focused on
										enhance industrial processes and products. We help both startups and established
										corporates reduce the friction to connect devices to the cloud improving
										dramatically time-to-market.
									</p>
									<a href="mailto:hello@byte3.cloud" className="linking text-themecolor">
										Request a quote<i className="ti-arrow-right"></i>
									</a>
								</CardBody>
							</Card>
						</Col>
						<Col md="6" className="wrap-feature4-box">
							<Card>
								<CardBody>
									<div className="icon-round bg-light-info">
										<i className="fa fa-check-circle"></i>
									</div>
									<h5 className="font-medium">Development</h5>
									<p className="m-t-20">
										Sometimes in-house software development is not the best option, that's why we
										offer different kinds of partnership also for outsourcing. Whether it's a web
										API, a desktop application or a mobile app, together with our best in the market
										partners we always know how to find the right fit.
									</p>
									<a href="mailto:hello@byte3.cloud" className="linking text-themecolor">
										Request a quote<i className="ti-arrow-right"></i>
									</a>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="spacer">
				<Container className="feature30">
					<Row>
						<Col lg="10">
							<Image src={dalle} className="rounded img-responsive" />
						</Col>
						<Col lg="5" md="7" className="text-center wrap-feature30-box">
							<Card className="card-shadow">
								<CardBody>
									<div className="p-20">
										<h3 className="title">
											Digital solutions
											<br />
											for growth business
										</h3>
										<p>
											You can relay on our services to have <b>connected devices</b> in days, no
											more months.
										</p>
										<a className="btn btn-danger btn-md btn-arrow m-t-20" href="#">
											<span>
												Explore More <i className="ti-arrow-right"></i>
											</span>
										</a>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default FeatureComponent;
