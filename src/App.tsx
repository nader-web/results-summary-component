import "./App.css";

const App = () => {
	const summaryItems = [
		{
			category: "Reaction",
			score: 80,
			color: "text-light-red",
			icon: (
				<img
					src="./images/icon-reaction.svg"
					alt="reaction"
					className="w-5 h-5"
				/>
			),
		},
		{
			category: "Memory",
			score: 92,
			color: "text-orangey-yellow",
			icon: (
				<img src="./images/icon-memory.svg" alt="memory" className="w-5 h-5" />
			),
		},
		{
			category: "Verbal",
			score: 61,
			color: "text-green-teal",
			icon: (
				<img src="./images/icon-verbal.svg" alt="verbal" className="w-5 h-5" />
			),
		},
		{
			category: "Visual",
			score: 72,
			color: "text-cobalt-blue",
			icon: (
				<img src="./images/icon-visual.svg" alt="visual" className="w-5 h-5" />
			),
		},
	];

	return (
		<>
			<main className="w-full min-h-screen flex items-center justify-center p-0 lg:p-4">
				<article className="w-full bg-white max-w-[375px] lg:max-w-[736px] lg:min-h-[512px] flex flex-col lg:flex-row shadow-2xl rounded-none lg:rounded-3xl">
					<section className="result bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-6 lg:p-10 rounded-b-3xl lg:rounded-3xl text-center flex-1">
						<h1 className="text-[18px] mb-6 lg:mb-8 text-[hsl(241,100%,89%)] font-medium">
							Your Result
						</h1>
						<div className="score-circle bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] rounded-full mx-auto w-[160px] h-[160px] flex flex-col justify-center mb-6 lg:mb-8">
							<p className="text-[56px] font-bold text-white leading-tight">
								76
							</p>
							<p className="text-[hsl(241,100%,89%)]">of 100</p>
						</div>
						<h2 className="text-white text-[24px] font-bold mb-3">Great</h2>
						<p className="text-[hsl(241,100%,89%)] text-[18px]">
							You scored higher than 65% of the people who have taken these
							tests.
						</p>
					</section>

					<section className="summary flex-1 p-6 lg:p-10">
						<h2 className="text-lg lg:text-xl font-bold mb-6 lg:mb-8 text-[hsl(224,30%,27%)]">
							Summary
						</h2>
						<ul className="space-y-4 lg:space-y-5">
							{summaryItems.map((item, index) => (
								<li
									key={index}
									className={`flex items-center justify-between p-4 rounded-xl ${
										item.color === "text-light-red"
											? "bg-light-red"
											: item.color === "text-orangey-yellow"
											? "bg-orangey-yellow"
											: item.color === "text-green-teal"
											? "bg-green-teal"
											: "bg-cobalt-blue"
									} bg-opacity-10 font-bold`}
									role="listitem"
								>
									<div className="flex items-center gap-3">
										{item.icon}
										<span
											className={
												item.color === "text-light-red"
													? "text-light-red"
													: item.color === "text-orangey-yellow"
													? "text-orangey-yellow"
													: item.color === "text-green-teal"
													? "text-green-teal"
													: "text-cobalt-blue"
											}
										>
											{item.category}
										</span>
									</div>
									<div className="font-bold">
										<span>{item.score}</span>
										<span className="text-gray-400"> / 100</span>
									</div>
								</li>
							))}
						</ul>
						<button className="w-full bg-[hsl(224,30%,27%)] hover:bg-gradient-to-b hover:from-[hsl(252,100%,67%)] hover:to-[hsl(241,81%,54%)] text-white rounded-full py-3 lg:py-4 mt-8 font-bold">
							Continue
						</button>
					</section>
				</article>
			</main>
		</>
	);
};

export default App;
