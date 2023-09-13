import React from "react";
import Button from "../../utility/Button";
const AddLocationModal = ({ closeModal }) => {
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
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<input type="text" className="border rounded p-2" />
						<Button>Add Location</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddLocationModal;
