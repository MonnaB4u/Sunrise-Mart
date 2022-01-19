import Fruits from '../Data/Fruits'
import img from '../Data/realData'
import Vegetable from '../Data/Vegetable'
import realData from '../Data/realData'

const FakeData2 = [...Fruits,...Vegetable,...img, ...realData];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(FakeData2);

export default FakeData2;
