import type { Metadata } from "next";
import "@/public/scss/main.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "OPTIMAL SERVICES LLC- IT SOLUTION AND CONSLUTING SERVICE",
  description: " IT services including Web and Mobile Application Development, Web Design, Web Hosting, Out-sourcing Services such as Computer & Network Maintenance, Cybersecurity & Information Systems Audit, and Business Process Re-engineering.",
  keywords: [
      "General IT Services:",
     " IT solutions provider",
      "Professional IT services",
      "Managed IT services",
      "IT consulting firm",
      "IT support serviceS",
      "Web and Mobile Application Development:",
      "Mobile app development",
      "Custom web development",
      "Mobile and web app solutions",
      "App developers near me",
      "Web application development services",
      "Web Design:",
      "Professional web design",
      "Custom website design",
      "Responsive website design",
      "User-friendly web design",
      "Creative web designers",
      "Web Hosting:",
      "ffordable web hosting",
      "Secure website hosting",
      "Reliable web hosting services",
      "Cloud-based hosting",
      "Managed web hosting",
      "Out-sourcing Services:",
      "IT outsourcing company",
      "Computer and network maintenance",
      "Outsourced IT support",
      "Network maintenance services",
      "IT infrastructure outsourcing",
      "Cybersecurity & Information Systems Audit:",
      "Cybersecurity solutions",
      "IT security audits",
      "Cyber threat management",
      "Information systems audit",
      "Network security assessment",
      "Business Process Re-engineering:",
      "Business process optimization",
      "Process re-engineering consultants",
      "Workflow automation serviceS",
      "Business transformation solutions",
      "Operational efficiency improvement",
      "Combined Keywords:",
     " End-to-end IT services",
      "Digital transformation solutions",
      "Comprehensive IT support",
     " Technology-driven business solutions",
      "Expert IT consultants",
  ],
  authors: [
    {
      name: " ",
      url: " ",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <InitAnimations />
      </body>
    </html>
  );
}
