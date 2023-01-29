import React, { useState } from 'react'
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { DropdownEditDelete } from '../../components/DropdownEditDelete';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/Comment.module.css";
import CommentEditForm from './CommentEditForm';


const Comment = (props) => {
    const {
        profile_id,
        owner,
        edited_at,
        content,
        comment_image,
        id,
        setComments
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)

            setComments(prevComments => ({
                prevComments,
                results: prevComments.results.filter(comment => comment.id !== id),
            }));
        } catch(err){

        }
    }

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
            </Link>
            <Media.Body className="align-self-center ml-2">
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{edited_at}</span>
                {showEditForm ? (
                    <CommentEditForm
                        id={id}
                        profile_id={profile_id}
                        content={content}
                        setComments={setComments}
                        setShowEditForm={setShowEditForm}
                    />
                ) : (
                <p>{content}</p>
                )}
            </Media.Body>
            <img
            alt="comment of dish"
            height={35}
            width={35}
            className="mr-3"
            src={comment_image}
            />
            {is_owner && (
                <DropdownEditDelete handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
            )}
        </Media>
    </div>
  );
};

export default Comment;