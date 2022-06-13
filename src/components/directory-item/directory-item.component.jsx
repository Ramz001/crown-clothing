import { DirectoryBodyContainer, 
    DirectoryItemContainer } from  './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    
    return(
        <DirectoryItemContainer>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <DirectoryBodyContainer to={`/shop/${title}`} >
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;