import React, { FC, useState } from "react"
import MenuItem from "./MenuItem"

const Menu: FC = () => {
    const [Selected, setSelected] = useState(1)
    const handleSetSelected = (Id: number) => (Selected === Id ? setSelected(0) : setSelected(Id))

    return (
        <div className="flex justify-between p-5 pl-10 text-brand-orange">
            {Selected === 1 ? (
                <div>
                    <div className="mb-16 text-red-500">about</div>
                    {/* <div className="">
                        <MenuItem content="this is the about content"/>
                    </div> */}
                </div>      
            ) : (
                <div>
                    <div onClick={() => handleSetSelected(1)}>about</div>
                </div>
            )}
            
            {Selected === 2 ? (
                <div className="text-red-500">create a pact</div>
            ) : (
                <div onClick={() => handleSetSelected(2)}>create a pact</div>
            )}

            {Selected === 3 ? (
                <div className="text-red-500">join a pact</div>
            ) : (
                <div onClick={() => handleSetSelected(3)}>join a pact</div>
            )}
        </div>
    )
}

export default Menu