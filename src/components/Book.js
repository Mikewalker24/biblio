import React from 'react';
import PropTypes from 'prop-types';
import Fave from './Fave';

const Book = ({ faves, toggleFave, post }) => {
  const {
    title,
    acf: { isbn },
    _embedded,
  } = post;

  const image = _embedded['wp:featuredmedia']['0'].source_url;

  // Get custom taxonomy data
  const taxonomies = _embedded['wp:term'];
  const flatTaxonomies = [].concat(...taxonomies);

  // Get subjects
  const subjects = flatTaxonomies.filter(obj => obj.taxonomy === 'subject');

  return (
    <div className="book">
      <Fave toggleFave={toggleFave} post={post} faves={faves} />

      <img src={image} alt="" />

      <h2>
        Title: <span>{title.rendered}</span>
      </h2>

      <h2>
        ISBN: <span>{isbn}</span>
      </h2>

      <h2>
        Subjects:&nbsp;
        {subjects.map((subject, i, arr) => {
          const comma = arr.length === i + 1 ? '' : ', ';

          return (
            <span key={subject.id}>
              <a href={subject.link}>{subject.name}</a>
              {comma}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

Book.propTypes = {
  faves: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.object.isRequired,
  toggleFave: PropTypes.func.isRequired,
};

export default Book;
