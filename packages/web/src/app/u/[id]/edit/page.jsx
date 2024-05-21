"use client";

import React, { useState, useEffect } from "react";
import EditInvitationTemplate from "@ui/templates/EditInvitationTemplate";
import responseEffects from "@/app/u/create/responseEffect";
import LoadingTemplate from "@ui/templates/LoadingTemplate";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
	const { id } = params;
	const [data, setData] = useState({});
	const [message, setMessage] = useState("");
	const [image, setImage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [successImage, setSuccessImage] = useState("");
	const [failedMessage, setFailedMessage] = useState("");
	const [failedImage, setFailedImage] = useState("");
	const [recepient, setRecepient] = useState("");
	const [responseEffect, setResponseEffect] = useState("NO_EFFECT");
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [fontColor, setFontColor] = useState("#ffffff");
	const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#ffffff");
	const [buttonFontColor, setButtonFontColor] = useState("#ffffff");
  const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const [step, setStep] = useState(0)

	useEffect(() => {
		if (!getCookie("session")) {
			router.push('/')
		}
	}, [router])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:3333/api/invitations/${id}`, {
					headers: {
						Authorization: `Bearer ${JSON.parse(getCookie("session")).token}`,
					},
				});
				const data = await res.json();
				if (data.user !== JSON.parse(getCookie("session")).id) {
					router.push(`/invitation/${id}`)
					return
				}
				setData(data);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [id, router]);

	useEffect(() => {
		setMessage(data.message)
    setImage(data.messageImage)
    setSuccessMessage(data.successMessage)
    setSuccessImage(data.successImage)
    setFailedMessage(data.failedMessage)
    setFailedImage(data.failedImage)
    setRecepient(data.recepient)
    setResponseEffect(data.responseEffect ? "RUN_AWAY" : "NO_EFFECT")
    setBackgroundColor(data.backgroundColor)
    setFontColor(data.fontColor)
    setButtonBackgroundColor(data.buttonBackgroundColor)
    setButtonFontColor(data.buttonFontColor)
    setIsLoading(false)
	}, [data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch(`http://localhost:3333/api/invitations/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${JSON.parse(getCookie("session")).token}`,
			},
			body: JSON.stringify({
				message,
				messageImage: image,
				successMessage,
				successImage,
				failedMessage,
				failedImage,
				recepient,
				responseEffect,
				backgroundColor,
				fontColor,
				buttonBackgroundColor,
				buttonFontColor,
			}),
		});
		const data = await res.json();
    router.push('/u/profile')
	};

  if (isLoading) {
    return (
      <LoadingTemplate />
    )
  }

	return (
		<>
			<EditInvitationTemplate
				message={message}
				image={image}
				successMessage={successMessage}
				successImage={successImage}
				failedMessage={failedMessage}
				failedImage={failedImage}
				recepient={recepient}
				responseEffect={responseEffect}
				responseEffectRadioGroup={responseEffects}
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				buttonBackgroundColor={buttonBackgroundColor}
				buttonFontColor={buttonFontColor}
				handleChangeMessage={(e) => setMessage(e.target.value)}
				handleChangeImage={(e) => setImage(e.target.value)}
				handleChangeSuccessMessage={(e) => setSuccessMessage(e.target.value)}
				handleChangeSuccessImage={(e) => setSuccessImage(e.target.value)}
				handleChangeFailedMessage={(e) => setFailedMessage(e.target.value)}
				handleChangeFailedImage={(e) => setFailedImage(e.target.value)}
				handleChangeRecepient={(e) => setRecepient(e.target.value)}
				handleChangeResponseEffect={(e) => setResponseEffect(e.target.value)}
				handleChangeBackgroundColor={(e) => setBackgroundColor(e.target.value)}
				handleChangeFontColor={(e) => setFontColor(e.target.value)}
				handleChangeButtonBackgroundColor={(e) =>
					setButtonBackgroundColor(e.target.value)
				}
				handleChangeButtonFontColor={(e) => setButtonFontColor(e.target.value)}
				handleSubmit={handleSubmit}
				step={step}
				handleStep={(x) => setStep(step+x)}		
			/>
		</>
	);
};

export default Page;
