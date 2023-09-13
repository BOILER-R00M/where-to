import React, {useState, useEffect} from 'react';


export default function TopBarStats() {

    const [userStats, setUserStats] = useState({
        numGroups: 0,
        numLocations: 0,
        avgLocationsPerGroup: 0,
        avgMembersPerGroup: 0,
        avgLocationsPerMember: 0,
        topLocationsAllGroups: [],
    })

 


    return(
        <div>Top Bar Stats</div>
    )
}