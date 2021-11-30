import React from "react";

export const Small = React.memo(({ value }) => {
    console.log('se redibujo el small');
	return <small>{value}</small>;
});
