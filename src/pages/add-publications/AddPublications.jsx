import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPublication } from '../../store/actions/publicationActions';
import { useNavigate } from 'react-router-dom';
import { PublicationsTitle, AddForm, AddSubmit, AddFormSelect, AddFormInputs } from '../../pages/styled-components/StyledComponents';

const AddPublication = () => {
  const [text, setText] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [author, setAuthor] = useState('');
  const [authorNickname, setAuthorNickname] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');;
  const [publicationDate, setPublicationDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setPublicationDate(currentDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicationData = {
      text,
      authorImage,
      author,
      authorNickname,
      avatarUrl,
      publicationDate,
    };

    dispatch(addPublication(publicationData));

    setText('');
    setAuthorImage('');
    setAuthor('');
    setAuthorNickname('');
    setAvatarUrl('');
    navigate('/publications');
  };

  return (
    <div>
      <PublicationsTitle>Add Publication</PublicationsTitle>
      <AddForm onSubmit={handleSubmit}>
        <div>
          <AddFormInputs
            type="text"
            placeholder="Avatar URL"
            id="avatarUrl"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <div>
          <AddFormSelect id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="">Select an author</option>
              <option value="Thomas Anderson">Thomas Anderson</option>
              <option value="Darth Vader">Darth Vader</option>
              <option value="Т-800">Т-800</option>
          </AddFormSelect>
        </div>
        <div>
          <AddFormInputs
            type="text"
            placeholder="Nickname"
            id="authorNickname"
            value={authorNickname}
            onChange={(e) => setAuthorNickname(e.target.value)}
          />
        </div>
        <div>
          <AddFormInputs
            type="text"
            id="date" 
            value={publicationDate} 
            readOnly 
          />
        </div>
        <div>
          <AddFormInputs
            type="text"
            placeholder="Text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <AddFormInputs
            type="text"
            placeholder="Image URL"
            id="authorImage"
            value={authorImage}
            onChange={(e) => setAuthorImage(e.target.value)}
          />
        </div>
        <AddSubmit type="submit">Submit</AddSubmit>
      </AddForm>
  </div>
  );
};

export default AddPublication;