import styled from '@emotion/styled';

const TransactionTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  border-collapse: collapse;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);

  & thead {
    & tr {
      background-color: rgb(37, 169, 213);

      & th {
        padding: 15px;

        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: white;
      }
    }
  }

  & tbody {
    & tr {
      & td {
        padding: 10px;

        color: grey;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

export { TransactionTable };
