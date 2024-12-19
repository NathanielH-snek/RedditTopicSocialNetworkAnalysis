import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { Cosmograph, CosmographProvider } from '@cosmograph/react';
import * as React from 'react';

type Link = {
  source: string;
  target: string;
  weight: number;
};

type Node = {
  id: string;
  category: string;
  subscribercount: string;
  numberofmods: number;
};


export const FullGraph = ({ nodes, links}) => {
  return (
    <Cosmograph nodes={nodes} links={links} />
  )
}