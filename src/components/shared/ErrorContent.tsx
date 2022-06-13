import { errText } from 'utils/getStyle';
import { FC } from 'react';

const ErrorContent: FC = () => (
	<div className='p-[5rem]'>
		<div className={`${errText} text-[5rem]`}>Error</div>
		<p className={`${errText} text-[15rem]`}>404</p>
		<div className={`${errText} text-[5rem]`}>Page not found</div>
	</div>
);

export default ErrorContent;
