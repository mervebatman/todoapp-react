import React from 'react';

import { Card, ContentSubtitle, Large } from 'components';
import NotLogin from 'pages/Layout/NotLogin';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserTypeField } from 'redux/slices/signUp/signUpSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavite = (type) => {
    dispatch(updateUserTypeField(type));

    navigate('/signup-user');
  };

  return (
    <NotLogin>
      <Card className="flex bg-white flex-col justify-center mx-auto w-full h-70vh sm:w-96 rounded-md shadow-2xl p-0 border-none">
        <div className="flex flex-row w-full p-6 h-auto items-center  text-center justify-center gap-x-4">
          <Card
            className="bg-primary border-white h-32 cursor-pointer items-center justify-center text-center space-y-2"
            onClick={() => {
              handleNavite('şahıs');
            }}
          >
            <i className="fa-solid fa-circle-user text-white" />
            <Large variant="white" weight="semibold">
              Şahıs Hesabı Oluştur
            </Large>
          </Card>
          <Card
            className="bg-primary border-white h-32 cursor-pointer items-center justify-center text-center space-y-2"
            onClick={() => {
              handleNavite('işletme');
            }}
          >
            <i className="fa-solid fa-briefcase text-white" />
            <Large variant="white" weight="semibold">
              İşletme Hesabı Oluştur
            </Large>
          </Card>
        </div>
        <ContentSubtitle className="mx-auto">
          Şahıs veya İşletme olarak kolayca kayıt olabilirsiniz.
        </ContentSubtitle>
      </Card>
    </NotLogin>
  );
};

SignUp.propTypes = {};

export default SignUp;
