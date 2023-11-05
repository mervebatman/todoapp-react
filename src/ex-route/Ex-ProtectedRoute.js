import React from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getStoragedItem } from 'utils/helper';

const ProtectedRoute = ({ children }) => {
  const UserInfo = getStoragedItem('clientToken');
  if (UserInfo) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.any.isRequired,
};
