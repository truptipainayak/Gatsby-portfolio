import {
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaDev,
  FaPaintBrush,
  FaSignLanguage,
  GoTools,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "achievements", title: "Achievements", icon: FaAward },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "philanthropy", title: "Philanthropy", icon: FaBoxOpen },
  { id: "design", title: "Design", icon: FaPaintBrush },
];

export default sections;
