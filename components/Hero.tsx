import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import dalle from '../assets/images/dalle_1.png';

const Hero = () => {
	return (
		<div className="static-slider-head banner2">
			<Container>
				<Row className="">
					<Col lg="6" md="6" className="align-self-center">
						<h1 className="title">Connect everything</h1>
						<h4 className="subtitle font-light">Empower your IoT solutions</h4>
						<a href="mailto:hello@byte3.cloud" className="btn btn-info m-r-20 btn-md m-t-30 ">
							Contact us
						</a>
						<Link href="/#services">
							<a className="btn btn-md m-t-30  btn-outline-light ">Learn more</a>
						</Link>
					</Col>
					<Col lg="6" md="6" style={{ padding: 20 }}>
						<Image src={dalle} alt="hero banner" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;
