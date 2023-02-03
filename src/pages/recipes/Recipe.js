import React from 'react'
import { Card, Media } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
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
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/recipes/${id}/edit`)
    }

    const handleDelete = async() => {
        try {
            await axiosRes.delete(`/recipes/${id}/`);
            history.goBack();
        }catch (err) {
            console.log(err);
        }
    };

  return (
    <Card>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{edited_at}</span>
                    {is_owner && recipePage && 
                    <DropdownEditDelete handleEdit={handleEdit} handleDelete={handleDelete} /> }
                </div>
            </Media>
        </Card.Body>
        <Link to={`/recipes/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className='text-center'>{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
            <p>Keywords:</p>
            {method && <Card.Text>{method}</Card.Text>}
            {keywords && <Card.Text>{keywords}</Card.Text>}
        </Card.Body>
        
    </Card>
  )
}

export default Recipe