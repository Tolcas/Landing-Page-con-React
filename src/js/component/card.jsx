import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img
				src="https://hoteldunaschile.com/wp-content/uploads/2019/07/desierto-de-atacama.jpg"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
				</p>
				<button type="button" class="btn btn-primary">
					Find out more!
				</button>
			</div>
		</div>
	);
};

export default Card;