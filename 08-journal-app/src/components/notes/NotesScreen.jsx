import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
                    autoComplete='off'
				/>
				<textarea
					placeholder='What happened today'
					className='notes__textarea'
				/>
				<div className='notes__image'>
					<img
						alt='uploaded'
						src='https://media-exp3.licdn.com/dms/image/C511BAQEUGUtdp9I_Lw/company-background_10000/0/1526560332701?e=2159024400&v=beta&t=G3cvNDL4Wwq7TswbpgkqM3km-XCMAsx0-SDSGoEMwSU'
					/>
				</div>
			</div>
		</div>
	);
};
