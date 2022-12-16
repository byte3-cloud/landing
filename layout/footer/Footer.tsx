/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="footer4 b-t spacer">
			<Container>
				<Row>
					<Col lg="3" md="6" className="m-b-30">
						<h5 className="m-b-20">Email</h5>
						<p>
							Office:{' '}
							<Link href="mialto:hello@byte3.cloud">
								<a className="link">hello@byte3.cloud</a>
							</Link>
							<br />
							Site:{' '}
							<Link href="https://byte3.cloud">
								<a className="link">byte3.cloud</a>
							</Link>
						</p>
					</Col>
					<Col lg="3" md="6">
						<h5 className="m-b-20">Social</h5>
						<div className="round-social light">
							<Link href="https://www.linkedin.com/company/byte3-cloud/">
								<a className="link">
									<i className="fa fa-linkedin"></i>
								</a>
							</Link>
							<Link href="https://github.com/byte3-cloud">
								<a className="link">
									<i className="fa fa-github"></i>
								</a>
							</Link>
							<Link href="https://twitter.com/byte3cloud">
								<a className="link">
									<i className="fa fa-twitter"></i>
								</a>
							</Link>
						</div>
					</Col>
				</Row>
				<div className="f4-bottom-bar">
					<Row>
						<Col md="12">
							<div className="d-flex font-14">
								<div className="m-t-10 m-b-10 copyright">
									All Rights Reserved by{' '}
									<Link href="https://byte3.cloud">
										<a className="link">byte3.cloud</a>
									</Link>{' '}
									| All images have been created with{' '}
									<Link href="https://openai.com/dall-e-2/">
										<a className="link">DALL·E</a>
									</Link>
								</div>
								<div className="links ml-auto m-t-10 m-b-10">
									<Link href="#">
										<a className="p-10 p-l-0">Terms of Use</a>
									</Link>
									<Link href="#">
										<a className="p-10">Legal Disclaimer</a>
									</Link>
									<Link href="#">
										<a className="p-10">Privacy Policy</a>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};
export default Footer;
