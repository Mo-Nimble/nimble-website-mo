import Button from "../ui/Button";

const Product = () => {
	return (
		<div className="flex flex-col justify-center min-h-screen p-7" id="product">
			<h1 className="font-boska md:text-8xl text-5xl font-bold text-dark opacity-30 my-10">
				Product
			</h1>
            <h2 className="font-boska text-dark lg:text-5xl md:text-4xl text-2xl font-medium md:my-5 my-2">Nimble alleviates firms&apos; regulatory burden</h2>
            <h3 className="font-switzer lg:text-3xl  md:text-2xl text-lg font-light mt-5 leading-relaxed tracking-wider text-dark ">
            Nimble generates reports, such as SARs, from unstructured research — and augments the output with intelligent prompts.</h3>
            <h2 className="font-boska text-dark lg:text-5xl md:text-4xl text-2xl font-medium md:mt-20 my-2">Bottom-line benefits</h2>
            <div className="flex border justify-center items-center mt-10 md:flex-row flex-col">
                <h3 className=" border w-full md:w-auto lg:h-64 md:h-56 h-fit p-7 text-dark font-switzer lg:text-2xl md:text-xl text-lg font-light tracking-wide leading-relaxed">{'>'}50% productivity gain from reduced manual processing</h3>
                <h3 className=" border w-full md:w-auto lg:h-64 md:h-56 h-fit p-7 text-dark font-switzer lg:text-2xl md:text-xl text-lg font-light tracking-wide leading-relaxed">Intelligent prompts ensure fewer quality failures</h3>
                <h3 className=" border w-full md:w-auto lg:h-64 md:h-56 h-fit p-7 text-dark font-switzer lg:text-2xl md:text-xl text-lg font-light tracking-wide leading-relaxed">Reduced training investment due to process simplification</h3>
                <h3 className=" border w-full md:w-auto lg:h-64 md:h-56 h-fit p-7 text-dark font-switzer lg:text-2xl md:text-xl text-lg font-light tracking-wide leading-relaxed">More consistent output, better aligned with regulator/audit expectations, meaning less rework</h3>
            </div>
            <Button text="EARLY ACCESS" path="#" />
		</div>
	);
};

export default Product;
