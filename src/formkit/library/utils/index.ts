import outerElement from '../core/outerElement'
import wrapperElement from '../core/wrapperElement'
import innerElement from '../core/innerElement'
import label from '../core/label'
import helpText from '../core/helpText'
import errorList from '../core/errorList'

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
                    showLabel ? label : {},
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
