import { Entity } from "./Entity";

export interface User  extends Entity{
  __type:                      string;
  guid:                        null;
  first_name:                  string;
  middle_name ?:                string;
  last_name:                   string;
  role:                         "admin" | "advocate" | "staff";
  status:                      "claimed" | "new";
  profile_pic_url:             string;
  email:                       string;
  bio:                         string;
  legal_name:                  null;
  nick_name:                   null;
  job_type:                    null;
  phone_number:                string;
  alternate_phone_number:      null;
  gender:                      "male"|"female"|"other";
  birth_year:                  string;
  birth_month:                 string;
  birth_date:                  string;
  death_year:                  string;
  death_month:                 string;
  death_date:                  string;
  urls:                        any[];
  last_invited_to_platform_at: null;
  education:                   string;
  hometown:                    string;
  state_code:                  string;
  home_state_code:             string;
  is_2fa_enabled:              boolean;
  default_2fa_type:            null;
  created_at:                  Date;
  updated_at:                  Date;
  is_zoom_connected:           boolean;
  person:                      null;
  occupations:                 any[];
  educations:                  any[];
  blockedUsers:                any[];
  memberToAdvocatePages:       any[];
  ownerToAdvocatePages:        any[];
  academic:                    null;
  followedAcademics:           any[];
}

export interface UserUpdate{
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  profile_pic_url?: string;
  phone_number?: string;
  alternate_phone_number?: string;
  email?: string;
  gender?: "male"|"female"|"other";
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  death_year?: string;
  death_month?: string;
  death_date?: string;
  home_state_code?: string;
  education?: string;
  hometown?: string;
}