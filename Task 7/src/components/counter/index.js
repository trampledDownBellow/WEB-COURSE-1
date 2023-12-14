import { useContext, useState } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';
import GoodsComponent from '../goods';

const CounterComponent = (props) => {
  const { selectedGoods, addGoods } = useContext(GoodsContext);
  const goods = props.data
  const [data] = useState(goods);
  let sortedData = [...data];
  sortedData = sortedData.sort((a, b) => b.cost - a.cost);
  let limit = 40;
  let newArray = [];

  const autoDetectClick = () => {
    let currentSum = 0;
    let minSum = Number.MAX_SAFE_INTEGER;
    let bestCombination = [];
    const tempArray = sortedData.map(item => item);

    const findCombination = (index, sum, combination) => {
      if (sum >= 40 && sum < minSum) {
        minSum = sum;
        bestCombination = [...combination];
      }
      if (sum >= 40) {
        return;
      }
      for (let i = index; i < tempArray.length; i++) {
        if (sum + tempArray[i].cost <= limit) {
          combination.push(tempArray[i]);
          findCombination(i + 1, sum + tempArray[i].cost, combination);
          combination.pop();
        }
      }
    };

    findCombination(0, currentSum, []);

    bestCombination.forEach(item => addGoods(item));
  };


  let sum = selectedGoods.reduce((acc, cur) => {
    return acc + cur.cost;
  }, 0);

  return (
    <div className='cost-wrapper'>
      <div>{sum}/40</div>
      <div className='auto-detect' onClick={autoDetectClick}>auto-detect</div>
      <div className='selected-goods'>
        {
          selectedGoods
            .map(el => <GoodsComponent {...el} key={'selected' + el.id} />)
        }
      </div>
    </div>
  );
};

export default CounterComponent;
