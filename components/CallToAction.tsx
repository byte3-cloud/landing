/* eslint-disable */
import React from 'react';
import { Container } from 'reactstrap';

const CallToAction = () => {
	return (
		<div>
			<div className="mini-spacer text-white c2a7">
				<Container>
					<div className="d-flex">
						<div className="display-7 align-self-center">Do you have an idea for your next project?</div>
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
