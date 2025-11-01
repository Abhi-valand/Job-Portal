import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../popover";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const location = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
            if(res.data.success){
                dispatch(setUser(null))
                navigate("/")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Jobs", path: "/jobs" },
        { name: "Browse", path: "/browse" },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        <span className="text-gray-900 group-hover:text-[#6A38C2] transition-colors duration-300">
                            Job
                        </span>
                        <span className="text-[#F83002] group-hover:text-[#F84A1A] transition-colors duration-300">
                            Portal
                        </span>
                    </h1>
                </Link>


                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-8 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`transition-colors duration-200 hover:text-[#6A38C2] ${location.pathname === link.path
                                        ? "text-[#6A38C2] font-semibold"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Auth / User Section */}
                {!user ? (
                    <div className="flex items-center gap-2">
                        <Link to="/login">
                            <Button
                                variant="outline"
                                className="hover:bg-gray-100 transition-all"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="bg-[#6A38C2] hover:bg-[#5c2dac] transition-all">
                                Signup
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer ring-2 ring-[#6A38C2]/20 hover:ring-[#6A38C2]/40 transition-all">
                                <AvatarImage src={user?.profile?.profilePhoto}  />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className="w-72 p-4 space-y-4 shadow-lg border-gray-200">
                            <div className="flex items-center gap-3 border-b pb-3">
                                <Avatar>
                                    <AvatarImage src={user?.profile?.profilePhoto} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{user?.fullname}</h4>
                                    <p className="text-sm text-gray-500">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-gray-700">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-[#6A38C2] transition-colors">
                                    <User2 size={18} />
                                    <Button variant="link" className="p-0 h-auto text-sm">
                                        <Link to="/profile">
                                            View Profile
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer hover:text-[#F83002] transition-colors">
                                    <LogOut size={18} />
                                    <Button variant="link" className="p-0 h-auto text-sm text-[#F83002]">
                                        <Link onClick={logOutHandler} to="/login">
                                            Log Out
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
