import React from "react"

class AppInner extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return <div>Inner Component</div>
    }
    componentWillUnmount()
    {
        console.log("unmounted")
    }
}
export default AppInner