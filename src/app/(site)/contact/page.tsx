import type { Metadata } from "next";
import { siteIcons } from "@/config/site";
import ContactPage from "@/views/contact";

export const metadata: Metadata = {
  title: "Register interest",
  description:
    "Join the Young Oracle Program. Open for college students around the world.",
  icons: siteIcons,
};

export default ContactPage;
