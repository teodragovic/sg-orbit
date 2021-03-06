import { Children, forwardRef } from "react";
import { Inline } from "../../layout";
import { SIZE, augmentElement, mergeProps, omitProps } from "../../shared";
import { any, bool, elementType, oneOf, oneOfType, string } from "prop-types";
import { useFormContext } from "../../form";

const GAP_BY_SIZE = {
    [SIZE.small]: 3,
    [SIZE.medium]: 4,
    [SIZE.large]: 5
};

const propTypes = {
    /**
     * Fields size.
     */
    size: oneOf(["small", "medium", "large"]),
    /**
     * Whether or not the field take up the width of its container.
     */
    fluid: bool,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

export function InnerFieldGroup(props) {
    const formProps = useFormContext();

    const {
        size,
        fluid,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        omitProps(formProps, ["isInForm", "disabled"])
    );

    return (
        <Inline
            {...rest}
            fluid={fluid}
            gap={GAP_BY_SIZE[size || SIZE.medium]}
            align="start"
            ref={forwardedRef}
        >
            {Children.map(children, x => {
                return augmentElement(x, {
                    size,
                    fluid
                });
            })}
        </Inline>
    );
}

InnerFieldGroup.propTypes = propTypes;

export const FieldGroup = forwardRef((props, ref) => (
    <InnerFieldGroup {...props} forwardedRef={ref} />
));
