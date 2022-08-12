import React from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductCard = (props) => {
  return (
    <div>
      <ProductCardContainer>
        <ImgContainer src={props.image} />
        <NameContainer>
          <KorName>{props.name}</KorName>
          <EngName>({props.englishName})</EngName>
        </NameContainer>
        <DesContainer>
          <EngDes>{props.engDes}</EngDes>
          <KorDes>{props.des}</KorDes>
        </DesContainer>
        <BtnContainer>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </BtnContainer>
      </ProductCardContainer>
    </div>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  /* width: 50%; */

  /* background-color: yellow; */
`;
const ImgContainer = styled.img`
  width: 100%;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  width: 100%;
  /* background-color: gray; */
`;
const KorName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const EngName = styled.div`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;
const DesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: red; */
`;
const EngDes = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const KorDes = styled.div`
  font-size: 1.2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 1rem; */
  width: 100%;
  margin-left: -1rem;
  /* background-color: red; */
`;
