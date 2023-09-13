import GroupForm from "./GroupForm";

const GroupCard = () => {
  return (
    <div className="bg-secondary p-4 shadow-md rounded-lg max-w-sm mx-auto mt-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-lg max-w-sm z-30">
        
      <div className="relative">
        
        <h2 className="text-lg font-semibold mb-4 font-main">
          Create a New Group
        </h2>
        <GroupForm />
      </div>
    </div>
  );
};

export default GroupCard;

