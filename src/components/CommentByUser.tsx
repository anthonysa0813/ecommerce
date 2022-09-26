import { User } from 'interfaces'
import React from 'react'
import ReactStars from 'react-stars'
import styles from "../styles/CommentByUser.module.css";

type Prop  = {
   user: User
}

const CommentByUser = ({user}: Prop) => {
  return (
    <div className={styles.commentContainer}>
        <div className={styles.head}>
            <div className={styles.imageHead}>
                <img src={user.image} alt={user.name} />
            </div>
            <div className="infoHead">
                <h5>{user.name}</h5>
                <ReactStars
                    count={5}
                    value={Number(user.stars)}
                    size={30}
                    color2={'#ffd700'} 
                />
            </div>
        </div>
            <div className="description">
                <p>{user.comment}</p>
            </div>
    </div>
  )
}

export default CommentByUser