import React, { useEffect } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import HeaderContent from "./Layouts/components/Header/HeaderContent/HeaderContent";
import SideBar from "./Layouts/components/SideBar/SideBar";
import { publishRoutes } from "./routers";
import ScrollToTop from "./routers/ScrollToTop";
import { Peer } from "peerjs";
import { useDispatch } from "react-redux";
import { peerRequest } from "./redux/slice/peerSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const newPeer = new Peer(undefined, {
  //     path: "/",
  //     secure: true,
  //   });

  //   dispatch(peerRequest(newPeer));
  // }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {publishRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              const Page = route.component;
              let SideBarLayout = route.sideBarLayout ?? SideBar;
              let Header = route.Header ?? HeaderContent;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout SideBarLayout={SideBarLayout} Header={Header}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
