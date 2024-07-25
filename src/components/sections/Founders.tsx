import Image from "next/image";

const Founders = () => {
	return (
		<div className="flex flex-col justify-center min-h-screen">
			<h1 className="font-boska md:text-8xl text-5xl font-bold text-dark opacity-30 my-10 p-7">
				Founders
			</h1>
			<div className="flex justify-center items-center md:flex-row flex-col gap-32">
				<div className="border border-dark md:px-7 px-3 py-7 flex flex-col justify-center items-center text-dark">
					<Image
						src="/assets/images/chris.jpg"
						alt="Nimble Founder"
						className="grayscale"
						width={288}
						height={288}
					/>
					<h3 className="font-boska lg:text-5xl md:text-3xl text-2xl font-medium mt-10 mb-5">
						Chris Colley
					</h3>
					<h4 className="font-switzer lg:text-2xl md:text-xl text-lg font-light leading-relaxed tracking-wider">
						Co-founder, CEO
					</h4>
				</div>
				<div className="border border-dark md:px-7 px-3 py-7 flex flex-col justify-center items-center text-dark">
					<Image
						src="/assets/images/ash.png"
						alt="Nimble Founder"
						className="grayscale"
						width={288}
						height={288}
					/>
					<h3 className="font-boska lg:text-5xl md:text-3xl text-2xl font-medium mt-10 mb-5">
						Ash Bhatia
					</h3>
					<h4 className="font-switzer lg:text-2xl md:text-xl text-lg font-light leading-relaxed tracking-wider">
						Co-founder, CTO
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Founders;
