import React from "react";

export const JournalEntry = () => {
	return (
		<div className='journal__entry'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/por-que-el-espacio-es-frio-1617903788.jpg)"
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>A new day</p>
				<p className='journal__entry-content'>
					Occaecat duis non fugiat quis ut sunt. Consequat dolore ipsum anim
				</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
