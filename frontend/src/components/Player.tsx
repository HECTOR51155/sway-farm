// import { useState } from "react";
import { ContractAbi } from "../contracts";
import { PlayerOutput } from "../contracts/ContractAbi";
import ShowCoins from "./ShowCoins";
import ShowSeeds from "./ShowSeeds";
import ShowPlantedSeeds from "./ShowPlantedSeeds";
import ShowItems from "./ShowItems";
import BuySeeds from "./BuySeeds";
import PlantSeeds from "./PlantSeeds";
import Harvest from "./Harvest";
import SellItem from "./SellItem";
import LevelUp from "./LevelUp";

interface PlayerProps {
    contract: ContractAbi | null;
    player: PlayerOutput
}

export default function Player({ contract, player }: PlayerProps) {
    return (
        <div className="game-container">
            <div className="player-container">
                <img src="pixel-bunny.png" className="bunny" alt="bunny" />
                <div className="player-info-container">
                    <p>Farming Skill Level: {parseFloat(player.farming_skill.format()) * 1_000_000_000}</p>
                    <p>Total Value Sold: {parseInt(player.total_value_sold.format())}</p>
                </div>
            </div>
            <div className="farm-container">
                <ShowCoins/>
                <ShowSeeds contract={contract}/>
                <BuySeeds contract={contract} />
                <PlantSeeds contract={contract} />
                <ShowPlantedSeeds contract={contract}/>
                <Harvest contract={contract} />
                <ShowItems contract={contract}/>
                <SellItem contract={contract} />
                <LevelUp contract={contract}/>
            </div>

        </div>
    )
}