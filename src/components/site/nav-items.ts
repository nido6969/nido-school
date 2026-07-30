export type NavItem = { label: string; to: string };

export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Mission & Vision", to: "/mission-vision" },
  { label: "Programs & Environments", to: "/programs-environments" },
  { label: "Blogs", to: "/blogs" },
  { label: "FAQ's", to: "/faqs" },
  { label: "Admissions", to: "/admissions" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
];

export const sideNav: NavItem[] = mainNav.filter((item) => item.to !== "/");
