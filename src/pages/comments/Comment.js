import React from 'react'
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DropdownEditDelete } from '../../components/DropdownEditDelete';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/Comment.module.css"

const Comment = (props) => {
    const { profile_id, owner, edited_at, content, comment_image } = props;

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
            </Link>
            <Media.Body className="align-self-center ml-2">
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{edited_at}</span>
                <p>{content}</p>
            </Media.Body>
            <img
            alt="comment with a picture of dish"
            height={35}
            width={35}
            className="mr-3"
            src={comment_image}
            />
            {is_owner && (
                <DropdownEditDelete handleEdit={() => {}} handleDelete={() => {}} />
            )}
        </Media>
    </div>
  );
};

export default Comment;