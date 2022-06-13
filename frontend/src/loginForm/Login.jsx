import React from 'react';
import Button from 'react-bootstrap/Button';

export const Login = () => {
  return (
    <div className="btn_container_logIn">
      <div className="title_and_logo">
        <div className="image_findMe">
          <img className="onboarding__left" src="image/findMe.png" alt="Sky" />
        </div>

        <div className="content_title_logo_paragraf_btn">
          <h1 className="findMe_title">Find Me</h1>
          <img
            className="logo"
            src="/image/loginImage/fineMeLogo.png"
            alt="image"
          />
          <p>There is alwayes someone waiting you</p>
          <p>Don't fell alone with Us!</p>

          <div className="btn_login_logUp_contain">
            <Button
              className="button_login"
              variant=" #128ca0"
              size="lg"
              active
            >
              Sign Up
            </Button>
            <Button
              className="button_login"
              variant=" #128ca0"
              size="lg"
              active
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
