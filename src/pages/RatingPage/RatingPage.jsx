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
import { useTranslation } from "react-i18next";

function RatingPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("No verified");

  return (
    <Container>
      <H1 className={"desktop"}>{t("Seasonal")}</H1>
      <MobileHeader title={t("Seasonal")} className="rating" />
      <Radio
        items={[t("NoVer"), t("Ver"), t("Partners")]}
        value={filter}
        name={"userType"}
        onChange={(value) => setFilter(value)}
      />
      <RatingSection>
        <Caption>
          <Title>TOP - 5</Title>
          <Text>{t("EndSeason")}</Text>
        </Caption>
        <TopContainer>
          <TopItem>
            <Rank>1</Rank>
            <Image src={placeholderImage} />
            <ItemRank>1 {t("Rank")}</ItemRank>
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
          <SubTitle>{t("YourPos")} 64</SubTitle>
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
          <SubTitle>3 {t("LastPos")}</SubTitle>
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
