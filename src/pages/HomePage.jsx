import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby } from '../actions/hobby'


const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

const HomePage = (props) => {

    /**
     * hobby : hobbyReducer
     */

    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch();

    console.log('Hobby list: ', hobbyList);

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newId = randomNumber()
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>Redux Hooks - Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    )
}

export default HomePage;

HomePage.propTypes = {

}
