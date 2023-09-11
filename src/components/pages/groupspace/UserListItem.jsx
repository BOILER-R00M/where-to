import React from "react";
import useDatabaseService from "../../../customHooks/useDatabaseService";
import { useQuery } from "react-query";

const UserListItem = ({
  user,
  setHighlightedUser,
  highlightedUser,
  setHighlightedUserLocations,
}) => {
  const { fetchLocationsVisitedByUser } = useDatabaseService();

  const { data: locations, refetch } = useQuery({
    queryKey: ["locations", user.userId],
    queryFn: () => fetchLocationsVisitedByUser(user.groupId, user.userId),
    enabled: false,
    onSuccess: (data) => {
      setHighlightedUserLocations(data);
    },
  });

  const handleHighlightUser = () => {
    if (highlightedUser && highlightedUser.userId === user.userId) {
      setHighlightedUserLocations(null);
      setHighlightedUser(null);
    } else {
      setHighlightedUser(user);
      refetch();
    }
  };

  return (
    <div
      onClick={handleHighlightUser}
      className={`mx-auto cursor-pointer ${
        highlightedUser && highlightedUser.userId === user.userId
          ? "text-secondary"
          : "text-tertiary"
      } transition`}
    >
      {user.username}
    </div>
  );
};

export default UserListItem;
