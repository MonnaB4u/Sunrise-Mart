import allProduct from '../Data/allProduct'
import Fruits from '../Data/Fruits'
import grocery from '../Data/grocery'
import Vegetable from '../Data/Vegetable'
import realData from './realData';

const FakeData = [...allProduct, ...Fruits,...Vegetable, ...realData ];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(FakeData);

export default FakeData;
