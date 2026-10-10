import { NavLink } from "react-router";


const links = [
  { to: "/", label: "Home" },
  { to: "/booking", label: "Booking" },
  { to: "/user-data", label: "User Data" },
]

export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar__inner" aria-label="Main navigation">
                <span className="navbar__brand">Barber Shop</span>
        
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