import FaceIcon from "@mui/icons-material/Face";
import GridViewIcon from "@mui/icons-material/GridView";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import FamilyRestroomSharpIcon from "@mui/icons-material/FamilyRestroomSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import InfoIcon from "@mui/icons-material/Info";

const publicNavArray = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Login",
    icon: <LoginIcon />,
    link: "/login",
  },
  {
    name: "Parent Signup",
    icon: <FamilyRestroomSharpIcon />,
    link: "/parent/sign-up",
  },
  {
    name: "Teacher Signup",
    icon: <SchoolSharpIcon />,
    link: "/teacher/sign-up",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
];

const parentNavArray = [
  {
    name: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard/parent",
  },
  {
    name: "My Children",
    icon: <FaceIcon />,
    link: "/children/view",
  },
  {
    name: "Add Child",
    icon: <PersonAddIcon />,
    link: "/children/new",
  },
  {
    name: "Add Medical",
    icon: <MedicalServicesIcon />,
    link: "/medical/new",
  },
  {
    name: "Add Absence Request",
    icon: <AddBoxIcon />,
    link: "/absenceRequest/new",
  },
  {
    name: "View Absences",
    icon: <EventAvailableIcon />,
    link: "/absenceRequest/view",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
    link: "",
  },
];

const teacherNavArray = [
  {
    name: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard/teacher",
  },
  {
    name: "My Children",
    icon: <FaceIcon />,
    link: "/view/students",
  },
  {
    name: "View Absence Requests",
    icon: <EventAvailableIcon />,
    link: "/absence-requests",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
    link: "",
  },
];

export const getNavItems = (user) => {
  if (user?.role) {
    const userType = user?.role;

    if (userType === "teacher") {
      return teacherNavArray;
    }

    if (userType === "parent") {
      return parentNavArray;
    }
  }

  return publicNavArray;
};
