import { Component, OnInit } from '@angular/core';
import { DEFAULT_POP_SIZE, DEFAULT_APPLE_POP, DEFAULT_ORANGE_POP } from './stratified-random-constants';
import { SUBGROUP_POP_SIZES, SUBGROUP_PROPORTIONS, TRUCK_NAMES} from './stratified-random-constants';
import {SimpleRandomComponent} from '../simple-random/simple-random.component';

@Component({
  selector: 'app-stratified-random',
  templateUrl: './stratified-random.component.html',
  styleUrls: ['../simple-random/simple-random.component.css']
})
export class StratifiedRandomComponent implements OnInit {
  truckNames: string[] = TRUCK_NAMES;
  populationSize: number = DEFAULT_POP_SIZE;
  applePopSize: number = DEFAULT_APPLE_POP;
  orangePopSize: number = DEFAULT_ORANGE_POP;
  populationInSubgroups: number[][];
  subgroupSizes: number[] = SUBGROUP_POP_SIZES;
  subgroupRatios: number[] = SUBGROUP_POP_SIZES;
  subgroupContentsProportions: number[][] = SUBGROUP_PROPORTIONS;
  subgroupContentsRatios: number[][];
  // Truck A only samples
  truckASamples: number[] = [];
  truckAPercents: number[] = [];
  // Truck B only samples
  truckBSamples: number[] = [];
  truckBPercents: number[] = [];
  // Truck C only samples
  truckCSamples: number[] = [];
  truckCPercents: number[] = [];
  // Uniform samples
  uniformSamples: number[][] = [[0, 0], [0, 0], [0, 0]];
  uniformSamplesTotal: number[] = [];
  uniformPercents: number[] = [];
  // Stratified samples
  stratifiedSamples: number[][] = [[0, 0], [0, 0], [0, 0]];
  stratifiedSamplesTotal: number[] = [];
  stratifiedPercents: number[] = [];

  static getSubgroupRatios(subgroupSizes: number[], populationSize: number) {
    const subgroupRatios: number[] = [];
    for (let i = 0; i < subgroupSizes.length; i++) {
      subgroupRatios[i] = subgroupSizes[i] / populationSize;
    }
    return subgroupRatios;
  }
  static getSubgroupProportionRatios(subgroupProportions: number[][], subgroupSizes: number[]): number[][] {
    const subgroupProportionRatios: number[][] = [];
    for (let i = 0; i < subgroupSizes.length; i++) {
      subgroupProportionRatios[i] = [
        subgroupProportions[i][0] / subgroupSizes[i],
        subgroupProportions[i][1] / subgroupSizes[i]
      ];
    }
    return subgroupProportionRatios;
  }
  static getPopulationInSubgroups(subgroupProportions: number[][]): number[][] {
    const population: number[][] = [];
    for (const subgroup of subgroupProportions) {
      const numApples = subgroup[0];
      const numOranges = subgroup[1];
      const apples = Array.apply(null, Array(numApples)).map((_, i) => 0);
      const oranges = Array.apply(null, Array(numOranges)).map((_, i) => 1);
      const applesAndOranges = apples.concat(oranges);
      SimpleRandomComponent.shuffleArray(applesAndOranges);
      population.push(applesAndOranges);
    }
    return population;
  }

  constructor() { }

  ngOnInit() {
    this.subgroupRatios = StratifiedRandomComponent.getSubgroupRatios(
        this.subgroupSizes, this.populationSize);
    this.subgroupContentsRatios = StratifiedRandomComponent.getSubgroupProportionRatios(
        this.subgroupContentsProportions, this.subgroupSizes);
    this.populationInSubgroups = StratifiedRandomComponent.getPopulationInSubgroups(this.subgroupContentsProportions);
  }

  onSampleTruckAOnly(): void {
    const truckAContents: number[] = this.populationInSubgroups[0];
    this.truckASamples = SimpleRandomComponent.getSampleProportions(truckAContents, 1000);
    this.truckAPercents[0] = Math.round(100 * (this.truckASamples[0] / 1000.0));
    this.truckAPercents[1] = Math.round(100 * (this.truckASamples[1] / 1000.0));
  }

  onSampleTruckBOnly(): void {
    const truckBContents: number[] = this.populationInSubgroups[1];
    this.truckBSamples = SimpleRandomComponent.getSampleProportions(truckBContents, 1000);
    this.truckBPercents[0] = Math.round(100 * (this.truckBSamples[0] / 1000.0));
    this.truckBPercents[1] = Math.round(100 * (this.truckBSamples[1] / 1000.0));
  }

  onSampleTruckCOnly(): void {
    const truckCContents: number[] = this.populationInSubgroups[2];
    this.truckCSamples = SimpleRandomComponent.getSampleProportions(truckCContents, 1000);
    this.truckCPercents[0] = Math.round(100 * (this.truckCSamples[0] / 1000.0));
    this.truckCPercents[1] = Math.round(100 * (this.truckCSamples[1] / 1000.0));
  }

  onSampleUniformly(): void {
    this.uniformSamples[0] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[0], 334);
    this.uniformSamples[1] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[1], 333);
    this.uniformSamples[2] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[2], 333);
    this.uniformSamplesTotal[0] = this.uniformSamples[0][0] + this.uniformSamples[1][0] + this.uniformSamples[2][0];
    this.uniformSamplesTotal[1] = this.uniformSamples[0][1] + this.uniformSamples[1][1] + this.uniformSamples[2][1];
    this.uniformPercents[0] = Math.round(100 * (this.uniformSamplesTotal[0] / 1000.0));
    this.uniformPercents[1] = Math.round(100 * (this.uniformSamplesTotal[1] / 1000.0));
  }

  onSampleProportionally(): void {
    this.stratifiedSamples[0] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[0], 100);
    this.stratifiedSamples[1] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[1], 600);
    this.stratifiedSamples[2] = SimpleRandomComponent.getSampleProportions(this.populationInSubgroups[2], 300);
    this.stratifiedSamplesTotal[0] = this.stratifiedSamples[0][0] + this.stratifiedSamples[1][0] + this.stratifiedSamples[2][0];
    this.stratifiedSamplesTotal[1] = this.stratifiedSamples[0][1] + this.stratifiedSamples[1][1] + this.stratifiedSamples[2][1];
    this.stratifiedPercents[0] = Math.round(100 * (this.stratifiedSamplesTotal[0] / 1000.0));
    this.stratifiedPercents[1] = Math.round(100 * (this.stratifiedSamplesTotal[1] / 1000.0));
  }

}
