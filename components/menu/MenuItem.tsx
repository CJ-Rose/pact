import React, { FC } from "react"

type MenuItemProps = {
    content: string
}

const MenuItem: FC<MenuItemProps> = ({content}) => {
    return (
        <div className="bg-brand-orange border-2 border-brand-orange2 rounded-lg h-[200px] w-[250px]">
            {content}
        </div>
    )
}

export default MenuItem