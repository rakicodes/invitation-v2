"use client"

import React, { useState, useEffect } from 'react'
import CreateInvitationTemplate from '@ui/templates/CreateInvitationTemplate'
import responseEffects from './responseEffect'
import sampleInvitation from './sampleInvitation'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'


const Page = () => {
  const [message, setMessage] = useState("")
  const [image, setImage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [successImage, setSuccessImage] = useState("")
  const [failedMessage, setFailedMessage] = useState("")
  const [failedImage, setFailedImage] = useState("")
  const [recepient, setrecepient] = useState("")
  const [responseEffect, setResponseEffect] = useState("NO_EFFECT")
  const [backgroundColor, setBackgroundColor] = useState(sampleInvitation.backgroundColor)
  const [fontColor, setFontColor] = useState(sampleInvitation.fontColor)
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(sampleInvitation.buttonBackgroundColor)
  const [buttonFontColor, setButtonFontColor] = useState(sampleInvitation.buttonFontColor)
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [messageSearch, setMessageSearch] = useState("")
  const [messageSearchData, setMessageSearchData] = useState([])
  const [successMessageSearch, setSuccessMessageSearch] = useState("")
  const [successMessageSearchData, setSuccessMessageSearchData] = useState([])
  const [failedMessageSearch, setFailedMessageSearch] = useState("")
  const [failedMessageSearchData, setFailedMessageSearchData] = useState([])

  useEffect(() => {
		if (!getCookie("session")) {
			router.push('/')
		}
	}, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3333/api/invitations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${JSON.parse(getCookie('session')).token}`
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
        buttonFontColor
      })
    })
    const data = await res.json()
    router.push(`/u/${data._id}/share`)
  }

  const handleSubmitMessageSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_KEY}&q=${messageSearch}&limit=6`)
    const data = await res.json()
    console.log(data)
    setMessageSearchData(data.data)
  }

  const handleSubmitSuccessMessageSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_KEY}&q=${successMessageSearch}&limit=6`)
    const data = await res.json()
    console.log(data)
    setSuccessMessageSearchData(data.data)
  }

  const handleSubmitFailedMessageSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_KEY}&q=${failedMessageSearch}&limit=6`)
    const data = await res.json()
    console.log(data)
    setFailedMessageSearchData(data.data)
  }

  const handleSearchMessageSelect = (e) => {
    setImage(e.target.src)
  }

  const handleSearchSuccessMessageSelect = (e) => {
    setSuccessImage(e.target.src)
  }

  const handleSearchFailedMessageSelect = (e) => {
    setFailedImage(e.target.src)
  }

  return (
    <>
      <CreateInvitationTemplate 
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
        handleChangerecepient={(e) => setrecepient(e.target.value)}
        handleChangeResponseEffect={(e) => setResponseEffect(e.target.value)}
        handleChangeBackgroundColor={(e) => setBackgroundColor(e.target.value)}
        handleChangeFontColor={(e) => setFontColor(e.target.value)}
        handleChangeButtonBackgroundColor={(e) => setButtonBackgroundColor(e.target.value)}
        handleChangeButtonFontColor={(e) => setButtonFontColor(e.target.value)}
        handleSubmit={handleSubmit}
        preview={sampleInvitation}
        step={step}
        handleStep={(x) => setStep(step+x)}
        messageSearch={messageSearch}
        handleMessageSearch={(e) => setMessageSearch(e.target.value)}
        handleSubmitMessageSearch={handleSubmitMessageSearch}
        messageSearchData={messageSearchData}
        handleSearchMessageSelect={handleSearchMessageSelect}
        successMessageSearch={successMessageSearch}
        handleSuccessMessageSearch={(e) => setSuccessMessageSearch(e.target.value)}
        handleSubmitSuccessMessageSearch={handleSubmitSuccessMessageSearch}
        successMessageSearchData={successMessageSearchData}
        handleSearchSuccessMessageSelect={handleSearchSuccessMessageSelect}
        failedMessageSearch={failedMessageSearch}
        handleFailedMessageSearch={(e) => setFailedMessageSearch(e.target.value)}
        handleSubmitFailedMessageSearch={handleSubmitFailedMessageSearch}
        failedMessageSearchData={failedMessageSearchData}
        handleSearchFailedMessageSelect={handleSearchFailedMessageSelect}

      />
    </>
  )
}

export default Page