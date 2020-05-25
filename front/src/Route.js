import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({ layout: Layout, component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}/>
  );
}
