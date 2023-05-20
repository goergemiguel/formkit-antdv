import outerElement from '../core/outerElement'
import wrapperElement from '../core/wrapperElement'
import innerElement from '../core/innerElement'
import labelText from '../core/labelText'
import helpText from '../core/helpText'
import errorList from '../core/errorList'
import makeGridElement from '../core/gridElement'

export interface IOptions {
    showLabel?: boolean
    showHelpText?: boolean
    showErrorList?: boolean
}

export const withDefaultFormKitSchema = (
    wrapperChildren: any[] | Object,
    options?: IOptions
) => {
    const showLabel = options?.showLabel ?? true
    const showHelpText = options?.showHelpText ?? true
    const showErrorList = options?.showErrorList ?? true

    return {
        ...outerElement,
        children: [
            {
                ...wrapperElement,
                children: [
                    showLabel ? labelText : {},
                    {
                        ...innerElement,
                        children: wrapperChildren,
                    },
                    showHelpText ? helpText : {},
                    showErrorList ? errorList : {},
                ],
            },
        ],
    }
}

export const withGrid = (
    wrapperChildren: any[] | Object,
    attrs: Object | null
) => {
    return makeGridElement(wrapperChildren, attrs)
}
