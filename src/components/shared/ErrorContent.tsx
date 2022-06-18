import { ctUnderline } from 'utils';
import { hostUrl } from '../../constants';
import { ErrorText } from 'components/interfaces';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ErrorContent: FC = () => (
	<div className='p-[5rem]'>
		<ErrorText extraStyle='text-[15rem]'>404</ErrorText>
		<ErrorText extraStyle='text-[5rem]'>Page not found</ErrorText>
		<ErrorText extraStyle='text-[3rem] mt-8'>
			Return{' '}
			<Link to={`${hostUrl}/`} className={`relative ${ctUnderline}`}>
				Home
			</Link>
		</ErrorText>
	</div>
);
