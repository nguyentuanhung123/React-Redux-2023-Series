import PropTypes from 'prop-types';

const HobbyList = (props) => {

    const { hobbyList } = props;
   
    return(
        <ul>
            {
                hobbyList.map((hobby) => {
                    return(
                        <li key={hobby.id}>
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
}

HobbyList.defaultProps = {
    hobbyList: []
}
