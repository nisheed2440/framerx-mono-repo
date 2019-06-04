import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "nbs-fonts/lib/index.less";

export const commonIconStyles = props => css `
  position: absolute;
  font-size: 35px;
`;
const ButtonIconForward = styled.i`
  ${commonIconStyles}
  top: 0px;
  right: -12px;
`;
const ButtonIconBackward = styled.i`
  ${commonIconStyles}
  top: 0px;
  left: -12px;
  transform: rotate(180deg);
`;

export const commonButtonStyles = props => css `
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
  font-family: "nbs-medium";
  font-weight: bold;
  position: relative;
  background-color: ${props.backgroundColor || "#004A8F"};
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 0px 4px ${props.shadowColor || "#80BCE4"};
  }
  &:disabled {
    box-shadow: none;
  }
`;
// The link button as styled a tag
const LinkButton = styled.a`
  ${commonButtonStyles}
  text-decoration: none;
`;
// The  button as styled button tag
const ButtonTag = styled.button`
  ${commonButtonStyles}
`;

const LinkText = styled.span`
  display: inline-block;
  position: relative;
  padding-right: ${props =>
    props.isButton && props.hasIcon ? (props.iconSide ? 0 : "16px") : 0};
  padding-left: ${props =>
    props.isButton && props.hasIcon ? (props.iconSide ? "16px" : 0) : 0};
`;

const LinkTag = styled.a`
  display: inline-block;
  font-family: "NBS Medium";
  font-weight: bold;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  color: #004a8f;
  text-decoration: none;
  position: relative;
  color: #004a8f;
  padding-right: ${props =>
    props.hasIcon ? (props.iconSide ? 0 : "16px") : 0};
  padding-left: ${props => (props.hasIcon ? (props.iconSide ? "16px" : 0) : 0)};
  span {
    border-bottom: 1px solid #004a8f;
  }
  &:hover {
    color: #0078c8;
    span {
      border-bottom-color: #0078c8;
    }
  }
`;

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export default function Button(props) {
  const { text, buttonType, hasIcon, iconSide } = props;
  switch (buttonType) {
    case "link":
      return (
        <LinkTag {...props}>
          {hasIcon && iconSide && (
            <ButtonIconBackward className="icon-nbs icon-nbs-dropdownright" />
          )}
          <LinkText>{text}</LinkText>
          {hasIcon && !iconSide && (
            <ButtonIconForward className="icon-nbs icon-nbs-dropdownright" />
          )}
        </LinkTag>
      );
    case "button-link":
      return (
        <LinkButton {...props}>
          <LinkText {...props} isButton={true}>
            {hasIcon && iconSide && (
              <ButtonIconBackward className="icon-nbs icon-nbs-dropdownright" />
            )}
            {text}
            {hasIcon && !iconSide && (
              <ButtonIconForward className="icon-nbs icon-nbs-dropdownright" />
            )}
          </LinkText>
        </LinkButton>
      );
    case "button-green":
      return (
        <ButtonTag
          {...props}
          borderColor="#3B8634"
          backgroundColor="#3B8634"
          shadowColor="#93D27F"
        >
          <LinkText {...props} isButton={true}>
            {hasIcon && iconSide && (
              <ButtonIconBackward className="icon-nbs icon-nbs-dropdownright" />
            )}
            {text}
            {hasIcon && !iconSide && (
              <ButtonIconForward className="icon-nbs icon-nbs-dropdownright" />
            )}
          </LinkText>
        </ButtonTag>
      );
    case "button":
    default:
      return (
        <ButtonTag {...props} color="#004A8F" backgroundColor="#FFFFFF">
          <LinkText {...props} isButton={true}>
            {hasIcon && iconSide && (
              <ButtonIconBackward className="icon-nbs icon-nbs-dropdownright" />
            )}
            {text}
            {hasIcon && !iconSide && (
              <ButtonIconForward className="icon-nbs icon-nbs-dropdownright" />
            )}
          </LinkText>
        </ButtonTag>
      );
  }
}

// The default properties
Button.defaultProps = {
  text: "Hello World!",
  isBlock: false,
  buttonType: "button",
  href: "",
  hasIcon: true,
  iconSide: false,
};
