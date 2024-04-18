import Button from "../atoms/Button"
const ButtonGroup = ({ texts, fontColor, backgroundColor }) => {
  return (
    <>
        {
            texts.map((text, i) => (
                <Button key={i} fontColor={fontColor} backgroundColor={backgroundColor}>{text}</Button>
            ))
        }
    </>
  )
}

export default ButtonGroup