import './button.css';

interface ButtonProps {    
    handleFunction: () => void,
    title?: string,
    size?: "small" | "medium" | "large",
    variant?: "primary" | "secondary" | "tertiary",
    fontColor?: "white" | "gray" | "dark",
}

function Button({
    handleFunction,
    title,
    size="large",
    variant="primary",
    fontColor="dark"
}: ButtonProps) {
    return (
        <button
            title={title}
            className={`base-button ${size} ${variant} ${fontColor}`}
            onClick={() => handleFunction()}
            
        >
            {title}
        </button>
    );
}

export default Button;
