## Dashboard

---

### Subcomponents

#### Main Header

something to welcome you back to the dashboard. Maybe with a welcome message like "Welcome back <user.username>!".

#### Group List

this should be a rendered list of groups that a user is a member of. When you click on one of these list component items, the page will be redirected to that route and will use the group id as a path parameter. Eventually, we'll trigger the `fetchGroupLocations` function from the `useDatabaseService` hook to get the locations for filling out that page

---
