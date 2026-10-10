import { NavLink } from "react-router";
import BarberLogo from "./BarberLogo";


const links = [
  { to: "/", label: "Home" },
  { to: "/booking", label: "Booking" },
  { to: "/user-data", label: "User Data" },
]

export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar__inner" aria-label="Main navigation">
                <div className="navbar__brand">
                    <BarberLogo size={42} />
                    <span>Barber Shop</span>
                </div>
        
                <ul className="navbar__links">
                  {links.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        end={to === "/"}
                        className={({ isActive }) =>
                          "navbar__link" + (isActive ? " navbar__link--active" : "")
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
            </nav>
        </header>
    );
}