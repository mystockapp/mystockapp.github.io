import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 15px;
  max-width: 480px;
`;

export const ValueContainer = styled.div`
  display: flex;
`;

export const LineChartContainer = styled.div`
  flex: 1;
`;

export const ValueList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

export const Value = styled.li`
  margin: 0;
  padding: 5px;
  color: white;
  span {
    font-weight: bold;
  }
`;

export const FirstValue = styled(Value)`
  color: #09d3ac;
  font-size: 40px;
  span {
    font-size: 100px;
  }
  p {
    margin: 30px 0 10px;
    font-size: 24px;
  }
`;

export const Head = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: normal;
`;

export const Type = styled.p`
  color: white;
`;
