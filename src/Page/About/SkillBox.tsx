import React from "react";
import styled from "styled-components";
import { skillListArr } from "@Data/SkillList";
import SkillIcon from "./SkillIcon";

const SkillBox = () => {
  return (
    <Div>
      {skillListArr.map((data, index) => (
        <SkillIcon key={index} data={data.data} title={data.title}></SkillIcon>
      ))}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;

  /* background-color: #ffa600ca; */

  padding: 30px;

  display: flex;
  justify-content: center;
  flex-direction: row;

  gap: 30px 30px;
  flex-wrap: wrap;
`;

export default SkillBox;
