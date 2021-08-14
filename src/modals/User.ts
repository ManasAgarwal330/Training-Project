export interface User {
  id: number;
  guid: null;
  first_name: string;
  middle_name: null | string;
  last_name: string;
  role: "admin" | "advocate" | "staff";
  status: "claimed" | "new";
  profile_pic_url: null | string;
  groupMemberStatus?:
    | "invitation_accepted"
    | "invited"
    | "request_to_join_accepted";
}
