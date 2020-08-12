import React, { Fragment } from 'react';
import HomeText from '../layout/HomeText';

const Home = () => {
  return (
    <Fragment>
      <div className='homepage'>
        <div className='grid'>
          <HomeText
            topnote='notre restaurant'
            title='Restaurant de Barbecue coréen'
            content='Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur «
          Modifier Texte » ou double-cliquez ici pour ajouter votre contenu et
          personnaliser les polices. Déplacez-moi où vous le souhaitez sur votre
          page.'
          />
          <img
            src='https://static.wixstatic.com/media/e4cab1_1039cb18e7d249dab1c7af5f13068bc4~mv2.jpg/v1/fill/w_445,h_257,al_c,q_80,usm_0.66_1.00_0.01/KakaoTalk_Photo_2020-07-31-17-56-19_edit.webp'
            alt=''
          ></img>
          <img
            src='https://static.wixstatic.com/media/e4cab1_435aeda726d6412098e5003e5dcbe1d2~mv2.jpg/v1/fill/w_447,h_461,al_c,q_80,usm_0.66_1.00_0.01/valery-rabchenyuk-5I_oFqB0n6g-unsplash_e.webp'
            alt=''
          ></img>
        </div>
        <div className='grid'>
          <img
            src='https://static.wixstatic.com/media/e4cab1_a63c41ef6ee24e4abbe6361de623a71e~mv2.jpg/v1/fill/w_445,h_500,al_c,q_80,usm_0.66_1.00_0.01/pexels-mat-brown-1395967_edited.webp'
            alt=''
          ></img>
          <img
            src='https://static.wixstatic.com/media/e4cab1_1ef819804458486d8353eb0944d58693~mv2.jpg/v1/fill/w_448,h_305,al_c,q_80,usm_0.66_1.00_0.01/181114130138-korean-food-262001420120400.webp'
            alt=''
          ></img>
          <HomeText
            topnote='les conseils de champetre'
            title='Comment le manger?'
            content='Paragraphe. Cliquez ici pour ajouter votre propre texte. '
          />
        </div>
      </div>
      <div className='bottom-image'>
        <img
          src='https://static.wixstatic.com/media/e4cab1_c419be012a6d4b7f82480df629656410~mv2.jpg/v1/crop/x_0,y_23,w_3000,h_1954/fill/w_929,h_605,al_c,q_85,usm_0.66_1.00_0.01/jakub-kapusnak-4f4YZfDMLeU-unsplash_edit.webp'
          alt=''
        ></img>
        <HomeText
          topnote='Écolomag.com'
          title='« Je suis un témoignage. Cliquez ici pour me modifier et valoriser votre activité. »'
        />
      </div>
    </Fragment>
  );
};

export default Home;
