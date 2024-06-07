import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({ text, additionalClasses = '', ...props }) => {
    return (
        <button
            className={`px-4 py-2 rounded ${additionalClasses}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;