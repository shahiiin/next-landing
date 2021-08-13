import styled from 'styled-components';

import React from 'react';

const CardStyles = styled.div`
	justify-content: center;
	align-items: center;
	text-align: center;
	@media (min-width: 10px) and (max-width: 767px) {
		margin-top: 5rem;
	}
`

const CardContent = styled.div`
	margin-top: -1.5rem;
	margin-left: 1.5rem;
	width: 80%;
	@media (min-width: 10px) and (max-width: 767px) {
		width: 95%;
		font-size: 2.8rem !important;
	}
`

const CustomCard = ({ title, imageUrl, children }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<CardStyles className="mx-auto">
						<img
							src={imageUrl}
							alt={title}
							style={{ width: '100%'}}
							className=""
						/>
						<CardContent className="card mb-1">
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								{children}
							</div>
						</CardContent>
					</CardStyles>
				</div>
			</div>
		</div>
	)
}

export default CustomCard
