import "./Form.css";

import { FormContext } from "./FormContext";
import { any, bool, elementType, oneOf, oneOfType, string } from "prop-types";
import { cssModule, mergeClasses } from "../../shared";
import { forwardRef } from "react";

const propTypes = {
    /**
     * Whether or not the form take up the width of its container.
     */
    fluid: bool,
    /**
     * A form can vary in size.
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

export function InnerForm({
    fluid,
    size,
    disabled,
    as: ElementType = "form",
    className,
    children,
    forwardedRef,
    ...rest
}) {
    return (
        <ElementType
            {...rest}
            className={mergeClasses(
                cssModule(
                    "o-ui-form",
                    fluid && "fluid"
                ),
                className
            )}
            ref={forwardedRef}
        >
            <FormContext.Provider
                value={{
                    fluid,
                    size,
                    disabled
                }}
            >
                {children}
            </FormContext.Provider>
        </ElementType>
    );
}

InnerForm.propTypes = propTypes;

export const Form = forwardRef((props, ref) => (
    <InnerForm {...props} forwardedRef={ref} />
));
