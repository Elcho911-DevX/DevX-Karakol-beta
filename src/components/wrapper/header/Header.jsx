import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../hook/useTheme";
import { Logout } from "../../auth/Logout";
import "./HeaderActive.scss";

import pic from "../../../assets/logo.png";
import sun from "../../../assets/icons/sun.png";
import moon from "../../../assets/icons/moon.png";

const links = [
	{ to: "/", text: "Home" },
	{ to: "/about", text: "About Us" },
	{ to: "/contact", text: "Contacts" },
	{ to: "/projects", text: "Projects" },
];

export const Header = () => {
	const { isDark, setIsDark } = useTheme();
	const [headerScroll, setHeaderScroll] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 20) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};
	window.addEventListener("scroll", changeBackground);

	return (
		<div>
			<header className="header__jtsecn">
				<div className={headerScroll ? "headerScroll active" : "headerScroll"}>
					<div className="container">
						<div className="content">
							{/* ! header menu */}
							<div className="left">
								<div className="logo">
									<a href="">
										<img src={pic} alt="DevX logo" />
									</a>
								</div>
								<div className="nav">
									<div className="link">
										{links.map((link) => (
											<NavLink
												key={link.to}
												to={link.to}
												className={({ isActive }) =>
													isActive ? "activeHeaderStyle" : undefined
												}>
												{link.text}
											</NavLink>
										))}
									</div>
								</div>
							</div>
							<div className="right">
								<Logout />
								<div className="icons" onClick={() => setIsDark(!isDark)}>
									{isDark ? (
										<img src={sun} alt="sun" />
									) : (
										<img src={moon} alt="moon" />
									)}
								</div>
							</div>

							{/* ! burger menu */}
							<div
								className={
									isOpen ? "nav__burger__menu show" : "nav__burger__menu"
								}>
								{links.map((link) => (
									<NavLink
										key={link.to}
										to={link.to}
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											isActive ? "activeHeaderStyle" : undefined
										}>
										{link.text}
									</NavLink>
								))}
								<div className="burger__logout">
									<Logout />
									<div className="icons" onClick={() => setIsDark(!isDark)}>
										{isDark ? (
											<img src={sun} alt="sun" />
										) : (
											<img src={moon} alt="moon" />
										)}
									</div>
								</div>
							</div>
 ь
							<div className="burger__button">
								<label>
									<input
										type="checkbox"
										checked={isOpen}
										onChange={() => setIsOpen(!isOpen)}
									/>
									<span></span>
									<span></span>
									<span></span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
