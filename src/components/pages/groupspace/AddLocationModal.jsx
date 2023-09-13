import React from "react";
import Button from "../../utility/Button";
const AddLocationModal = ({ closeModal }) => {
	const categories = [
		"entertainment",
		"culture",
		"natural environment",
		"cost of living",
		"crime",
		"pollution",
		"food",
		"employment opportunities",
		"transportation",
	];

	return (
		<div className="z-50 h-full w-full absolute">
			<div className="border h-fit w-1/2 rounded bg-primary m-auto">
				<p className="cursor-pointer" onClick={closeModal}>
					close
				</p>
				<div>
					<form
						action="submit"
						className="grid grid-cols-1 gap-4 p-4"
					>
						{categories.map((category, index) => {
							const id = `input-${category
								.replace(/\s+/g, "-")
								.toLowerCase()}`;
							return (
								<React.Fragment key={index}>
									<label htmlFor={id}>{category}</label>
									<input
										id={id}
										type="text"
										className="border rounded p-2"
										placeholder={category}
									/>
								</React.Fragment>
							);
						})}
						<Button>Add Location</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddLocationModal;
