import React from 'react';
import { Row, Col, Container, Form } from 'reactstrap';
import Image from 'next/image';
import banner from '../assets/images/dashboard.png';

const Banner1 = () => {
	return (
		<div>
			<div className="bg-light">
				<section>
					<div id="banner1" className="banner spacer">
						<Container>
							<Row>
								<Col lg="5" md="7" className="align-self-center">
									<h2 className="title font-bold">Give your Business Real boost Now!</h2>
									<p className="m-t-40 m-b-30">
										To accomplish great things, we must not only act, but also dream; not only plan,
										but also believe.
									</p>
									<a
										href="mailto:hello@byte3.cloud"
										className="btn btn-rounded btn-info m-r-20 btn-md m-t-30 "
									>
										Contact us
									</a>
								</Col>
								<Col lg="6" md="5" className="align-self-center ml-auto">
									<Image src={banner} alt="We are Digital Agency" className="img-fluid" />
								</Col>
							</Row>
						</Container>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Banner1;
