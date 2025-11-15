"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TOC() {
  const pathname = usePathname();

  const links = [
   { href: "/Labs",     label: "Labs",  id: "wd-labs-link" },
   { href: "/Labs/Lab1",label: "Lab1", id: "wd-lab1-link" },
   { href: "/Labs/Lab2",label: "Lab2", id: "wd-lab2-link" },
   { href: "/Labs/Lab3",label: "Lab3", id: "wd-lab3-link" },
   { href: "/Labs/Lab4",label: "Lab4", id: "wd-lab4-link" },
  { href: "/Labs/Lab5",label: "Lab5", id: "wd-lab5-link" },
   { href: "/",         label: "Kambaz",id: "wd-kambaz-link"},
   { href: "http://github.com/jannunzi",
                        label: "My GitHub",
                        id: "wd-github-link" },
                      { href: "https://github.com/seamusmuf123/kambaz-next-js-cs4550-seamus",
                        label: "Seamus Mufarinya",
                        id: "wd-seamus-link" }
                    ];
 return (
   <Nav variant="pills">
    {links.map((link) => (
       <NavItem key={link.id}>
         <NavLink as={Link}
          className={pathname.endsWith(link.href)
                        ? "active" : ""}
                  href={link.href}
                  id={link.id}>
           {link.label}
         </NavLink>
       </NavItem>
     ))}
   </Nav>
);}
