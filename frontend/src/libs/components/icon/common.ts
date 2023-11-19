import Back from "~/assets/icons/back.icon.svg?react";
import Cake from "~/assets/icons/cake.icon.svg?react";
import Calendar from "~/assets/icons/calendar.icon.svg?react";
import CalendarFilled from "~/assets/icons/calendar-filled.icon.svg?react";
import EventLocation from "~/assets/icons/event-location.icon.svg?react";
import EventLocationFilled from "~/assets/icons/event-location-filled.icon.svg?react";
import Facebook from "~/assets/icons/facebook.icon.svg?react";
import Hide from "~/assets/icons/hide.icon.svg?react";
import Home from "~/assets/icons/home.icon.svg?react";
import Info from "~/assets/icons/info.icon.svg?react";
import Instagram from "~/assets/icons/instagram.icon.svg?react";
import Like from "~/assets/icons/like.icon.svg?react";
import Location from "~/assets/icons/location.icon.svg?react";
import Logout from "~/assets/icons/logout.icon.svg?react";
import Members from "~/assets/icons/members.icon.svg?react";
import MembersFilled from "~/assets/icons/members-filled.icon.svg?react";
import Notifications from "~/assets/icons/notifications.icon.svg?react";
import Profile from "~/assets/icons/profile.icon.svg?react";
import RelatedInterests from "~/assets/icons/related-interests.icon.svg?react";
import RelatedInterestsFilled from "~/assets/icons/related-interests-filled.icon.svg?react";
import Show from "~/assets/icons/show.icon.svg?react";
import TeamderLogo from "~/assets/icons/teamder-logo.icon.svg?react";
import Teams from "~/assets/icons/teams.icon.svg?react";
import Twitter from "~/assets/icons/twitter.icon.svg?react";

type IconName =
  | "back"
  | "cake"
  | "calendar"
  | "calendarFilled"
  | "eventLocation"
  | "eventLocationFilled"
  | "facebook"
  | "hide"
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
  | "show"
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
  hide: Hide,
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
  show: Show,
  teamderLogo: TeamderLogo,
  teams: Teams,
  twitter: Twitter,
};

export { type IconName, iconNameToIcon };
