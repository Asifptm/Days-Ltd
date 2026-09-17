import type { Metadata } from "next";
import { siteIcons } from "@/config/site";
import DaysPage from "@/views/days";

export const metadata: Metadata = {
  title: "Days",
  description:
    "Platform where people-centric decisions are made. Explore daily insights and community views.",
  icons: siteIcons,
};

export default DaysPage;
