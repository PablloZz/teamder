import Back from "~/assets/images/icons/back.icon.svg?react";
import Cake from "~/assets/images/icons/cake.icon.svg?react";
import Calendar from "~/assets/images/icons/calendar.icon.svg?react";
import CalendarFilled from "~/assets/images/icons/calendar-filled.icon.svg?react";
import EventLocation from "~/assets/images/icons/event-location.icon.svg?react";
import EventLocationFilled from "~/assets/images/icons/event-location-filled.icon.svg?react";
import Facebook from "~/assets/images/icons/facebook.icon.svg?react";
import Home from "~/assets/images/icons/home.icon.svg?react";
import Info from "~/assets/images/icons/info.icon.svg?react";
import Instagram from "~/assets/images/icons/instagram.icon.svg?react";
import Like from "~/assets/images/icons/like.icon.svg?react";
import Location from "~/assets/images/icons/location.icon.svg?react";
import Logout from "~/assets/images/icons/logout.icon.svg?react";
import Members from "~/assets/images/icons/members.icon.svg?react";
import MembersFilled from "~/assets/images/icons/members-filled.icon.svg?react";
import Notifications from "~/assets/images/icons/notifications.icon.svg?react";
import Profile from "~/assets/images/icons/profile.icon.svg?react";
import RelatedInterests from "~/assets/images/icons/related-interests.icon.svg?react";
import RelatedInterestsFilled from "~/assets/images/icons/related-interests-filled.icon.svg?react";
import TeamderLogo from "~/assets/images/icons/teamder-logo.icon.svg?react";
import Teams from "~/assets/images/icons/teams.icon.svg?react";
import Twitter from "~/assets/images/icons/twitter.icon.svg?react";

type IconName =
  | "back"
  | "cake"
  | "calendar"
  | "calendarFilled"
  | "eventLocation"
  | "eventLocationFilled"
  | "facebook"
  | "home"
  | "info"
  | "instagram"
  | "like"
  | "location"
  | "logout"
  | "members"
  | "membersFilled"
  | "notifications"
  | "profile"
  | "relatedInterests"
  | "relatedInterestsFilled"
  | "teamderLogo"
  | "teams"
  | "twitter";

const iconNameToIcon: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  back: Back,
  cake: Cake,
  calendar: Calendar,
  calendarFilled: CalendarFilled,
  eventLocation: EventLocation,
  eventLocationFilled: EventLocationFilled,
  facebook: Facebook,
  home: Home,
  info: Info,
  instagram: Instagram,
  like: Like,
  location: Location,
  logout: Logout,
  members: Members,
  membersFilled: MembersFilled,
  notifications: Notifications,
  profile: Profile,
  relatedInterests: RelatedInterests,
  relatedInterestsFilled: RelatedInterestsFilled,
  teamderLogo: TeamderLogo,
  teams: Teams,
  twitter: Twitter,
};

export { type IconName, iconNameToIcon };
