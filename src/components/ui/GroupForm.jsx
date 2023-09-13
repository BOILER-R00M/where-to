import Button from "../utility/Button"

const GroupForm = () => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2 font-main" htmlFor="group-name">Group Name:</label>
            <input className="border p-2 rounded w-full mb-3" type="text" id="group-name" placeholder="Enter group name" />


            <Button>
                Create Group
            </Button>
        </div>
    );
}

export default GroupForm;