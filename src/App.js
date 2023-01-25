import { useState, useEffect } from "react";
import { Container, PostContainer } from "./style.js";

function App() {
	const [feedArray, setFeedArray] = useState([]);

	useEffect(() => {
		console.log(feedArray);
	});

	const onHandleChange = (e) => {
			const newValue = e.target.value;

			setFeedArray((feedArray) => [...feedArray, newValue]);
			e.target.value = '';
		}
	return (
		<Container>
			<header>
				<h1>unintitled</h1>
			</header>

			<main>
				<section>
					{feedArray.map((feedItem, i) => (
						<PostContainer>
							<p key={`${i}-feedItem`}>{feedItem}</p>
							{/**<img src={feedItem} />*/}
						</PostContainer>
					))}
				</section>
				<textarea
					onBlur={(e) => {
						const newValue = e.target.value;

						setFeedArray((feedArray) => [...feedArray, newValue]);
						e.target.value = '';
					}}
				></textarea>
				<input type="submit" value="Post" onClick={onHandleChange}></input>
			</main>
		</Container>
	);
}

export default App;
