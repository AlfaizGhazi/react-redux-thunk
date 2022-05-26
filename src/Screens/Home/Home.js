import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiAction } from "../../Services/Redux/Actions";

import { StyledDiv, StyledButton } from "../../Utils";

import { Card } from "../../Components";

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.apiState.apiData);

  React.useEffect(() => {
    dispatch(getApiAction());
  }, [dispatch]);

  return (
    <StyledDiv className="home">{posts && <Card dataList={posts} />}</StyledDiv>
  );
};
