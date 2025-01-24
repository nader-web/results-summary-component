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
			<div className="w-full min-h-screen flex items-start lg:items-center lg:mt-0 justify-center p-0 lg:p-4">
				<div className="w-full  max-w-[375px] lg:max-w-[736px] flex flex-col lg:flex-row bg-white shadow-lg rounded-b-3xl  lg:rounded-3xl">
					<div className="result bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-6 lg:p-8 rounded-b-3xl lg:rounded-3xl text-center flex-1">
						<p className="text-[19px] mb-4 lg:mb-6 text-[hsl(241,100%,89%)] font-medium">
							Your Result
						</p>
						<div className="score-circle bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] mx-auto rounded-full w-28 h-28 lg:w-36 lg:h-36 flex flex-col justify-center items-center">
							<span className="text-5xl lg:text-6xl font-extrabold text-white">
								76
							</span>
							<span className="text-base lg:text-lg text-[hsl(241,100%,89%,.5)] font-medium">
								of 100
							</span>
						</div>
						<h2 className="text-2xl lg:text-3xl mt-4 lg:mt-6 mb-2 lg:mb-3 text-white font-bold">
							Great
						</h2>
						<p className="text-[16px] lg:text-[18px] text-[hsl(241,100%,89%)] font-medium max-w-[260px] mx-auto">
							You scored higher than 65% of the people who have taken these
							tests.
						</p>
					</div>

					<div className="summary flex-1 p-6 lg:p-8 bg-white rounded-3xl">
						<h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-[hsl(224,30%,27%)]">
							Summary
						</h3>
						<div className="space-y-3 lg:space-y-4">
							{summaryItems.map((item, index) => (
								<div
									key={index}
									className={`flex justify-between p-3 lg:p-4 rounded-lg ${
										item.category === "Reaction"
											? "bg-red-50"
											: item.category === "Memory"
											? "bg-yellow-50"
											: item.category === "Verbal"
											? "bg-green-50"
											: "bg-blue-50"
									}`}
								>
									<div
										className={`flex items-center ${
											item.category === "Reaction"
												? "text-red-500"
												: item.category === "Memory"
												? "text-yellow-500"
												: item.category === "Verbal"
												? "text-green-500"
												: "text-blue-500"
										}`}
									>
										<span className="mr-2">{item.icon}</span>
										<span className="font-medium">{item.category}</span>
									</div>
									<div>
										<span className="font-bold text-gray-800">
											{item.score}
										</span>
										<span className="text-gray-400"> / 100</span>
									</div>
								</div>
							))}
						</div>
						<button className="w-full bg-[hsl(224,30%,27%)] hover:bg-gradient-to-b hover:from-[hsl(252,100%,67%)] hover:to-[hsl(241,81%,54%)] text-white rounded-full py-3 lg:py-4 mt-6 font-medium">
							Continue
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
