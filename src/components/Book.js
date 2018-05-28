import React from 'react';
import Fave from './Fave';

export default class Book extends React.Component {

  render() {

    const { title, id, acf: { isbn }, toggleFave } = this.props;

    const image = this.props._embedded['wp:featuredmedia']['0'].source_url;

    // Get custom taxonomy data 
    const taxonomies = this.props._embedded['wp:term'];
    const flatTaxonomies = [].concat(...taxonomies);
    
    // Get subjects
    const subjects = flatTaxonomies.filter(obj => obj.taxonomy === 'subject');

    return (
      <div className="book" >

        <Fave toggleFave={toggleFave} id={id} />
      
        <img src={image} alt=""/>
       
        <h2>Title: <span>{title.rendered}</span></h2>
       
        <h2>ISBN: <span>{isbn}</span></h2>
       
        <h2>Subjects: 
    
          {subjects.map((subject, i, arr) => {
            const comma = arr.length === i + 1 ? '' : ', '
            return (
              <span key={subject.id}>
                <a
                  href={subject.link} 
                  key={subject.id}>
                    {
                      subject.name
                    } 
                </a>
                {comma}
              </span> )
            })}
        </h2>  

      </div>
    );
  }
};
