import React, { useState } from "react";
import useDatabaseService from "../../../customHooks/useDatabaseService";
import { useQuery } from "react-query";

const UserListItem = ({
  user,
  setHighlightedUser,
  highlightedUser,
  setHighlightedUserLocations,
}) => {
  const { fetchLocationsVisitedByUser } = useDatabaseService();

  // State to control when the data should be fetched
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: locations } = useQuery({
    queryKey: ["locations"],
    queryFn: () => fetchLocationsVisitedByUser(user.groupId, user.userId),
    enabled: shouldFetch,  // Only fetch when shouldFetch is true
    onSuccess: (data) => {
      // Process the data as required
      setHighlightedUserLocations(data);
      
      // Reset shouldFetch state after fetching is done
      setShouldFetch(false);
    }
  });

  const handleHighlightUser = () => {
    if (highlightedUser && highlightedUser.userId === user.userId) {
      setHighlightedUserLocations(null);
      setHighlightedUser(null);
    } else {
      setHighlightedUser(user);
      
      // Trigger the fetch by setting shouldFetch to true
      setShouldFetch(true);
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