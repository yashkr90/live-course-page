"use client"

import React from 'react'
import type { NextPage } from "next";

import { useState } from 'react';

const navitems = ['overview', 'learn with live classes', 'revise with recordings', 'practice mock tests', 'study with IL books'];

const FeatureNav: NextPage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('overview');

  return (
    <div className="flex w-full justify-center items-center h-11 gap-8 overflow-auto whitespace-nowrap">
      {navitems.map((item) => {
        const isSelected = item === selectedNavItem;

        return (
          <div
            key={item}
            className={`h-10 flex flex-row items-center justify-center py-2 px-3 box-border text-royalblue ${isSelected ? 'selected' : ''}`}
            onClick={() => setSelectedNavItem(item)}
          >
            <div className={`relative leading-[24px] lowercase font-semibold`}>
              {item}
              {isSelected && <div className="mt-[4px] border-b-royalblue border-2 border-solid "></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureNav;
