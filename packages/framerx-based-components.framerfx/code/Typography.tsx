import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

// Common styles
export const commonStyles = props => css`
    font-family: ${props.fontFamily || "NBS Medium"};
    font-size: ${props.fontSize || "18px"};
    line-height: ${props.lineHeight || "1.1"};
    color: ${props.color || "#13131F"};
    @media screen and (min-width: 768px) {
        font-size:  ${props.fontSizeLg || "20px"};
    }
`

const TypeH1 = styled.h1`
    font-weight: bold;
    ${commonStyles}
`
const TypeH2 = styled.h2`
    font-weight: bold;
    ${commonStyles}
`
const TypeH3 = styled.h3`
    font-weight: bold;
    ${commonStyles}
`
const TypeH4 = styled.h4`
    font-weight: bold;
    ${commonStyles}
`
const TypeLargePara = styled.p`
    font-weight: normal;
    ${commonStyles}
`
const TypeSmallPara = styled.p`
    font-weight: normal;
    ${commonStyles}
`
const TypePara = styled.p`
    font-weight: normal;
    ${commonStyles}
`
export function Typography(props) {
    const { type, text, children } = props
    switch (type) {
        case "h1":
            return (
                <TypeH1 fontSize="36px" fontSizeLg="52px" {...props}>
                    {text}
                    {children}
                </TypeH1>
            )
        case "h2":
            return (
                <TypeH2 fontSize="30px" fontSizeLg="40px" {...props}>
                    {text}
                    {children}
                </TypeH2>
            )
        case "h3":
            return (
                <TypeH3 fontSize="24px" fontSizeLg="28px" {...props}>
                    {text}
                    {children}
                </TypeH3>
            )
        case "h4":
            return (
                <TypeH4 fontSize="20px" fontSizeLg="22px" {...props}>
                    {text}
                    {children}
                </TypeH4>
            )
        case "lead-para":
            return (
                <TypeLargePara fontSize="20px" fontSizeLg="22px" {...props}>
                    {text}
                    {children}
                </TypeLargePara>
            )
        case "small-para":
            return (
                <TypeSmallPara fontSize="15px" fontSizeLg="16px" {...props}>
                    {text}
                    {children}
                </TypeSmallPara>
            )
        case "para":
        default:
            return (
                <TypePara fontSize="18px" fontSizeLg="20px" {...props}>
                    {text}
                    {children}
                </TypePara>
            )
    }
}

// The default properties
Typography.defaultProps = {
    text: "Hello World!",
    type: "para",
    color: "#13131F",
}

// FramerX Controls to be used by designers
addPropertyControls(Typography, {
    text: { type: ControlType.String, title: "Text" },
    type: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "para",
        options: ["h1", "h2", "h3", "h4", "lead-para", "small-para", "para"],
        optionTitles: [
            "H1 Headline",
            "H2 Headline",
            "H3 Headline",
            "H4 Headline/ Labels",
            "Lead paragraph",
            "Small paragraph",
            "Paragraph",
        ],
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#13131F",
    },
})
