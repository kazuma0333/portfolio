import "../css/organisms-css/toggle-button.css"

export const ToggleButton = () => {
    const onClick1 = () => {
        alert("ダークモード機能は現在実装中です");
    }
    return(
        <>
        <div className="toggle">
            <div class="toggle_button">
            <input id="toggle" class="toggle_input" type='checkbox' onClick={onClick1} />
            <label for="toggle" class="toggle_label" />
            </div>
        </div>
        </>
    )
}