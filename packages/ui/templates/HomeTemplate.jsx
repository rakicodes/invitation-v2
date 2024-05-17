"use client"

import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import CenterCardContainer from "./container/CenterCardContainer";

const HomeTemplate = ({ handleCTA }) => {
	return (
		<CenterCardContainer>
			<div className="flex flex-col">
			<Typography element="h1" fontSize="lg" textCenter="center">Send your first invitation!</Typography>
			<Image url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW91d2Nyd2tjcHBpYndkNDFkaGNuNGhkYnUwMm1zN2M5dzdzbm43NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRIY7gVfIV5AMwNbha/giphy.gif" alt="" />
			<Button onClick={handleCTA}>Get Started</Button>
			</div>
		</CenterCardContainer>
	);
};

export default HomeTemplate;
