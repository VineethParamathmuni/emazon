import { useDispatch } from 'react-redux';
import { addToList } from './reducer';
import { useEffectAfterMount } from '../components/useEffectAfterMount'


function EmazonStateFiller({count}) {
    const dispatch = useDispatch();

    async function fillData() {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`)
        const data = await response.json();               
        if(data && data.products && data.products.length){
            dispatch(addToList(data.products))
        }
    }

    useEffectAfterMount(() => {
        fillData();
    }, [count])    
}

export default EmazonStateFiller