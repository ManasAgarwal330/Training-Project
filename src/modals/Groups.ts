import { State } from "./State";
import { User } from "./User";

export interface Groups {
    id:                   number;
    name:                 string;
    is_private:           boolean;
    is_academic:          boolean;
    description:          string;
    introductory_message?: string;
    group_image_url:      null | string;
    join_code:            string;
    created_at:           Date;
    updated_at:           Date;
    chatCount:            number;
    state:                State | null;
    creator:              User | null;
    issues:               Issue[];
    invitedMembers:       User[];
    participants:         User[];
    advocatePage:         null;
}

export interface Issue {
    id:             number;
    code:           string;
    title_one_word: string;
    title_short:    string;
    title:          string;
    summary:        null | string;
    created_at:     Date;
    updated_at:     Date;
}
