import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../wrapper";
import { request } from "../../utils/request";
import ROUTES from "../../apiConfig";
import { useAuth } from "../../context/AuthProvider";
import { setChannels } from "../../slices/channelsSlice";
import Channels from "../channels";
import Chat from '../chat';

const MainPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const config = { headers: auth.getAuthHeader() };
      const response = await request(ROUTES.DATA_API, config);
      dispatch(setChannels(response));
    };
    fetchData();
  }, [auth]);

  return (
    <Wrapper>
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <Chat />
        <div className="col p-0 h-100"></div>
      </div>
    </Wrapper>
  );
};

export default MainPage;
