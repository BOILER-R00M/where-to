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

	const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// Function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle the form submission logic here
	};

	return (
		<div className="z-50 h-full w-full absolute">
			<div className="border h-fit w-fit rounded-lg bg-primary m-auto">
				<p className="cursor-pointer" onClick={closeModal}>
					close
				</p>

				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 gap-2 p-4 w-fit"
				>
					{categories.map((category, index) => {
						const id = `select-${category
							.replace(/\s+/g, "-")
							.toLowerCase()}`;
						return (
							<div
								className="flex flex-row w-full justify-between"
								key={index}
							>
								<label className="pr-4" htmlFor={id}>
									{category}
								</label>
								<select id={id} className="border rounded p-2">
									{scores.map((score) => (
										<option key={score} value={score}>
											{score}
										</option>
									))}
								</select>
							</div>
						);
					})}
					<Button>Add Location</Button>
				</form>
			</div>
		</div>
	);
};

export default AddLocationModal;
