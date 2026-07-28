"use client"
import Image from "next/image";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Courses",   icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Kambaz/Labs",      icon: LiaCogSolid },
  ];
  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
    className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <Image src="/images/OIP.webp" width={75} height={75} alt="Northeastern University" />
     </ListGroupItem>
     <ListGroupItem as={Link} href="/Account"
        className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <ListGroupItem key={link.path} as={Link} href={link.path}
            className={`bg-black text-center border-0
                ${pathname.startsWith(link.path) ? "text-danger bg-white" : "text-white bg-black"}`}>
            <Icon className={`fs-1 ${pathname.startsWith(link.path) ? "text-danger" : "text-white"}`} />
            <br />
            {link.label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
);}
