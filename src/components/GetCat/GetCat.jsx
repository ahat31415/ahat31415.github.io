import React, { useEffect } from "react";
import './GetCat.scss'

export function GetCat(props) {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const [isRefreshing, setIsRefreshing] = props.refreshing;

    const onCheckBoxUpdating = (checkBoxType = 'enabled') => {
        if (checkBoxType === 'enabled') {
            setIsEnabled(c => !c);
        } else {
            setIsRefreshing(c => !c);
        }
    }
    useEffect(() => {
        let timer;
        if (isRefreshing && isEnabled) {
            timer = setInterval(() => props.catFetcher(), 1000);
        }
        return () => {
            clearInterval(timer);
        }
    }, [isRefreshing, isEnabled]);
    return (
        <div className="ManagingBox">
            <div>
                <input type="checkbox" name="enabled" checked={ isEnabled }
                       onChange={ () => {
                           onCheckBoxUpdating('enabled')
                       } }/>
                <label htmlFor="enabled">Enabled</label>
            </div>
            <div>
                <input type="checkbox" name="refresh" checked={ isRefreshing }
                       onChange={ () => {
                           onCheckBoxUpdating('refresh')
                       } }/>
                <label htmlFor="refresh">Refresh every 5 seconds</label>
            </div>
            <button onClick={ isEnabled ? props.catFetcher : () => {
            } } className={ isEnabled ? '' : 'disabledBtn' }>
                Get cat
            </button>

        </div>
    )
}
