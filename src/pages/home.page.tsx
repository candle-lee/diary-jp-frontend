import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                navigate('signin');
            }}>signin</button>
            This is HomePage Page.
        </div>
    )
}

export default HomePage;