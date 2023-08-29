import React from "react";
import { useNavigate } from "react-router-dom";


// TODO:
// [x] update style to match figma

const GroupListItem = ({ group }) => {
  const navigate = useNavigate();
  return (
    <div>
      
      <li
        className="p-6 text-center transition border rounded-lg cursor-pointer bg-primary border-tertiary hover:bg-secondary hover:text-primary hover:border-secondary"
        onClick={() => {
          navigate(`/groupspace/${group.groupId}`);
        }}
      >
        <p className="font-bold">{group.groupName}</p>
      </li>
    </div>
  );
};

export default GroupListItem;
