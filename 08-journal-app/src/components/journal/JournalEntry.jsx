import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
	const dispatch = useDispatch();
	// const { date, title, body, url } = note;
	const noteDate = moment(date);
	const handleEntryClick = () => {
		// console.log(note);
		dispatch(activeNote(id, { date, title, body, url }));
	};

	return (
		<div className='journal__entry animate__animated animate__fadeIn animate__faster' onClick={handleEntryClick}> 
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: "cover",
					backgroundImage: url
						? `url(${url})`
						: `url(https://www.hablamejoringles.com/wp-content/uploads//question-mark.jpg)`
				}}

				// backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/por-que-el-espacio-es-frio-1617903788.jpg)`
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>{title}</p>
				<p className='journal__entry-content'>{body}</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>{noteDate.format("dddd")}</span>
				<h4>{noteDate.format("Do")}</h4>
				<h6>{noteDate.format("HH:mm")}</h6>
			</div>
		</div>
	);
};
