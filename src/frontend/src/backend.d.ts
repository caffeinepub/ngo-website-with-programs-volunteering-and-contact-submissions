import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface VolunteerInterest {
    name: string;
    email: string;
    availability: string;
    message: string;
    areaOfInterest: string;
}
export interface ContactMessage {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface DonationPledge {
    name: string;
    email: string;
    message?: string;
    amount: bigint;
}
export interface UserProfile {
    name: string;
    email: string;
    organization?: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactMessageByEmail(email: string): Promise<ContactMessage | null>;
    getDonationPledgeByEmail(email: string): Promise<DonationPledge | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getVolunteerInterestByEmail(email: string): Promise<VolunteerInterest | null>;
    isCallerAdmin(): Promise<boolean>;
    listContactMessages(): Promise<Array<ContactMessage>>;
    listDonationPledges(): Promise<Array<DonationPledge>>;
    listVolunteerInterests(): Promise<Array<VolunteerInterest>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactMessage(message: ContactMessage): Promise<void>;
    submitDonationPledge(pledge: DonationPledge): Promise<void>;
    submitVolunteerInterest(interest: VolunteerInterest): Promise<void>;
}
