import trainColors from './data/train.json' assert { type: 'json' };
import { NeuralNetwork } from 'brain.js';
import colors from 'colors';




const trainedNeuronal = new NeuralNetwork();

trainedNeuronal.train(trainColors);

const result = trainedNeuronal.run({ r: 0.16, g: 0.09, b: 0.2 })
const result2 = trainedNeuronal.run({ r: 0.9, g: 0.9, b: 0.9 })
const result3 = trainedNeuronal.run({ r: 0.03, g: 0.5, b: 0.5 })



console.log(`It's a color contrast ${colors.green(result.black > result.white ? 'black' : 'white')}`);
console.log(`It's a color contrast ${colors.green(result2.black > result2.white ? 'black' : 'white')}`);
console.log(`It's a color contrast ${colors.red(result3.black > result3.white ? 'black' : 'white')}`);

