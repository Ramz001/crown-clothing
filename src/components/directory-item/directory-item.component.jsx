import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    
    return(
        <div  className="directory-item-container">
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <Link to={`/shop/${title}`} className="directory-body-container">
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    )
}

export default DirectoryItem;