import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { addPropertyControls, ControlType } from "framer"

// Chevron Icon
const ChevronRight = props => {
    const { color = "#004A8F", size = 50, iconSide } = props
    console.log(props)
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 238.003 238.003"
            width={size}
            height={size}
            style={{
                transform:
                    iconSide === "left" ? "rotate(180deg)" : "rotate(0deg)",
                margin: iconSide === "left" ? "0 4px 0 0" : "0 0 0 4px",
            }}
        >
            <path
                d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47 l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039 c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"
                fill={color}
            />
        </svg>
    )
}
// Common styles for button
export const commonButtonStyles = props => css`
    box-sizing: border-box;
    border: 2px solid ${props.borderColor || "#004A8F"};
    display: ${props.isBlock ? "block" : "inline-block"};
    width: ${props.isBlock ? "100%" : "auto"};
    text-align: center;
    height: 40;
    padding: 0 24px;
    font-size: 20px;
    line-height: 1.8;
    border-radius: 40px;
    color: ${props.color || "#FFFFFF"};
    font-family: "NBS Medium";
    font-weight: bold;
    position: relative;
    background-color: ${props.backgroundColor || "#004A8F"};
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    transition: box-shadow 0.3s ease-in-out;
    &:hover, &:focus, &:active {
        box-shadow: 0px 0px 0px 4px ${props.shadowColor || "#80BCE4"};
    }
    &:disabled {
        box-shadow: none;
    }
`
// Common link styles
export const commonLinkStyles = props => css`
    display: inline-block;
    font-family: "NBS Medium";
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: #004A8F;
    text-decoration: none;
    position: relative;
    color: ${props.color || "#004A8F"};
    .inner-text {
        border-bottom: 1px solid ${props.color || "#004A8F"};
    }
    &:hover{
        color: ${props.hoverColor || "#0078C8"};
        .inner-text {
            border-bottom-color: ${props.hoverColor || "#0078C8"};
        }
        path{
            fill: ${props.hoverColor || "#0078C8"}
        }
    }
`

// The link button as styled a tag
const LinkButton = styled.a`
    ${commonButtonStyles}
    text-decoration: none;
`
// The  button as styled button tag
const ButtonTag = styled.button`
    ${commonButtonStyles}
`

// The link
const LinkTag = styled.a`
    ${commonLinkStyles}
`
// The button
const ButtonInnerText = styled.span`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

// Button inner Text and Icon
function ButtonInner(props) {
    const { text, hasIcon, iconSide, iconColor } = props
    return (
        <ButtonInnerText>
            {hasIcon && iconSide && (
                <ChevronRight size={15} iconSide="left" color={iconColor} />
            )}
            <span className="inner-text">{text}</span>
            {hasIcon && !iconSide && (
                <ChevronRight size={15} color={iconColor} />
            )}
        </ButtonInnerText>
    )
}

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Button(props) {
    const { text, buttonType, hasIcon, iconSide } = props
    switch (buttonType) {
        case "link":
            return (
                <LinkTag {...props}>
                    <ButtonInner {...props} />
                </LinkTag>
            )
        case "button-link":
            return (
                <LinkButton {...props}>
                    <ButtonInner {...props} iconColor="#FFFFFF" />
                </LinkButton>
            )
        case "button-green":
            return (
                <ButtonTag
                    {...props}
                    borderColor="#3B8634"
                    backgroundColor="#3B8634"
                    shadowColor="#93D27F"
                >
                    <ButtonInner {...props} iconColor="#FFFFFF" />
                </ButtonTag>
            )
        case "button":
        default:
            return (
                <ButtonTag {...props} color="#004A8F" backgroundColor="#FFFFFF">
                    <ButtonInner {...props} />
                </ButtonTag>
            )
    }
}

// The default properties
Button.defaultProps = {
    text: "Hello World!",
    isBlock: false,
    buttonType: "button",
    href: "",
}

// FramerX Controls to be used by designers
addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    isBlock: {
        type: ControlType.Boolean,
        title: "Display Type",
        defaultValue: false,
        enabledTitle: "Block",
        disabledTitle: "Inline",
    },
    buttonType: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "button",
        options: ["button", "button-green", "button-link", "link"],
        optionTitles: ["Button", "Button Green", "Button Link", "Link"],
    },
    hasIcon: {
        type: ControlType.Boolean,
        title: "Has Icon",
        defaultValue: false,
    },
    iconSide: {
        type: ControlType.Boolean,
        title: "Icon Direction",
        defaultValue: false,
        enabledTitle: "Backward",
        disabledTitle: "Forward",
        hidden: props => !props.hasIcon,
    },
    href: {
        type: ControlType.String,
        title: "Link",
        hidden: props => !props.buttonType.match(/link/g),
    },
})
