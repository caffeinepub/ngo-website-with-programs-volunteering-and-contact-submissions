import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the authorization system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type VolunteerInterest = {
    name : Text;
    email : Text;
    areaOfInterest : Text;
    availability : Text;
    message : Text;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  type DonationPledge = {
    name : Text;
    email : Text;
    amount : Nat;
    message : ?Text;
  };

  public type UserProfile = {
    name : Text;
    email : Text;
    organization : ?Text;
  };

  let volunteerInterests = Map.empty<Text, VolunteerInterest>();
  let contactMessages = Map.empty<Text, ContactMessage>();
  let donationPledges = Map.empty<Text, DonationPledge>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public submission endpoints - no authorization required (accessible to everyone including anonymous users)
  public shared ({ caller }) func submitVolunteerInterest(interest : VolunteerInterest) : async () {
    volunteerInterests.add(interest.email, interest);
  };

  public shared ({ caller }) func submitContactMessage(message : ContactMessage) : async () {
    contactMessages.add(message.email, message);
  };

  public shared ({ caller }) func submitDonationPledge(pledge : DonationPledge) : async () {
    donationPledges.add(pledge.email, pledge);
  };

  // Admin-only query endpoints for viewing submitted data
  public query ({ caller }) func listVolunteerInterests() : async [VolunteerInterest] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view volunteer interests");
    };
    volunteerInterests.values().toArray();
  };

  public query ({ caller }) func listContactMessages() : async [ContactMessage] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view contact messages");
    };
    contactMessages.values().toArray();
  };

  public query ({ caller }) func listDonationPledges() : async [DonationPledge] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view donation pledges");
    };
    donationPledges.values().toArray();
  };

  public query ({ caller }) func getVolunteerInterestByEmail(email : Text) : async ?VolunteerInterest {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view volunteer interests");
    };
    volunteerInterests.get(email);
  };

  public query ({ caller }) func getContactMessageByEmail(email : Text) : async ?ContactMessage {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view contact messages");
    };
    contactMessages.get(email);
  };

  public query ({ caller }) func getDonationPledgeByEmail(email : Text) : async ?DonationPledge {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view donation pledges");
    };
    donationPledges.get(email);
  };
};
