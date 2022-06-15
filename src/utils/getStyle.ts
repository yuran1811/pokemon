export const errText = 'text-white text-center font-bold';

export const ctUnderline =
	'after:flex after:items-center after:justify-center after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[0.5rem] after:scale-100 after:origin-center after:w-[100%] after:bg-current';

export const navLinkClass = 'lg:text-[3rem] text-[2rem] font-semibold text-center text-ctcolor tracking-[0.25rem] mx-4 px-2';

export const navLinkActiveClass = `${navLinkClass} relative ${ctUnderline}`;

export const paginationBadge = `flexcenter cursor-pointer w-[4rem] h-[4rem] min-w-[4rem] min-h-[4rem] text-ctcolor bg-ctbackground m-[1rem] p-[0.6rem] rounded-[50%] transition-all duration-300 ease-in-out`;
