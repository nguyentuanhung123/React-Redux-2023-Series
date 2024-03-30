import PropTypes from 'prop-types';
import './HobbyList.css'

const HobbyList = (props) => {

    const { hobbyList, activeId, onHobbyClick } = props;
   
    const handleClick = (hobby) => {
        if(onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return(
        <ul className='hobby-list'>
            {
                hobbyList.map((hobby) => {
                    return(
                        <li 
                            key={hobby.id}
                            className={hobby.id === activeId ? 'active': ''}
                            onClick={() => handleClick(hobby)}
                        >
                            {hobby.title}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HobbyList;

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func
}

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null
}
