import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import heartIcon1 from "../img/heart1.png";
import heartIcon2 from "../img/heart2.png";
import commentIcon1 from "../img/comment1.png";
import commentIcon2 from "../img/comment2.png";
import retweetIcon1 from "../img/retweet1.png";
import retweetIcon2 from "../img/retweet2.png";
import { incrementLikes, decrementLikes, incrementComments, decrementComments, incrementReposts, decrementReposts } from '../../store/actions/publicationActions';
import { PublicationsTitle, PublicationButtonsNumber, PublicationButtons, PublicationImgReactions, PublicationWrapper, PublicationImgAvatar, PublicationTopContainer, PublicationImg, PublicationBottonContainer } from "../../pages/styled-components/StyledComponents";

const Publication = ({ publication }) => {
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [reposted, setReposted] = useState(false);
  
  const dispatch = useDispatch();
  
  const handleLike = () => {
    if (liked) {
      dispatch(decrementLikes(publication.id));
      setLiked(false);
    } else {
      dispatch(incrementLikes(publication.id));
      setLiked(true);
    }
  };
  
  const handleComment = () => {
    if (commented) {
      dispatch(decrementComments(publication.id));
      setCommented(false);
    } else {
      dispatch(incrementComments(publication.id));
      setCommented(true);
    }
  };
  
  const handleRepost = () => {
    if (reposted) {
      dispatch(decrementReposts(publication.id));
      setReposted(false);
    } else {
      dispatch(incrementReposts(publication.id));
      setReposted(true);
    }
  };
  
  return (
    <PublicationWrapper>
      <PublicationTopContainer>
        <PublicationImgAvatar src={publication.avatarUrl} alt={publication.author} />
        <h3>{publication.author}</h3>
        <h4>{publication.authorNickname}</h4>
        <p>{publication.publicationDate}</p>
      </PublicationTopContainer>
      <p>{publication.text}</p>
      <PublicationImg src={publication.authorImage} alt="Publication" />
      <PublicationBottonContainer>
        <PublicationButtonsNumber>
          <PublicationButtons onClick={handleLike}>
            {liked ? <PublicationImgReactions src={heartIcon2} alt='Liked' /> : <PublicationImgReactions src={heartIcon1} alt='Not liked' />}
          </PublicationButtons>
          {publication.likes}
        </PublicationButtonsNumber>
        <PublicationButtonsNumber>
          <PublicationButtons onClick={handleComment}>
            {commented ? <PublicationImgReactions src={commentIcon2} alt='Commented' /> : <PublicationImgReactions src={commentIcon1} alt='Uncommented' />}
          </PublicationButtons>
          {publication.comments}
        </PublicationButtonsNumber>
        <PublicationButtonsNumber>
          <PublicationButtons onClick={handleRepost}>
            {reposted ? <PublicationImgReactions src={retweetIcon2} alt='Retweeted' /> : <PublicationImgReactions src={retweetIcon1} alt='Not retweeted' />}
          </PublicationButtons>
          {publication.reposts}
        </PublicationButtonsNumber>
      </PublicationBottonContainer>
    </PublicationWrapper>
  );
};


const Publications = () => {
  const publications = useSelector((state) => state.publications);
  
  return (
    <div>
    <PublicationsTitle>Publications</PublicationsTitle>
    {publications.slice().reverse().map((publication, index) => (
      <Publication key={index} publication={publication} />
    ))}
  </div>
  );
};

export default Publications;