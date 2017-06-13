import * as React from 'react';

interface ReactWidgetsCommonProps<C> extends React.Props<C> {
    /**
     * Disable the widget, if an Array of values is passed in only those values will be disabled.
     * @default false
     */
    disabled?: boolean | any[];
    /**
     * Place the widget in a read-only mode, If an Array of values is passed in only those
     * values will be read-only.
     * @default false
     */
    readOnly?: boolean | any[];
    /**
     * Mark whether the SelectList should render right-to-left. This property can also be
     * implicitly passed to the widget through a childContext prop (isRtl) this allows higher
     * level application components to specify the direction.
     * @default false
     */
    isRtl?: boolean;
    /**
     * Any other props you wish to pass down to the widgets
     */
    [customProp: string]: any;
}

interface ReactWidgetsCommonDropdownProps<C> extends ReactWidgetsCommonProps<C> {
    /**
     * Show "drop up" not "drop down"
     * @default false
     */
    dropUp?: boolean;
}
