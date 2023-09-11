import React, { useContext } from "react";
import useDatabaseService from "../../../customHooks/useDatabaseService";
import { useQuery, useQueryClient } from "react-query";

const UserListItem = ({
  user,
  setHighlightedUser,
  highlightedUser,
  setHighlightedUserLocations,
}) => {
  const { fetchLocationsVisitedByUser } = useDatabaseService();
  const queryClient = useQueryClient();

  const queryKey = ["locations", user.userId];

  const {
    data: locations,
    refetch,
    isFetched,
  } = useQuery({
    queryKey: queryKey,
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

      console.time(`Retrieving cache for user ${user.userId}`); // Start timer

      const cachedData = queryClient.getQueryData(queryKey);

      console.timeEnd(`Retrieving cache for user ${user.userId}`); // End timer

      if (cachedData) {
        setHighlightedUserLocations(cachedData);
      } else {
        refetch();
      }
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
