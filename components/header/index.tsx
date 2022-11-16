import React, { FC } from "react"
import { TbHeartHandshake } from "react-icons/tb"
import Wallet from "./Wallet"

const Header: FC = () => {
    return (
        <div>
            <div className="flex justify-between pl-4 pr-2 pt-3">
                <div className="flex">
                    <div className="pt-3 pr-2">
                        <TbHeartHandshake color="#b37f3b" fontSize="2.3em"/>
                    </div>
                    <div className="text-5xl text-brand-orange">pact</div>
                </div>               
                <Wallet />
            </div>
            <div className="bg-brand-orange2 h-[4px] w-full ml-9"></div>
        </div>
    )
}

export default Header