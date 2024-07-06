import {TeamMember} from "@/model/team";

export type Property={
    company: string,
    address: string,
    units?: Unit[],
    owner: string,
    team?: TeamMember[],
}

export type Tenant = {

}

export type Unit = {
    number: string,
    tenants: Tenant[],
}