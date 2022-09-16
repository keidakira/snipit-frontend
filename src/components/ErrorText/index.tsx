import "./styles.scss";

interface ErrorTextProps {
    text: string,
    center?: boolean
}

const ErrorText = ({text, center}: ErrorTextProps) => {
    let classes = "error-text";

    if (center) {
        classes += " " + "error-center"
    }
    return <p className={classes}>
        {text}
    </p>
}


export default ErrorText;