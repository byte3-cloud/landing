import React from 'react';

import Banner from '../banner/Banner';
// sections for this page
import CallToAction from '../call-to-action/CallToAction';
import Breadcrumbs from './breadcrumbs';
import Buttons from './buttons';
import Cards from './cards';
import Dropdowns from './dropdowns';
import PageForm from './form';
import Images from './images';
import JsComponents from './js-components';
import Labels from './labels';
import Notification from './notification';
import PagePagination from './pagination';
import PageTable from './table';
import TooltipPopover from './tooltip-popover';
import Typography from './typography';

const AllComponents = () => {
	return (
		<div>
			<Banner />
			<Buttons />
			<Labels />
			<PagePagination />
			<Images />
			<Breadcrumbs />
			<Cards />
			<Dropdowns />
			<PageForm />
			<PageTable />
			<Notification />
			<TooltipPopover />
			<Typography />
			<JsComponents />
			<CallToAction />
		</div>
	);
};

export default AllComponents;
