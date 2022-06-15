import { hostUrl } from '../../constants';
import { ctUnderline, errText } from 'utils';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorContent: FC = () => (
	<div className='p-[5rem]'>
		<p className={`${errText} text-[15rem]`}>404</p>
		<div className={`${errText} text-[5rem]`}>Page not found</div>
		<div className={`${errText} text-[3rem] mt-8`}>
			Return{' '}
			<Link to={`${hostUrl}/`} className={`relative ${ctUnderline}`}>
				Home
			</Link>
		</div>
	</div>
);

export default ErrorContent;
