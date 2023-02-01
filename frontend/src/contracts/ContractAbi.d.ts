/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.29.1
  Forc version: 0.32.2
  Fuel-Core version: 0.15.1
*/

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from 'fuels';

import type { Enum } from "./common";

export type FoodTypeInput = Enum<{ tomatoes: [] }>;
export type FoodTypeOutput = FoodTypeInput;
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export type InvalidErrorInput = Enum<{ IncorrectAssetId: [], NotEnoughTokens: BigNumberish, SkillAlreadyMax: [], NotEnoughExp: [], NotEnoughSeeds: BigNumberish, CantHarvest: [], TooEarly: [] }>;
export type InvalidErrorOutput = Enum<{ IncorrectAssetId: [], NotEnoughTokens: BN, SkillAlreadyMax: [], NotEnoughExp: [], NotEnoughSeeds: BN, CantHarvest: [], TooEarly: [] }>;

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type PlayerInput = { farming_skill: BigNumberish, total_value_sold: BigNumberish };
export type PlayerOutput = { farming_skill: BN, total_value_sold: BN };

interface ContractAbiInterface extends Interface {
  functions: {
    buy_seeds: FunctionFragment;
    get_item_amount: FunctionFragment;
    get_planted_seeds_length: FunctionFragment;
    get_player: FunctionFragment;
    get_seed_amount: FunctionFragment;
    harvest: FunctionFragment;
    level_up: FunctionFragment;
    new_player: FunctionFragment;
    plant_seeds: FunctionFragment;
    sell_item: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'buy_seeds', values: [FoodTypeInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_item_amount', values: [IdentityInput, FoodTypeInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_planted_seeds_length', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_player', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_seed_amount', values: [IdentityInput, FoodTypeInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'harvest', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'level_up', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'new_player', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'plant_seeds', values: [FoodTypeInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'sell_item', values: [FoodTypeInput, BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'buy_seeds', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_item_amount', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_planted_seeds_length', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_player', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_seed_amount', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'harvest', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'level_up', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'new_player', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'plant_seeds', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'sell_item', data: BytesLike): DecodedValue;
}

export class ContractAbi extends Contract {
  interface: ContractAbiInterface;
  functions: {
    buy_seeds: InvokeFunction<[food_type: FoodTypeInput, amount: BigNumberish], void>;
    get_item_amount: InvokeFunction<[id: IdentityInput, item: FoodTypeInput], BN>;
    get_planted_seeds_length: InvokeFunction<[id: IdentityInput], BN>;
    get_player: InvokeFunction<[id: IdentityInput], PlayerOutput>;
    get_seed_amount: InvokeFunction<[id: IdentityInput, item: FoodTypeInput], BN>;
    harvest: InvokeFunction<[index: BigNumberish], void>;
    level_up: InvokeFunction<[], void>;
    new_player: InvokeFunction<[], void>;
    plant_seeds: InvokeFunction<[food_type: FoodTypeInput, amount: BigNumberish], void>;
    sell_item: InvokeFunction<[food_type: FoodTypeInput, amount: BigNumberish], void>;
  };
}
