import React from "react";
import Button from "../../utility/Button";
import close from "../../../assets/close.svg";

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
			<div className="relative border h-fit w-fit rounded-lg bg-primary mx-auto mt-32">
				<img
					className="absolute -right-12 -top-12 cursor-pointer"
					onClick={closeModal}
					src={close}
					alt=""
				/>

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
