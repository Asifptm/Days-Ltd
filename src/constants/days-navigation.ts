export type DaysFooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const daysFooterColumns: DaysFooterColumn[] = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
    ],
  },
];
