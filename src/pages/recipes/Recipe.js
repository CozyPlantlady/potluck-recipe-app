import React from 'react'
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DropdownEditDelete } from '../../components/DropdownEditDelete';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Recipe = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        title,
        content,
        image,
        method,
        keywords,
        edited_at,
        recipePage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

  return (
    <Card>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profile/${profile_id}`}>
                    {owner} { profile_image } 
                </Link>
                <div className="d-flex align-items-center">
                    <span>{edited_at}</span>
                    {is_owner && recipePage && <DropdownEditDelete /> }
                </div>
            </Media>
        </Card.Body>
        <Link to={`/recipes/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className='text-center'>{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
            {method && <Card.Text>{method}</Card.Text>}
            {keywords && <Card.Text>{keywords}</Card.Text>}
            { profile_image } 
        </Card.Body>
        
    </Card>
  )
}

export default Recipe