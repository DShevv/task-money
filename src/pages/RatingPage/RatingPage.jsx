import { useState } from "react";
import Radio from "../../components/Inputs/Radio/Radio";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import {
  Caption,
  Container,
  Image,
  ItemRank,
  RatingSection,
  Score,
  SubTitle,
  Text,
  Title,
  TopContainer,
  TopItem,
  Username,
  Rank,
} from "./RatingPage.style";
import placeholderImage from "../../assets/placeholders/gray.png";
import Divider from "../../components/Divider/Divider";

function RatingPage() {
  const [filter, setFilter] = useState("No verified");

  return (
    <Container>
      <H1 className={"desktop"}>Seasonal rating</H1>
      <MobileHeader title={"Seasonal rating"} className="rating" />
      <Radio
        items={["No verified", "Verified", "Partners"]}
        value={filter}
        name={"userType"}
        onChange={(value) => setFilter(value)}
      />
      <RatingSection>
        <Caption>
          <Title>TOP - 5</Title>
          <Text>
            At the end of the season, users who are in the top 5 ratings in
            their league receive a cash reward.
          </Text>
        </Caption>
        <TopContainer>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
        </TopContainer>
      </RatingSection>
      <Divider style={{ height: "2px" }} className={"desktop"} />
      <RatingSection>
        <Caption>
          <SubTitle>Your position rating 64</SubTitle>
        </Caption>
        <TopContainer className="middle">
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>64 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
        </TopContainer>
      </RatingSection>
      <Divider style={{ height: "2px" }} className={"desktop"} />
      <RatingSection>
        <Caption>
          <SubTitle>3 last places</SubTitle>
        </Caption>
        <TopContainer>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>997 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>998 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>999 Rank</ItemRank>
            <Username>Username</Username>
            <Score>Score</Score>
          </TopItem>
        </TopContainer>
      </RatingSection>
    </Container>
  );
}

export default RatingPage;
