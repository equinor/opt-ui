/* eslint-disable @typescript-eslint/no-explicit-any -- Allowing it for this function */
/* eslint-disable @typescript-eslint/ban-types -- Allowing it for this function */
import {
  forwardRef as forwardReactRef,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ExoticComponent,
  type ForwardRefRenderFunction,
  type PropsWithoutRef,
  type ValidationMap,
  type WeakValidationMap,
} from "react";

type As = ElementType;

type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};

type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<
  Target,
  "transition" | "as" | "color" | "translate" | OmitAdditionalProps
> & {
  htmlTranslate?: "yes" | "no" | undefined;
};

// ! This type must be called "ForwardRefExoticComponent" or storybook will not autogenerate the argTypes
type ForwardRefExoticComponent<
  ET extends As,
  P extends object = {},
> = ExoticComponent<P> & {
  <AsComponent extends As = ET>(
    props: MergeWithAsProp<
      ComponentProps<ET>,
      ComponentProps<AsComponent>,
      P,
      AsComponent
    >
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<P>;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  id?: string;
};

type MergeWithAsProp<
  CP extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As,
> = (
  | RightJoinProps<CP, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

/**
 * Creates a forward ref for a React functional component that adds the "as" property.
 *
 * @typeParam P - The Component props type.
 * @typeParam ET - The React.ElementType.
 *
 * @param component - The functional component.
 * @returns Forwarded React component.
 */
export function forwardRefWithAs<P extends object, ET extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<ET>, P> & {
      as?: As;
    }
  >
) {
  return forwardReactRef(component) as ForwardRefExoticComponent<
    ET,
    PropsWithoutRef<P>
  >;
}
