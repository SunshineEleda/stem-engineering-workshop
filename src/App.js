import { useState, useEffect } from "react";
import { Container, PostContainer } from "./style.js";

function App() {
	const [feedArray, setFeedArray] = useState([]);

	useEffect(() => {
		console.log(feedArray);
	});
	return (
		<Container>
			<header>
				<h1>unintitled</h1>
			</header>

			<main>
				<section>
					{feedArray.map((feedItem, i) => (
						<PostContainer>
							{/**<p key={`${i}-feedItem`}>{feedItem}</p>*/}
							{/**<img src={feedItem} />*/}
						</PostContainer>
					))}
				</section>
				<textarea
					onBlur={(e) => {
						const newValue = e.target.value;

						setFeedArray((feedArray) => [...feedArray, newValue]);
					}}
				></textarea>
				<input type="submit" value="Post" onClick={() => {}}></input>
			</main>
		</Container>
	);
}

export default App;
