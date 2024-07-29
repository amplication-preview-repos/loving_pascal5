import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FollowList } from "./follow/FollowList";
import { FollowCreate } from "./follow/FollowCreate";
import { FollowEdit } from "./follow/FollowEdit";
import { FollowShow } from "./follow/FollowShow";
import { OtpList } from "./otp/OtpList";
import { OtpCreate } from "./otp/OtpCreate";
import { OtpEdit } from "./otp/OtpEdit";
import { OtpShow } from "./otp/OtpShow";
import { ProfilePictureList } from "./profilePicture/ProfilePictureList";
import { ProfilePictureCreate } from "./profilePicture/ProfilePictureCreate";
import { ProfilePictureEdit } from "./profilePicture/ProfilePictureEdit";
import { ProfilePictureShow } from "./profilePicture/ProfilePictureShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"User"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Follow"
          list={FollowList}
          edit={FollowEdit}
          create={FollowCreate}
          show={FollowShow}
        />
        <Resource
          name="Otp"
          list={OtpList}
          edit={OtpEdit}
          create={OtpCreate}
          show={OtpShow}
        />
        <Resource
          name="ProfilePicture"
          list={ProfilePictureList}
          edit={ProfilePictureEdit}
          create={ProfilePictureCreate}
          show={ProfilePictureShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
