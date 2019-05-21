import React from 'react';
import { GiRunningNinja, GiArcher, GiPikeman, GiRead } from 'react-icons/gi';

const characters = {
   Ninja: {
    name: 'Ninja',
    icon: <GiRunningNinja />,
    hp: 100,
    sp: 100,
    atk: 5,
    def: 2,
    hand1: '',
    hand2: '',
    head: '',
    chest: '',
    legs: '',
    feet: '',
    selected: 1
  },
  Archer: {
    name: 'Archer',
    icon: <GiArcher />,
    hp: 100,
    sp: 100,
    atk: 5,
    def: 2,
    hand1: '',
    hand2: '',
    head: '',
    chest: '',
    legs: '',
    feet: '',
    selected: 1
  },
  Pikeman: {
    name: 'Pikeman',
    icon: <GiPikeman />,
    hp: 100,
    sp: 100,
    atk: 5,
    def: 2,
    hand1: '',
    hand2: '',
    head: '',
    chest: '',
    legs: '',
    feet: '',
    selected: 1
  },
  Mage: {
    name: 'Mage',
    icon: <GiRead />,
    hp: 100,
    sp: 100,
    atk: 5,
    def: 2,
    hand1: '',
    hand2: '',
    head: '',
    chest: '',
    legs: '',
    feet: '',
    selected: 1
  }
};

export default characters;