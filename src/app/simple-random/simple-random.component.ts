import { Component, OnInit } from '@angular/core';
import { DEFAULT_POP_SIZE, DEFAULT_APPLE_POP, DEFAULT_ORANGE_POP } from './simple-random-constants';

@Component({
  selector: 'app-simple-random',
  templateUrl: './simple-random.component.html',
  styleUrls: ['./simple-random.component.css']
})
export class SimpleRandomComponent implements OnInit {
  populationSize: number;
  applePopulation: number;
  applePercent: number;
  orangePopulation: number;
  orangePercent: number;
  population: number[];
  proportionFrom20Samples: number[] = [];
  percentFrom20Samples: number[] = [];
  proportionFrom100Samples: number[] = [];
  percentFrom100Samples: number[] = [];
  proportionFrom1000Samples: number[] = [];
  percentFrom1000Samples: number[] = [];

  static shuffleArray(array: number[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  static getSamples(population: number[], sampleSize: number): number[] {
    const samples = [];
    for (let i = 0; i < population.length; i++) {
      samples.push(i);
    }

    SimpleRandomComponent.shuffleArray(samples);
    return samples.slice(0, sampleSize);
  }
  static getSampleProportions(population: number[], sampleSize: number): number[] {
    const samples = SimpleRandomComponent.getSamples(population, sampleSize);
    let numApples = 0;
    let numOranges = 0;
    for (const sampleId of samples) {
      if (population[sampleId] === 0) {
        numApples++;
      } else if (population[sampleId] === 1) {
        numOranges++;
      }
    }
    return [numApples, numOranges];
  }

  constructor() { }

  ngOnInit() {
    this.populationSize = DEFAULT_POP_SIZE;
    this.applePopulation = Math.round(DEFAULT_POP_SIZE * DEFAULT_APPLE_POP);
    this.applePercent = Math.round(DEFAULT_APPLE_POP * 100);
    this.orangePopulation = Math.round(DEFAULT_POP_SIZE * DEFAULT_ORANGE_POP);
    this.orangePercent = Math.round(DEFAULT_ORANGE_POP * 100);
    this.population = this.getPopulation();
  }

  onGet20Samples(): void {
    this.proportionFrom20Samples = SimpleRandomComponent.getSampleProportions(this.population, 20);
    this.percentFrom20Samples[0] = Math.round(100 * (this.proportionFrom20Samples[0] / 20.0));
    this.percentFrom20Samples[1] = Math.round(100 * (this.proportionFrom20Samples[1] / 20.0));
  }

  onGet100Samples(): void {
    this.proportionFrom100Samples = SimpleRandomComponent.getSampleProportions(this.population, 100);
    this.percentFrom100Samples[0] = Math.round(100 * (this.proportionFrom100Samples[0] / 100.0));
    this.percentFrom100Samples[1] = Math.round(100 * (this.proportionFrom100Samples[1] / 100.0));
  }

  onGet1000Samples(): void {
    this.proportionFrom1000Samples = SimpleRandomComponent.getSampleProportions(this.population, 1000);
    this.percentFrom1000Samples[0] = Math.round(100 * (this.proportionFrom1000Samples[0] / 1000.0));
    this.percentFrom1000Samples[1] = Math.round(100 * (this.proportionFrom1000Samples[1] / 1000.0));
  }

  getPopulation(): [number] {
    const numApples = Math.round(DEFAULT_POP_SIZE * DEFAULT_APPLE_POP);
    const numOranges = Math.round(DEFAULT_POP_SIZE * DEFAULT_ORANGE_POP);

    const apples = Array.apply(null, Array(numApples)).map((_, i) => 0);
    const oranges = Array.apply(null, Array(numOranges)).map((_, i) => 1);
    const applesAndOranges = apples.concat(oranges);
    SimpleRandomComponent.shuffleArray(applesAndOranges);

    return applesAndOranges;
  }
}
