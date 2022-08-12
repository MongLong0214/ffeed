import React, { useEffect, useState } from "react";
import * as API from "../api";
import Image from "next/image";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";
import Next from "../public/next.png";
import Down from "../public/down.png";

const MainContainer = () => {
  const [data, setData] = useState([]);
  const [eachData, setEachData] = useState(null);
  // bigCategory가 true면 제품 전체 , false면 가구
  const [bigCategory, setBigCategory] = useState(true);
  // bigCategory2가 true면 가구 , false면 암체어, 의자, 테이블
  const [bigCategory2, setBigCategory2] = useState(true);
  //smallCategory로 소분류 카테고리 구분
  const [smallCategory, setSmallCategory] = useState("default");

  const [btn, setBtn] = useState("");

  const btnHandler = (event) => {
    setBtn(event.target.id);
  };

  //   useEffect(() => {
  //     console.log("btn", btn);
  //     const allBtnArr = ["diningChair", "stool", "swivelChair", "swivelChair"];
  //     const nonTargetedBtnArr = allBtnArr.filter((item) => item != btn);
  //     document.getElementById(btn).style.color = "black";
  //     nonTargetedBtnArr.map((item) => {
  //       document.getElementById(item).style.color = "black";
  //       return null;
  //     });
  //     document.getElementById(btn).style.textDecoration = "underline";
  //   }, [btn]);

  //데이터 GET
  useEffect(() => {
    const getData = async () => {
      const res = await API.get("product");
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <>
      <BodyWrapper>
        <BodyContainer>
          <MainMenuWrapper>
            {bigCategory ? (
              <>
                <MainMenu>제품 전체</MainMenu>
                <MainMenuArrow>
                  <Image src={Next} height="30" alt="next" />
                </MainMenuArrow>
              </>
            ) : null}

            {!bigCategory && smallCategory == "default" ? (
              <>
                <MainMenu>가구</MainMenu>
                <MainMenuArrow>
                  <Image src={Down} height="30" alt="next" />
                </MainMenuArrow>
              </>
            ) : null}
            {smallCategory != "default" ? (
              <>
                <MainMenu>가구</MainMenu>
                <MainMenuArrow>
                  <Image src={Next} height="30" alt="next" />
                </MainMenuArrow>
                <MainMenu
                  onClick={() => {
                    if (smallCategory === "암체어") {
                      setEachData(
                        data.filter((item) => item.largeCategory == "armchair")
                      );
                    } else if (smallCategory === "의자") {
                      setEachData(
                        data.filter((item) => item.largeCategory == "chair")
                      );
                    } else if (smallCategory === "테이블") {
                      setEachData(
                        data.filter((item) => item.largeCategory == "table")
                      );
                    }
                  }}
                >
                  {smallCategory}
                </MainMenu>
                <MainMenuArrow>
                  <Image src={Down} height="30" alt="next" />
                </MainMenuArrow>
              </>
            ) : null}
          </MainMenuWrapper>

          <SubMenuWrapper>
            <SubMenu
              onClick={() => {
                {
                  if (!bigCategory) {
                    setBigCategory(true);
                    setSmallCategory("default");
                  }
                }
                setBigCategory2(true);
                setEachData(data.filter((item) => item));
              }}
            >
              전체
            </SubMenu>
            {smallCategory == "default" && bigCategory == true ? (
              <SubMenu2
                onClick={() => {
                  setEachData(data.filter((item) => item));
                  if (bigCategory2) {
                    setBigCategory(!bigCategory);
                    setBigCategory2(!bigCategory2);
                  }
                }}
              >
                가구
              </SubMenu2>
            ) : null}

            {smallCategory == "default" &&
            bigCategory == false &&
            bigCategory2 == false ? (
              <>
                <SubMenu2
                  onClick={() => {
                    setSmallCategory("암체어");
                    setEachData(
                      data.filter((item) => item.largeCategory == "armchair")
                    );
                  }}
                >
                  암체어/라운지체어
                </SubMenu2>
                <SubMenu2
                  onClick={() => {
                    setSmallCategory("의자");
                    setEachData(
                      data.filter((item) => item.largeCategory == "chair")
                    );
                  }}
                >
                  의자
                </SubMenu2>
                <SubMenu2
                  onClick={() => {
                    setSmallCategory("테이블");
                    setEachData(
                      data.filter((item) => item.largeCategory == "table")
                    );
                  }}
                >
                  테이블
                </SubMenu2>
              </>
            ) : null}

            {smallCategory == "암체어" ? (
              <>
                {" "}
                <SubMenu2>암체어</SubMenu2>
              </>
            ) : null}
            {smallCategory == "의자" ? (
              <>
                {" "}
                <SubMenu2
                  id="diningChair"
                  onClick={() => {
                    setEachData(
                      data.filter((item) => item.smallCategory == "diningChair")
                    );
                    btnHandler(event);
                  }}
                >
                  다이닝 체어
                </SubMenu2>
                <SubMenu2
                  id="stool"
                  onClick={() => {
                    setEachData(
                      data.filter((item) => item.smallCategory == "stool")
                    );
                    btnHandler(event);
                  }}
                >
                  벤치/스툴
                </SubMenu2>
                <SubMenu2
                  id="swivelChair"
                  onClick={() => {
                    setEachData(
                      data.filter((item) => item.smallCategory == "swivelChair")
                    );
                    btnHandler(event);
                  }}
                >
                  스웨벨 체어
                </SubMenu2>
                <SubMenu2
                  id="stackingChair"
                  onClick={() => {
                    setEachData(
                      data.filter(
                        (item) => item.smallCategory == "stackingChair"
                      )
                    );
                    btnHandler(event);
                  }}
                >
                  스태킹 체어
                </SubMenu2>
              </>
            ) : null}
            {smallCategory == "테이블" ? (
              <>
                {" "}
                <SubMenu2
                  onClick={() => {
                    setEachData(
                      data.filter((item) => item.smallCategory == "sideTable")
                    );
                  }}
                >
                  사이드 테이블
                </SubMenu2>
                <SubMenu2
                  onClick={() => {
                    setEachData(
                      data.filter((item) => item.smallCategory == "desk")
                    );
                  }}
                >
                  책상
                </SubMenu2>
              </>
            ) : null}
          </SubMenuWrapper>
          <ProductCardWrapper>
            <Container sx={{ marginBottom: 5, marginTop: 5 }}>
              {eachData === null ? (
                <Grid container spacing={8}>
                  {data?.map((item, idx) => (
                    <Grid item xs={12} md={6} lg={6} key={idx}>
                      <ProductCard
                        key={idx}
                        id={item.id}
                        name={item.name}
                        englishName={item.englishName}
                        des={item.des}
                        engDes={item.engDes}
                        image={item.image}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Grid container spacing={8}>
                  {eachData?.map((item, idx) => (
                    <Grid item xs={12} md={6} lg={6} key={idx}>
                      <ProductCard
                        key={idx}
                        id={item.id}
                        name={item.name}
                        englishName={item.englishName}
                        des={item.des}
                        engDes={item.engDes}
                        image={item.image}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Container>
          </ProductCardWrapper>
        </BodyContainer>
      </BodyWrapper>
    </>
  );
};

export default MainContainer;

const BodyWrapper = styled.section`
  width: 60vw;
  /* height: 100vh; */
  /* margin-left: 20%; */
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const BodyContainer = styled.section`
  margin: 0 2% 0 2%;
  /* background-color: green; */
`;

const MainMenuWrapper = styled.div`
  height: 8vh;
  display: flex;
  padding-top: 2rem;
  /* background-color: red; */
`;
const MainMenu = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2f2f2f;
  cursor: pointer;

  /* background-color: yellow; */
  margin-right: 0.5rem;
`;
const MainMenuArrow = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  margin-top: 0.4rem;
  margin-right: 0.5rem;
  /* background-color: gray; */
`;

const SubMenuWrapper = styled.div`
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
`;

const SubMenu = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2f2f2f;
  cursor: pointer;

  /* border-bottom: 3px solid black; */

  /* background-color: yellow; */
  margin-right: 1rem;
`;
const SubMenu2 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #c3c3c3;
  cursor: pointer;

  /* border-bottom: 3px solid black; */

  /* background-color: yellow; */
  margin-right: 1rem;
`;
const ProductCardWrapper = styled.section`
  /* background-color: gray; */
  display: flex;
  justify-content: space-around;
`;
