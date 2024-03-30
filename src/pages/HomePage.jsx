import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from '../actions/hobby'


const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

const HomePage = (props) => {

    /**
     * hobby : hobbyReducer
     * strict comparison === (so sánh nếu khác thì trigger re-render)
     * shallow comparison {a, b} {a, b}
     */

    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    /**
     * Không nên làm như bên dưới
     */

    // const hobbyState = useSelector((state) => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId
    // }), shallowEqual)

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

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>Redux Hooks - Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId= {activeId}
                onHobbyClick={handleHobbyClick}/>
        </div>
    )
}

export default HomePage;

HomePage.propTypes = {

}
