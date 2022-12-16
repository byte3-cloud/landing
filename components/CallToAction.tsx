/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import img1 from '../assets/images/features/feature48/app-store.png';
import img2 from '../assets/images/features/feature48/play-store.png';
import Link from 'next/link';

const CallToAction = () => {
	return (
		<div>
			<div className="mini-spacer text-white c2a7">
				<Container>
					<div className="d-flex">
						<div className="display-7 align-self-center">
							Are you happy with what we offer? Ask for free quote
						</div>
						<div className="ml-auto m-t-10 m-b-10">
							<a href="mailto:hello@byte3.cloud" className="btn btn-danger btn-md">
								Contact us
							</a>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default CallToAction;
