import { FieldMessage, getValidationProps, useFieldMessage } from "./FieldMessage";
import { any, elementType, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { mergeProps } from "../../shared";

const propTypes = {
    /**
     * A message can vary in size.
     */
    size: oneOf(["small", "medium", "large"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

export function InnerHelpMessage(props) {
    const { isInField, validationState, ...messageProps } = useFieldMessage();
    const { isHelp } = getValidationProps(validationState);

    const {
        forwardedRef,
        children,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isHelp) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            variant="neutral"
            ref={forwardedRef}
        >
            {children}
        </FieldMessage>
    );
}

InnerHelpMessage.propTypes = propTypes;

export const HelpMessage = forwardRef((props, ref) => (
    <InnerHelpMessage {...props} forwardedRef={ref} />
));
