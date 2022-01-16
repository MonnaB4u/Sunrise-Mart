
import Fruits from '../Data/Fruits'
import grocery from '../Data/grocery'
import Vegetable from '../Data/Vegetable'
import realData from './realData';
import img from './img';

const FakeData = [ ...Fruits,...Vegetable, ...realData, ...img ];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(FakeData);

export default FakeData;
