import Link from "next/link";

interface NavbarProps {
	isMenuOpen: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isMenuOpen }) => {
	return (
		<div
			className={`${
				isMenuOpen ? "block" : "hidden"
			} md:block  md:static absolute py-3 left-0 w-full bg-primary z-40`}
		>
			<ul className="flex flex-col md:flex-row justify-center items-center font-boska md:text-lg text-4xl text-dark font-regular md:w-auto w-screen md:h-auto h-screen">
				<Link href="/">
					<li className="px-4 py-2 md:my-0 hover:bg-secondary">Home</li>
				</Link>
				<Link href="/#about">
					<li className="px-4 py-2 md:my-0 hover:bg-secondary">
						About Us
					</li>
				</Link>
				<Link href="/#product">
					<li className="px-4 py-2 md:my-0 hover:bg-secondary">Product</li>
				</Link>
				<Link href="/#contact">
					<li className="px-4 py-2 md:my-0 hover:bg-secondary">Contact</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
