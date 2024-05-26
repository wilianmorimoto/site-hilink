'use client'

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image
					src="./hilink-logo.svg"
					width={74}
					height={29}
					alt="Logo Hilink"
				/>
			</Link>
			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link
						key={link.key}
						href={link.href}
						className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{link.label}
					</Link>
				))}
			</ul>
			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="../../public/user.svg"
					variant="btn_dark_green"
				/>
			</div>

			<Image
				src="./menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden z-50"
				onClick={() => setShowMenu(!showMenu)}
			/>
			<ul className={`absolute right-0 top-0 z-40 shadow-xl h-screen px-8 pt-14 w-1/3 flex flex-col gap-4 duration-300 bg-white lg:hidden ${!showMenu && 'hidden'}`}>
				{NAV_LINKS.map((link) => (
					<Link
						key={link.key}
						href={link.href}
						className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => setShowMenu(false)}
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
