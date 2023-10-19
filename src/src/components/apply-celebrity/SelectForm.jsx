import { useState } from "react";
import styled from "styled-components";

const Styled = {
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    font-size: 1rem;
  `,
  Select: styled.select`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  `,
};

function SelectForm({ options, label, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Styled.SelectContainer>
      <Styled.Label htmlFor="select">{label}</Styled.Label>
      <Styled.Select
        id="select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">선택하세요</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectContainer>
  );
}

export default SelectForm;
