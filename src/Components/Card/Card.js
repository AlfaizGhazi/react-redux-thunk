import * as React from "react";
import { StyledDiv, StyledB } from "../../Utils";

export const Card = (props) => {
  const { dataList } = props;

  return (
    <StyledDiv className="card__wrapper">
      {dataList &&
        dataList.map((post) => {
          return (
            <StyledDiv className="card" key={post.id}>
              <StyledDiv className="card__header">
                <StyledDiv className="card__id">
                  <StyledB>Card ID:</StyledB> {post.id}
                </StyledDiv>
                <StyledDiv className="card__user__id">
                  <StyledB>User ID:</StyledB> {post.userId}
                </StyledDiv>
              </StyledDiv>
              <StyledDiv className="card__content">
                <StyledDiv className="card__title">
                  <StyledB>Title:</StyledB> {post.title}
                </StyledDiv>
                <StyledDiv className="card__body">
                  <StyledB>Description:</StyledB> {post.body}
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          );
        })}
    </StyledDiv>
  );
};
